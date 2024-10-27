"use client";
import { interestFormShema } from "@/types/form-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { Separator } from "./ui/separator";

export default function InterestsCheckbox({
  interests,
}: {
  interests: { id: string; label: string }[];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const initialPage = parseInt(searchParams.get("page") || "1", 10); // Default to 1 if no page param

  const form = useForm<z.infer<typeof interestFormShema>>({
    resolver: zodResolver(interestFormShema),
    defaultValues: {
      interests: [],
    },
  });

  const interestsPerPage = 5; // Adjust this number based on your needs
  const totalPages = Math.ceil(interests.length / interestsPerPage);

  // Calculate which items to display on the current page
  const startIndex = (initialPage - 1) * interestsPerPage;
  const currentInterests = interests.slice(
    startIndex,
    startIndex + interestsPerPage
  );

  // Placeholder for your database query function
  const queryDatabase = (selectedItems: string[]) => {
    console.log("Querying database with selected items:", selectedItems);
  };

  const composePageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", `${pageNumber}`);
    return `${pathname}?${params.toString()}`;
  };

  // Elipsis button (dotted) will help to jump on middle section of number
  const renderEllipsis = (min: number, max: number) => (
    <PaginationItem>
      <PaginationEllipsis
        href={composePageURL(Math.floor(min + (max - min) / 2))}
      />
    </PaginationItem>
  );

  const renderPageLink = (pageNumber: number) => (
    <PaginationItem>
      <PaginationLink
        href={composePageURL(pageNumber)}
        isActive={pageNumber === initialPage}
      >
        {pageNumber}
      </PaginationLink>
    </PaginationItem>
  );

  if (totalPages == 1 || initialPage < 1 || initialPage > totalPages)
    return null;

  return (
    <Card>
      <CardContent className="pt-5">
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              control={form.control}
              name="interests"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">
                      My saved interests
                    </FormLabel>
                    <FormDescription>
                      Select the your interests to recommend based on that.
                    </FormDescription>
                  </div>
                  {currentInterests.map((interest) => (
                    <FormField
                      key={interest.id}
                      control={form.control}
                      name="interests"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={interest.id}
                            className="flex flex-row items-center space-x-2 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                aria-label={interest.label}
                                checked={field.value?.includes(interest.id)}
                                onCheckedChange={(checked) => {
                                  const newValue = checked
                                    ? [...field.value, interest.id]
                                    : field.value?.filter(
                                        (value) => value !== interest.id
                                      );

                                  field.onChange(newValue);
                                  queryDatabase(newValue); // Trigger database query
                                }}
                              />
                            </FormControl>
                            <FormLabel
                              aria-labelledby={interest.label}
                              className="font-normal"
                            >
                              {interest.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <Separator className="mb-5" />
      <CardFooter className="px-2">
        <Pagination>
          <PaginationContent className="flex flex-wrap justify-center overflow-hidden">
            <PaginationItem>
              <PaginationPrevious
                href={composePageURL(initialPage - 1)}
                aria-disabled={initialPage <= 1}
                tabIndex={initialPage <= 1 ? -1 : undefined}
                className={
                  initialPage <= 1
                    ? "pointer-events-none opacity-50"
                    : undefined
                }
              />
            </PaginationItem>
            {initialPage === 1 ? null : renderPageLink(1)}
            {initialPage === 1 || initialPage - 1 === 1 || initialPage - 2 === 1
              ? null
              : initialPage - 3 > 1
              ? renderEllipsis(2, initialPage - 2)
              : renderPageLink(initialPage - 2)}

            {initialPage === 1 || initialPage - 1 === 1
              ? null
              : renderPageLink(initialPage - 1)}

            <PaginationItem>
              <PaginationLink href="#" isActive>
                {initialPage}
              </PaginationLink>
            </PaginationItem>

            {initialPage === totalPages || initialPage + 1 === totalPages
              ? null
              : renderPageLink(initialPage + 1)}
            {initialPage === totalPages ||
            initialPage + 1 === totalPages ||
            initialPage + 2 === totalPages
              ? null
              : initialPage + 3 < totalPages
              ? renderEllipsis(initialPage + 2, totalPages - 1)
              : renderPageLink(initialPage + 2)}
            {initialPage === totalPages ? null : renderPageLink(totalPages)}

            <PaginationItem>
              <PaginationNext
                className={
                  initialPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : undefined
                }
                tabIndex={initialPage === totalPages ? -1 : undefined}
                aria-disabled={initialPage === totalPages}
                href={composePageURL(initialPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  );
}

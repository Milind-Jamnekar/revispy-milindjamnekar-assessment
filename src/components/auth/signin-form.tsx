"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Separator } from "../ui/separator";
import { siginFormSchema } from "@/types/form-schemas";

export default function SigninForm() {
  const form = useForm<z.infer<typeof siginFormSchema>>({
    resolver: zodResolver(siginFormSchema),
    defaultValues: {
      email: "",
      password: undefined,
    },
  });
  function onSubmit(values: z.infer<typeof siginFormSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} placeholder={"password"} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="lg" type="submit" className="w-full uppercase">
          Create account
        </Button>
      </form>
      <Separator className="my-4" />
      <div className="text-sm text-center">
        <span>Don&apos;t an account ? </span>
        <Button variant="link" className="p-1" asChild>
          <Link href="/">Signup</Link>
        </Button>
      </div>
    </Form>
  );
}

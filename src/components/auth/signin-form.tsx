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
import { useActionState, useRef } from "react";
import { authenticate } from "@/lib/action";

export default function SigninForm() {
  // eslint rules compulsory want to removed unused state var but if i removed
  // isPending become function instead of boolean
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof siginFormSchema>>({
    resolver: zodResolver(siginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        noValidate
        onSubmit={form.handleSubmit(() => formRef.current?.submit())}
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
                <Input type="password" placeholder={"password"} {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isPending}
          size="lg"
          type="submit"
          className="w-full uppercase"
        >
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

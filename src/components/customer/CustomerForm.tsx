"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Client, Customer } from "@prisma/client";

import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { CustomerSelect } from "./CustomerSelect";

const formSchema = z.object({
  name: z.string({
    required_error: "Please input employee first name.",
  }),
  client_id: z
    .string({
      required_error: "Please select client.",
    })
    .optional(),
  email: z
    .string({
      required_error: "Please input employee email.",
    })
    .email({
      message: "Please input a valid email.",
    }),
});

function CustomerForm({
  action,
  clientList,
}: {
  action: (data: Customer) => void;
  clientList: Client[];
}) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    await action(values as Customer);

    // Clear the form.
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 mx-auto space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer public name</FormLabel>
              <FormControl>
                <Input placeholder="Input customer public name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer public email</FormLabel>
              <FormControl>
                <Input placeholder="Input customer public email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="client_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select appropriate client</FormLabel>
              <CustomerSelect field={field} items={clientList} />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default CustomerForm;

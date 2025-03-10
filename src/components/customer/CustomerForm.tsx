"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Client, Customer } from "@prisma/client";
import { CustomerType } from "@/src/schema/customer";

import { Button } from "@/src/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/shared/ui/form";
import { Input } from "@/src/shared/ui/input";
import { CustomerSelect } from "./CustomerSelect";

const formSchema = z.object({
  name: z.string({
    required_error: "Please input employee first name.",
  }),
  clientId: z
    .string({
      required_error: "Please select client.",
    })
    .optional(),
});

function CustomerForm({
  action,
  clientList,
}: {
  action: (data: Customer) => void;
  clientList: Client[];
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await action(values as CustomerType);
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
          name="clientId"
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

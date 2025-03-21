"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { EmployeeType } from "@/src/schema/employee";

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

const formSchema = z.object({
  first_name: z.string({
    required_error: "Please input employee first name.",
  }),
  last_name: z.string({
    required_error: "Please input employee last name.",
  }),
});

function EmployeeForm({ action }: { action: (data: EmployeeType) => void }) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    await action(values as EmployeeType);

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
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employee first name</FormLabel>
              <FormControl>
                <Input placeholder="Input employee first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employee last name</FormLabel>
              <FormControl>
                <Input placeholder="Input employee last name" {...field} />
              </FormControl>
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

export default EmployeeForm;

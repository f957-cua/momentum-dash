"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ModuleFormDataType } from "@/src/schema/module";

import { SelectScrollable } from "./SelectScrollable";

import { Button } from "@/src/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/src/shared/ui/form";
import { Textarea } from "@/src/shared/ui/textarea";

import { modules } from "@/src/shared/static/modules";

const formSchema = z.object({
  name: z.string({
    required_error: "Please select an email to display.",
  }),
  notes: z.string().optional(),
});

export function ModuleForm({
  action,
}: {
  action: (data: ModuleFormDataType) => void;
}) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await action(values as ModuleFormDataType);

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
              <FormLabel>Module</FormLabel>
              <SelectScrollable field={field} modules={modules} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block">
                Write notes if necessarily
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Explore the module if you want to"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
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

export default ModuleForm;

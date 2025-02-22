"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Client, Module, Employee } from "@prisma/client";
import { ModuleDurationStatus } from "@/schema/module";

import { SelectScrollable } from "./SelectScrollable";
import { ModuleSelect } from "./ModuleSelect";
import { ModuleDurationSelect } from "./ModuleDurationSelect";
import { ModuleEmployeeSelect } from "./ModuleEmployeeSelect";

import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/ui/form";
import { Textarea } from "@/shared/ui/textarea";

import { modules } from "@/shared/static/modules";
import { DURATION } from "@/shared/static/duration";

const formSchema = z.object({
  name: z.string({
    required_error: "Please select an email to display.",
  }),
  client_id: z.string({
    required_error: "Please select a client.",
  }),
  employee_id: z.string({
    required_error: "Please select an employee.",
  }),
  duration: z.enum([
    ModuleDurationStatus.Enum.HALF_HOUR,
    ModuleDurationStatus.Enum.ONE_HOUR,
    ModuleDurationStatus.Enum.ONE_AND_HALF_HOUR,
    ModuleDurationStatus.Enum.TWO_HOURS,
    ModuleDurationStatus.Enum.TWO_AND_HALF_HOURS,
    ModuleDurationStatus.Enum.THREE_HOURS,
    ModuleDurationStatus.Enum.THREE_AND_HALF_HOURS,
    ModuleDurationStatus.Enum.FOUR_HOURS,
    ModuleDurationStatus.Enum.FOUR_AND_HALF_HOURS,
    ModuleDurationStatus.Enum.FIVE_HOURS,
    ModuleDurationStatus.Enum.FIVE_AND_HALF_HOURS,
    ModuleDurationStatus.Enum.SIX_HOURS,
    ModuleDurationStatus.Enum.SIX_AND_HALF_HOURS,
    ModuleDurationStatus.Enum.SEVEN_HOURS,
    ModuleDurationStatus.Enum.SEVEN_AND_HALF_HOURS,
    ModuleDurationStatus.Enum.EIGHT_HOURS,
  ]),
  notes: z.string().optional(),
});

export function ModuleForm({
  action,
  clients,
  employees,
}: {
  action: (data: Module) => void;
  clients: Client[];
  employees: Employee[];
}) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await action(values as Module);

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
          name="client_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Client</FormLabel>
              <ModuleSelect field={field} items={clients} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employee_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Employee</FormLabel>
              <ModuleEmployeeSelect field={field} items={employees} />
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
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block">Module duration in hours</FormLabel>
              <ModuleDurationSelect field={field} items={DURATION} />
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

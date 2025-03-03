import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/shared/ui/select";
import { ControllerRenderProps } from "react-hook-form";

export function ModuleSelect({
  field,
  items,
}: {
  field: ControllerRenderProps<
    {
      name: string;
      client_id: string;
      employee_id: string;
      duration:
        | "HALF_HOUR"
        | "ONE_HOUR"
        | "ONE_AND_HALF_HOUR"
        | "TWO_HOURS"
        | "TWO_AND_HALF_HOURS"
        | "THREE_HOURS"
        | "THREE_AND_HALF_HOURS"
        | "FOUR_HOURS"
        | "FOUR_AND_HALF_HOURS"
        | "FIVE_HOURS"
        | "FIVE_AND_HALF_HOURS"
        | "SIX_HOURS"
        | "SIX_AND_HALF_HOURS"
        | "SEVEN_HOURS"
        | "SEVEN_AND_HALF_HOURS"
        | "EIGHT_HOURS";
      notes?: string | undefined;
    },
    "client_id"
  >;
  items: Record<string, string>[];
}) {
  return (
    <div>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select data" />
        </SelectTrigger>
        <SelectContent className="w-full">
          {items.map(({ id, name }) => (
            <SelectItem key={id} value={id}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

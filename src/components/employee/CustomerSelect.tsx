import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { ControllerRenderProps } from "react-hook-form";

export function CustomerSelect({
  field,
  items,
}: {
  field: ControllerRenderProps<
    {
      first_name: string;
      last_name: string;
      email: string;
      customer_id: string;
    },
    "customer_id"
  >;
  items: Record<string, string>[];
}) {
  return (
    <div>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select client" />
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

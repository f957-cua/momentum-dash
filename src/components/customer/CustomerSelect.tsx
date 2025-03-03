import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/shared/ui/select";
import { ControllerRenderProps } from "react-hook-form";

export function CustomerSelect({
  field,
  items,
}: {
  field: ControllerRenderProps<
    {
      name: string;
      clientId?: string;
    },
    "clientId"
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

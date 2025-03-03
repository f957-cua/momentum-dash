import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/src/shared/ui/select";
import { ControllerRenderProps } from "react-hook-form";

export function SelectScrollable({
  field,
  modules,
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
    "name"
  >;
  modules: Record<string, string[]>;
}) {
  const mainModules = Object.entries(modules);

  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select data" />
      </SelectTrigger>
      <SelectContent className="w-full">
        {mainModules.map(([module, items]) => (
          <SelectGroup key={module}>
            <SelectLabel>{module}</SelectLabel>
            {items.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}

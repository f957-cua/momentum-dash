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

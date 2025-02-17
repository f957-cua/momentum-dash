import { cn } from "@/shared/lib/css";
import { FormControl } from "@/shared/ui/form";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Calendar } from "@/shared/ui/calendar";
import { format } from "date-fns";
import React from "react";
import { Button } from "@/shared/ui/button";
import { ControllerRenderProps } from "react-hook-form";
import { CalendarIcon } from "lucide-react";

function ModuleDatePicker({
  field,
}: {
  field: ControllerRenderProps<
    {
      item_name: string;
      clientId: string;
      employeeId: string;
      start_date: Date;
    },
    "start_date"
  >;
}) {
  return (
    <Popover>
      <PopoverTrigger>
        <FormControl>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] pl-3 text-left font-normal",
              !field.value && "text-muted-foreground",
            )}
          >
            {field.value ? (
              format(field.value, "yyyy-MM-dd")
            ) : (
              <span>Pick a date</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={field.value}
          onSelect={field.onChange}
          disabled={(date) =>
            date < new Date(Date.now() - 86400000) ||
            date < new Date("1900-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export default ModuleDatePicker;

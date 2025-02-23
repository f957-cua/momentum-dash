"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DURATION } from "@/shared/static/duration";
import { ModuleType } from "@/schema/module";
import { Button } from "@/shared/ui/button";
import { ArrowUpDown } from "lucide-react";
import { ActionLink } from "@/components/ActionLink";

export const columns: ColumnDef<ModuleType>[] = [
  {
    accessorKey: "id",
    header: "Module Id",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Module Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "duration",
    header: "Planned time spent",
    cell: ({ row }) => {
      return DURATION.find(({ id }) => id === row.original?.duration)
        ?.visibleValue;
    },
  },
  {
    accessorKey: "notes",
    header: "Module notes",
  },
  {
    accessorKey: "client_id",
    header: "Current client",
    cell: ({ row }) => {
      return row.original?.client?.name;
    },
  },
  {
    accessorKey: "employee_id",
    header: "Responsible employee",
    cell: ({ row }) => {
      return `${row.original?.employee?.first_name} ${row.original?.employee?.last_name}`;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Module Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const module_item = row.original;

      return <ActionLink listName="modules" itemId={module_item.id} />;
    },
  },
];

"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DURATION } from "@/shared/static/duration";
import { ModuleType } from "@/schema/module";

export const columns: ColumnDef<ModuleType>[] = [
  {
    accessorKey: "id",
    header: "Module Id",
  },
  {
    accessorKey: "name",
    header: "Module Name",
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
    header: "Module status",
  },
];

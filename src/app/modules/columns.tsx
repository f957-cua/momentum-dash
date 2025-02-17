"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Module } from "@prisma/client";

export const columns: ColumnDef<Module>[] = [
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
  },
  {
    accessorKey: "notes",
    header: "Module notes",
  },
  {
    accessorKey: "client_id",
    header: "Current client",
  },
  {
    accessorKey: "employee_id",
    header: "Responsible employee",
  },
  {
    accessorKey: "status",
    header: "Module status",
  },
];

"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Employee } from "@prisma/client";

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "id",
    header: "Employee Id",
  },
  {
    accessorKey: "first_name",
    header: "Employee First Name",
  },
  {
    accessorKey: "last_name",
    header: "Employee Last Name",
  },
];

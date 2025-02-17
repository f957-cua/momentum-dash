"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Customer } from "@prisma/client";

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "id",
    header: "Customer Id",
  },
  {
    accessorKey: "name",
    header: "Customer public Name",
  },
  {
    accessorKey: "email",
    header: "Customer public Email",
  },
  {
    accessorKey: "client_id",
    header: "Current client",
  },
];

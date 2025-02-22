"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CustomerType } from "@/schema/customer";

export const columns: ColumnDef<CustomerType>[] = [
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
    cell: ({ row }) => {
      return row.original?.client?.name;
    },
  },
];

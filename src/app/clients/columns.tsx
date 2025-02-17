"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Client } from "@prisma/client";

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "id",
    header: "Client Id",
  },
  {
    accessorKey: "name",
    header: "Client Name",
  },
  {
    accessorKey: "email",
    header: "Client Email",
  },
];

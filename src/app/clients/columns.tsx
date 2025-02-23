"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Client } from "@prisma/client";
import { Button } from "@/shared/ui/button";
import { ArrowUpDown } from "lucide-react";
import { ActionLink } from "@/components/ActionLink";

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "id",
    header: "Client Id",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Client Public Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Client Public Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const client = row.original;

      return <ActionLink listName="clients" itemId={client.id} />;
    },
  },
];

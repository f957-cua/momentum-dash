"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CustomerType } from "@/schema/customer";
import { Button } from "@/shared/ui/button";
import { ArrowUpDown } from "lucide-react";
import { ActionLink } from "@/components/ActionLink";

export const columns: ColumnDef<CustomerType>[] = [
  {
    accessorKey: "id",
    header: "Customer Id",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Customer Public Name
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
          Customer Public Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "client_id",
    header: "Current client",
    cell: ({ row }) => {
      return row.original?.client?.name;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const customer = row.original;

      return <ActionLink listName="customers" itemId={customer.id} />;
    },
  },
];

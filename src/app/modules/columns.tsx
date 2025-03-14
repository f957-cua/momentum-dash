"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ModulePrismaType } from "@/src/schema/module";
import { Button } from "@/src/shared/ui/button";
import { ArrowUpDown } from "lucide-react";
import { ActionLink } from "@/src/components/ActionLink";

export const columns: ColumnDef<ModulePrismaType>[] = [
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
    accessorKey: "notes",
    header: "Module notes",
  },
  {
    accessorKey: "clientId",
    header: "Current client",
    cell: ({ row }) => {
      return row.original?.client?.name;
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
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Timestamp
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return row.original.createdAt.toLocaleString();
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

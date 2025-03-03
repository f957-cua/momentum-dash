"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Employee } from "@prisma/client";
import { Button } from "@/src/shared/ui/button";
import { ActionLink } from "@/src/components/ActionLink";

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "id",
    header: "Employee Id",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Employee First Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const employee = row.original;

      return <ActionLink listName="employees" itemId={employee.id} />;
    },
  },
];

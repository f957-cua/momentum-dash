"use client";
import React from "react";

// import { Employee } from "@prisma/client";
import { EmployeeTypePrisma } from "@/src/schema/employee";
import { columns } from "./columns";

import { Button } from "@/src/shared/ui/button";
import { DataTable } from "@/src/shared/ui/data-table";

function EmployeeDataListForExistingCustomer({
  action,
  data,
  customerName,
}: {
  action: () => void;
  data: EmployeeTypePrisma[];
  customerName: string;
}) {
  const TITLE_TEXT = `Employees Datalist for ${customerName}`;
  const BUTTON_TEXT = `Create new Employee for ${customerName}`;
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center font-bold py-8">{TITLE_TEXT}</h1>
      <Button variant="secondary" onClick={action}>
        {BUTTON_TEXT}
      </Button>
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default EmployeeDataListForExistingCustomer;

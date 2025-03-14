import React from "react";
import { ModuleStatus } from "@prisma/client";
import { columns } from "./columns";
import { Button } from "@/src/shared/ui/button";
import { DataTable } from "@/src/shared/ui/data-table";
import { ModulePrismaType } from "@/src/schema/module";

function ModuleDataListForExistingEmployee({
  action,
  data,
  employeeName,
}: {
  action: () => void;
  data: ModulePrismaType[];
  employeeName: string;
}) {
  const activeTallyList = data.filter(
    (module) => module.status !== ModuleStatus.COMPLETED,
  );
  const completedTallyList = data.filter(
    (module) => module.status === ModuleStatus.COMPLETED,
  );

  const ACTIVE_LIST = `Active tally list for ${employeeName}`;
  const COMPLETED_LIST = `Completed tally for ${employeeName}`;
  const BUTTON_TEXT = `Create new Module for ${employeeName}`;
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center font-bold py-8">{ACTIVE_LIST}</h1>
      <Button variant="secondary" onClick={action}>
        {BUTTON_TEXT}
      </Button>
      <DataTable data={activeTallyList} columns={columns} />
      <h1 className="text-center font-bold py-8">{COMPLETED_LIST}</h1>
      <DataTable data={completedTallyList} columns={columns} />
    </div>
  );
}

export default ModuleDataListForExistingEmployee;

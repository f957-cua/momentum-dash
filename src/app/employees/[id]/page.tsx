import { db } from "@/src/shared/lib/db";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/src/shared/ui/card";
import ModuleDataListForExistingEmployee from "../../modules/ModuleDataListForExistingEmployee";
import { redirect, notFound } from "next/navigation";

export default async function Employee({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const employee = await db.employee.findUnique({
    where: { id: id },
  });

  if (!employee) {
    notFound();
  }

  const action = async () => {
    "use server";
    redirect(
      `/modules/new?clientId=${employee.clientId}&customerId=${employee.customerId}&employeeId=${id}`,
    );
  };

  const modules = await db.module.findMany({
    where: { employeeId: id },
    include: {
      client: true,
      employee: true,
    },
  });

  const CARD_TITLE = `Employee ${employee.name} Details`;
  const CARD_DESCRIPTION = `Here are the details of the employee which have been saved by next id in database ${employee.id}.`;

  return (
    <div className="container mx-auto py-10 px-10">
      <Card>
        <CardHeader>
          <CardTitle>{CARD_TITLE}</CardTitle>
          <CardDescription>{CARD_DESCRIPTION}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Employee Public Information Board</p>
          <div className="my-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Employee Name</p>
              <p className="text-sm text-muted-foreground">{employee.name}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <ModuleDataListForExistingEmployee
        data={modules}
        action={action}
        employeeName={employee.name}
      />
    </div>
  );
}

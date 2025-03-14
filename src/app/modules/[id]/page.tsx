import { db } from "@/src/shared/lib/db";
import { Button } from "@/src/shared/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/src/shared/ui/card";
import { notFound, redirect } from "next/navigation";
import { ModuleStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export default async function Module({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const module_item = await db.module.findUnique({
    where: { id: id },
    include: {
      employee: true,
      client: true,
    },
  });

  if (!module_item) {
    notFound();
  }

  const handleCompleted = async () => {
    "use server";
    await db.module.update({
      where: { id: module_item.id },
      data: {
        status: ModuleStatus.COMPLETED,
      },
    });
    revalidatePath(`/employees/${module_item.employeeId}`);
    revalidatePath(`/modules`);
    redirect(`/employees/${module_item.employeeId}`);
  };
  const handleInProgress = async () => {
    "use server";
    await db.module.update({
      where: { id: module_item.id },
      data: {
        status: ModuleStatus.IN_PROGRESS,
      },
    });
    revalidatePath(`/employees/${module_item.employeeId}`);
    revalidatePath(`/modules`);
    redirect(`/employees/${module_item.employeeId}`);
  };

  const CARD_TITLE = `Module: ${module_item.name}`;
  const CARD_DESCRIPTION = `Here are the details of the module which have been saved by next id in database ${module_item.id}.`;

  return (
    <div className="w-[540px] mx-auto py-10 px-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{CARD_TITLE}</CardTitle>
          <CardDescription>{CARD_DESCRIPTION}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Customer Public Information Board</p>
          <div className="my-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Responsible Employee attached to
              </p>
              <p className="text-sm text-muted-foreground">
                {module_item.employee.name}
              </p>
            </div>
          </div>
          <div className="my-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Current Client</p>
              <p className="text-sm text-muted-foreground">
                {module_item?.client?.name ?? "No client assigned"}
              </p>
            </div>
          </div>
          {module_item.notes && (
            <div className="my-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Module Notes</p>
                <p className="text-sm text-muted-foreground">
                  {module_item.notes}
                </p>
              </div>
            </div>
          )}
          {module_item.status === ModuleStatus.COMPLETED && (
            <>
              <div className="my-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Module Status
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {ModuleStatus.COMPLETED}
                  </p>
                </div>
              </div>
              <Button onClick={handleInProgress}>Return to WIP</Button>
            </>
          )}
          {module_item.status === ModuleStatus.PENDING && (
            <>
              <div className="my-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Module Status
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {module_item.status}
                  </p>
                </div>
              </div>
              <Button onClick={handleCompleted}>Mark as completed</Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

import SbpmDialog from "@/src/components/sbpm/SbpmDialog";
import HomePage from "@/src/directory/HomePage";
import { redirect } from "next/navigation";
import { db } from "@/src/shared/lib/db";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const action = async (selected: string) => {
    "use server";
    revalidatePath("/");
    redirect(`/?sbpmId=${selected}`);
  };

  const cookieData = await cookies();
  const sbpmList = await db.sbpm.findMany();

  // first scenario - one user
  const sbpmIdExist = cookieData.has("sbpmId");

  if (!sbpmIdExist && !sbpmList.length) {
    redirect("/sbpm/new");
  }

  const sbpmIdCookie = cookieData.get("sbpmId");
  // check if user exists
  if (!sbpmIdCookie?.value && !sbpmList.length) {
    redirect("/sbpm/new");
  }

  const currentSbpmUser = await db.sbpm.findUnique({
    where: {
      id: sbpmIdCookie?.value ?? "",
    },
  });

  if (currentSbpmUser === null && !sbpmList.length) {
    redirect("/sbpm/new");
  }

  if (currentSbpmUser !== null) {
    return <HomePage sbpmWorkerName={currentSbpmUser?.name} />;
  }

  // second scenario - many users

  return <SbpmDialog items={sbpmList} action={action} />;
}

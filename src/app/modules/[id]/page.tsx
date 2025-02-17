import { db } from "@/shared/lib/db";
import { notFound } from "next/navigation";

export default async function Module({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const module_item = await db.module.findUnique({
    where: { id: id },
  });

  if (!module_item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <article className="max-w-2xl space-y-4 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl font-bold mb-8 text-[#333333]">
          {module_item.name}
        </h1>
        <p className="text-gray-600 text-center">by {module_item.client_id}</p>
        <div className="prose prose-gray mt-8">
          {module_item.status || "No content available."}
        </div>
      </article>
    </div>
  );
}

import { db } from "@/shared/lib/db";
import { notFound } from "next/navigation";

export default async function Client({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const client = await db.client.findUnique({
    where: { id: id },
  });

  if (!client) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <article className="max-w-2xl space-y-4 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl font-bold mb-8 text-[#333333]">
          {client.name}
        </h1>
        <p className="text-gray-600 text-center">by {client.email}</p>
        <div className="prose prose-gray mt-8">
          {client.email || "No content available."}
        </div>
      </article>
    </div>
  );
}

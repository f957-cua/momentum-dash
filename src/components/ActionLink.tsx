import React from "react";
import Link from "next/link";
import { FileSymlink } from "lucide-react";

export function ActionLink({
  listName,
  itemId,
}: {
  listName: string;
  itemId: string;
}) {
  return (
    <Link href={`/${listName}/${itemId}`}>
      <FileSymlink className="h-4 w-4" />
    </Link>
  );
}

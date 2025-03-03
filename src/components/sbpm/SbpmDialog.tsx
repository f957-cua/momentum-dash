"use client";

import { useState } from "react";
import { Button } from "@/src/shared/ui/button";
import Link from "next/link";
import { Link as ProfileLink } from "lucide-react";
import BackDrop from "../BackDrop";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/src/shared/ui/select";
import { Sbpm } from "@prisma/client";

function SbpmDialog({
  items,
  action,
}: {
  items: Sbpm[];
  action: (data: string) => void;
}) {
  const [selected, setSelected] = useState<string>("");

  const DIALOG_TITLE = "Hello from Momentum tally app!";
  const DIALOG_SELECT =
    "If you are existing SBPM worker please select yourself in the dropdown below and confirm your selection.";
  const DIALOG_CREATE =
    "If you haven't been added to the system yet, please click the button below to create your profile.";
  const DIALOG_CONFIRM_SELECTION = "Confirm";
  const DIALOG_CREATE_NEW_LINK = "Create new SBPM profile link";

  const handleSelectValueChange = (value: string) => {
    console.log(value);
    setSelected(value);
  };

  return (
    <BackDrop>
      <h1 className="text-xl text-center">{DIALOG_TITLE}</h1>
      <p>{DIALOG_SELECT}</p>
      <div className="w-full flex flex-col gap-10">
        <Select
          onValueChange={handleSelectValueChange}
          defaultValue={items[0].name}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select client" />
          </SelectTrigger>
          <SelectContent className="w-full">
            {items.map(({ id, name }) => (
              <SelectItem key={id} value={id}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          onClick={() => {
            action(selected);
          }}
        >
          {DIALOG_CONFIRM_SELECTION}
        </Button>
        <p>{DIALOG_CREATE}</p>
        <Link href="/sbpm/new" className="flex items-center gap-2 underline">
          <ProfileLink />
          {DIALOG_CREATE_NEW_LINK}
        </Link>
      </div>
    </BackDrop>
  );
}

export default SbpmDialog;

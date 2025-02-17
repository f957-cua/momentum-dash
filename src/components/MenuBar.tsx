import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/shared/ui/menubar";

import Link from "next/link";

function MenuBar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Client</MenubarTrigger>
        <MenubarContent>
          <Link href="/clients/new">
            <MenubarItem>
              New Client <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          </Link>
          <Link href="/clients">
            <MenubarItem>Clients list</MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Customer</MenubarTrigger>
        <MenubarContent>
          <Link href="/customers/new">
            <MenubarItem>
              New Customer <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          </Link>
          <Link href="/customers">
            <MenubarItem>Customers list</MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Employee</MenubarTrigger>
        <MenubarContent>
          <Link href="/employees/new">
            <MenubarItem>
              New Employee <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          </Link>
          <Link href="/employees">
            <MenubarItem>Employees list</MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Module</MenubarTrigger>
        <MenubarContent>
          <Link href="/modules/new">
            <MenubarItem>
              New Module <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          </Link>
          <Link href="/modules">
            <MenubarItem>Module list</MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default MenuBar;

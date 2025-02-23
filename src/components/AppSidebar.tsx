import { UsersRound, UserRoundPlus } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/shared/ui/sidebar";

import Link from "next/link";
import Image from "next/image";

// Menu items.
const lists = [
  {
    title: "Clients",
    url: "/clients",
    icon: UsersRound,
  },
  {
    title: "Customers",
    url: "/customers",
    icon: UsersRound,
  },
  {
    title: "Employees",
    url: "/employees",
    icon: UsersRound,
  },
  {
    title: "Modules",
    url: "/modules",
    icon: UsersRound,
  },
];

const createNew = [
  {
    title: "New Client",
    url: "/clients/new",
    icon: UserRoundPlus,
  },
  {
    title: "New Customer",
    url: "/customers/new",
    icon: UserRoundPlus,
  },
  {
    title: "New Employee",
    url: "/employees/new",
    icon: UserRoundPlus,
  },
  {
    title: "New Module",
    url: "/modules/new",
    icon: UserRoundPlus,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Link href="/">
              <div className="flex">
                <Image
                  src="/logo_001_v1.svg"
                  alt="momentum logo"
                  width={50}
                  height={50}
                />
                <h1 className="my-auto">Momentum</h1>
              </div>
            </Link>
          </SidebarGroupLabel>
          <SidebarSeparator />
          <SidebarGroupContent className="mt-2">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <span>Data list</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  {lists.map((item) => (
                    <SidebarMenuSubItem key={item.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <span>Create New</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  {createNew.map((item) => (
                    <SidebarMenuSubItem key={item.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

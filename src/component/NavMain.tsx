"use client";

import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react";
import { cn } from "./lib/utils";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/component/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-3">
        <SidebarMenu>
          <h1 className="font-normal tracking-widest text-violet-500">
            MENU</h1>
        </SidebarMenu>
        <SidebarMenu className="space-y-1">
          {items.map((item, index) => (
  <SidebarMenuItem
    key={item.title}
    className={cn(
      index === 0 && "bg-[#707FDD]/20 text-[#5A6ACF]" 
    )}
  >
    <SidebarMenuButton tooltip={item.title}>
      {item.icon && <item.icon className="bg-[#707FDD] text-white rounded-xs" />}
      <span>{item.title}</span>
    </SidebarMenuButton>
  </SidebarMenuItem>
))}

        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

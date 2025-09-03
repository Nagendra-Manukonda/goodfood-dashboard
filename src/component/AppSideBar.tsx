"use client";

import React, { useState } from "react";
import {
  IconDashboard,
  IconDatabase,
  IconHelp,
  IconListDetails,
  IconPaywall,
  IconReport,
  IconSettings,
  IconUsers,
  IconX,
  IconMenu2,
} from "@tabler/icons-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
} from "@/component/ui/sidebar";

import { NavMain } from "@/component/NavMain";
import { NavSecondary } from "@/component/NavSecondary";
import { Separator } from "@/component/ui/separator";
import { useMobile } from "./hooks/UseMobile";

const data = {
  Menu: [
    { title: "Dashboard", url: "#", icon: IconDashboard },
    { title: "Food Order", url: "#", icon: IconListDetails },
    { title: "Manage Menu", url: "#", icon: IconDatabase },
    { title: "Customer Review", url: "#", icon: IconReport },
  ],
  others: [
    { title: "Settings", url: "#", icon: IconSettings },
    { title: "Payment", url: "#", icon: IconPaywall },
    { title: "Accounts", url: "#", icon: IconUsers },
    { title: "Help", url: "#", icon: IconHelp },
  ],
};

export default function Appsidebar(
  props: React.ComponentProps<typeof Sidebar> & {
    collapsible?: "offcanvas" | "inset" | "none";
  }
) {
  const isMobile = useMobile();
  const [open, setOpen] = useState(false);

  return (
    <>
      {isMobile && !open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-4 left-4 z-50 bg-violet-400 text-white p-2  shadow-md"
        >
          <IconMenu2 size={20} />
        </button>
      )}

      <Sidebar
        collapsible={isMobile ? "offcanvas" : "inset"}
        open={open}
        onOpenChange={setOpen}
        {...props}
      >
        <SidebarHeader>
          <div className="flex items-center justify-between px-4 py-2 w-full">
            <div className="flex items-center gap-2">
              <h2 className="bg-violet-500 w-7 h-7 flex justify-center items-center rounded-3xl font-bold text-white font-Poppins">
                G
              </h2>
              <h3 className="font-bold font-Poppins tracking-wider text-violet-600">
                GOODFOOD
              </h3>
            </div>

            {isMobile && (
              <button
                onClick={() => setOpen(false)}
                className="p-1 bg-violet-400 text-white hover:bg-violet-700"
              >
                <IconX size={20} />
              </button>
            )}
          </div>
        </SidebarHeader>

        <Separator />

        <SidebarMenu />

        <SidebarContent >
          <NavMain items={data.Menu}  />
          <NavSecondary items={data.others} />
        </SidebarContent>
      </Sidebar>
    </>
  );
}

import React from "react";
import { SidebarInset, SidebarProvider } from "@/component/ui/sidebar";
import Appsidebar from "@/component/AppSideBar";
import SiteHeader from "@/component/SiteHeader";
import { Separator } from "@/component/ui/separator";
import HeadMain from "@/component/HeadMain";
import Revenue from "@/component/Revenue";

export default function Pages() {
  return (
    <SidebarProvider
      className="rounded-lg"
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 16)",
        } as React.CSSProperties
      }
    >
      <Appsidebar collapsible="icon" />
      <SidebarInset>
        <SiteHeader />
        <Separator className="space-x-1" />
        <HeadMain />
        <Revenue />
      </SidebarInset>
    </SidebarProvider>
  );
}

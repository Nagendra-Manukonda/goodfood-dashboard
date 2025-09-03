"use client";
import React, { useState } from "react";
import { Separator } from "@/component/ui/separator";
import { Input } from "@/component/ui/input";
import { ChevronDownIcon, Search, Menu as MenuIcon } from "lucide-react";
import { IconBell } from "@tabler/icons-react";
import { Avatar, AvatarImage } from "@/component/ui/avatar";
import { Button } from "@/component/ui/button";
import { useSidebar } from "@/component/ui/sidebar";
import { useMobile } from "./hooks/UseMobile";

export default function SiteHeader() {
  const [hasNotification, setHasNotification] = useState(true);
  const { toggleSidebar } = useSidebar(); 
  const isMobile = useMobile();

  return (
    <header className="flex justify-center items-center w-full">
      <div className="my-3 flex justify-between items-center w-full max-w-screen-xl px-4">
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="text-violet-600"
            onClick={toggleSidebar}
          >
            <MenuIcon className="w-6 h-6" />
          </Button>
        )}

        {!isMobile && (
          <div className="flex-1 max-w-fit mx-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search"
                className="font-normal font-Poppins leading-3.2 tracking-wider"
              />
              <Search className="absolute right-2  top-1/2 -translate-y-1/2 w-4 h-4 text-violet-600" />
            </div>
          </div>
        )}

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <Avatar>
              <AvatarImage src="/Avatar/Emoticon (1).png" alt="Burger" />
            </Avatar>
          </div>

          <h1 className="whitespace-nowrap font-normal tracking-wider text-violet-600 hidden sm:block">
            Delicious Burger
          </h1>

          <Button variant="secondary" className="text-blue-700 w-6 h-6 opacity-50">
            <ChevronDownIcon />
          </Button>

          <div className="relative w-6 h-6 text-violet-500 flex items-center justify-center">
            <IconBell className="w-5 h-5" />
            {hasNotification && (
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

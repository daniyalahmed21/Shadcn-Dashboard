import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between outline-none sticky bg-background z-10  top-0">
      <SidebarTrigger />
      <div className="flex items-center gap-x-6">
        <Link className="font-medium" href="/">Dashboard</Link>
        <Link className="font-medium" href="/payments">Payments</Link>
        <Link className="font-medium" href="/users">Users</Link>

        {/* Toggle theme */}
        <ModeToggle />
        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10} className="mr-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="w-1 h-1 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="w-1 h-1 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="w-1 h-1 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;

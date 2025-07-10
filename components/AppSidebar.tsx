import {
  BarChart3,

  ChevronDown,

  ChevronUp,
  Package,
  PackagePlus,
  Settings,
  ShoppingCart,
  Tags,
  UsersRound,
} from "lucide-react";
import logo from "../public/logo.jpeg";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const menuItems = [
  {
    label: "Dashboard",
    url: "#",
    icon: BarChart3,
  },
  {
    label: "Orders",
    url: "#",
    icon: ShoppingCart,
  },
  {
    label: "Products",
    icon: Package,
    subItems: [
      { label: "All Products", url: "#", icon: Package },
      { label: "Add New", url: "#", icon: PackagePlus },
      { label: "Categories", url: "#", icon: Tags },
    ],
  },
  {
    label: "Customers",
    url: "#",
    icon: UsersRound,
  },
  {
    label: "Settings",
    icon: Settings,
    subItems: [
      { label: "General", url: "#" },
      { label: "Shipping", url: "#" },
      { label: "Payments", url: "#" },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="overflow-x-hidden">
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image
                  className="rounded-full"
                  src={logo}
                  width={28}
                  height={28}
                  alt="Store Logo"
                />
                <span>Shop Sphere</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />

      {/* Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Store Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <Collapsible
                  key={item.label}
                  
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton asChild>
                       
                        <a href={item.url}>
                          <item.icon />
                          <span className="mr-auto">{item.label}</span>
                          {item.subItems ? (<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"/>) :null}
                        </a>
                       
                       
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {item.subItems && item.subItems?.length > 0 && (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems?.map((subitem) => (
                            <SidebarMenuSubItem key={subitem.label}>
                              <SidebarMenuSubButton>
                                <span>{subitem.label}</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  {/* 4. Replaced John Doe with a more realistic user role/name */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      AC
                    </div>
                    <span className="flex flex-col items-start">
                      <span>Alex Chen</span>
                      <span className="text-xs text-muted-foreground">
                        Admin
                      </span>
                    </span>
                  </div>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={12}>
                <DropdownMenuItem>My Profile</DropdownMenuItem>
                <DropdownMenuItem>Store Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

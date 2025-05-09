import { Settings } from "lucide-react";
import { DownloadSimple } from "@phosphor-icons/react";
// import { Button } from "@/components/ui/button";
import { CreateProjectDialog } from "./CreateProjectDialog";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Import Project",
    url: "#",
    icon: DownloadSimple,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="none">
      <SidebarContent className="pt-6 p-2">
        <div className="p-2 py-0 space-y-4 pt-2">
          {/* Tambahin padding dan border bawah */}
          <img className="h-10" src="aridiumbrand.png" alt="Aridium Brand" />
          <CreateProjectDialog />
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="opacity-40 space-y-2 p-2">
            <p className="text-xs">
              Timed-sync lyrics creator <br /> by Ferdinan Iydheko - v0.0.1
            </p>
            <p className="text-xs">Build with Vite + React + Tauri</p>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

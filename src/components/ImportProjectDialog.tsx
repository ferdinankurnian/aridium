import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DownloadSimple } from "@phosphor-icons/react";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

export const ImportProjectDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <SidebarMenuItem key="Import Project">
          <SidebarMenuButton asChild>
            <a href="#">
              <DownloadSimple />
              <span>Import Project</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import Project</DialogTitle>
          <DialogDescription>Supported type: .admproj</DialogDescription>
        </DialogHeader>
        <div className="h-52 flex flex-col gap-4 p-2 bg-black rounded-lg"></div>
      </DialogContent>
    </Dialog>
  );
};

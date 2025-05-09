import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const CreateProjectDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button size="lg">Create New Project</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload song</DialogTitle>
          <DialogDescription>
            Supported type: .mp3, .m4a, .aac, .ogg, .flac, .alac, .wav, .aiff
          </DialogDescription>
        </DialogHeader>
        <div className="h-52 flex flex-col gap-4 bg-black rounded"></div>
      </DialogContent>
    </Dialog>
  );
};

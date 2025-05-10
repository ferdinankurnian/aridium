import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
import { Window } from "@tauri-apps/api/window";
import { MusicNotesPlus, ArrowRight } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export const CreateProjectDialog = () => {
  const navigate = useNavigate();

  const handleGoToCanvasAndMaximize = async () => {
    navigate("/canvas");

    try {
      const mainWindow = new Window("main");
      await mainWindow.maximize();
      console.log("Window berhasil dimaximize.");
    } catch (error) {
      console.error("Gagal memaximize window:", error);
    }
  };

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
        <div className="h-52 flex flex-col gap-4 p-2 bg-black rounded-lg justify-center items-center">
          <MusicNotesPlus className="opacity-50" size={80} />
          <h1 className="text-sm opacity-50">
            Drag file here or click here to upload file
          </h1>
        </div>
        <a
          href="#"
          className="text-xs flex flex-row items-center mx-auto gap-1 opacity-50 hover:opacity-80"
          onClick={handleGoToCanvasAndMaximize}
        >
          Continue without song <ArrowRight />
        </a>
      </DialogContent>
    </Dialog>
  );
};

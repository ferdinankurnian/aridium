import { ArrowLeft, Play, Stop } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Window } from "@tauri-apps/api/window";

export default function Canvas() {
  const navigate = useNavigate();

  const handleBack = async () => {
    navigate("/");

    try {
      const mainWindow = new Window("main");
      await mainWindow.unmaximize();
    } catch (error) {
      console.error("Gagal unmaximize window:", error);
    }
  };
  return (
    <div className="flex flex-col h-full">
      <div className="top-bar p-2 flex flex-row justify-between bg-neutral-800">
        <div>
          <Button onClick={handleBack} variant={"ghost"}>
            <ArrowLeft weight="bold" />
            Back
          </Button>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img
            className="w-[35px] h-[35px] rounded"
            src="notoriousdemo.png"
            alt="Artwork"
          />
          <div>
            <h1 className="text-sm">Notorious</h1>
            <h2 className="text-xs">ivycomb & Stephanafro</h2>
          </div>
        </div>
        <div>
          <Button>Next</Button>
        </div>
      </div>
      <div className="workpage grow flex flex-row">
        <div className="sheet h-full grow">
          <textarea
            className="w-full h-full outline-0 resize-none py-12 px-28"
            name="lyrics"
            id="lyrics"
            placeholder="Write Lyrics here.."
          ></textarea>
        </div>
        <div className="side w-64 h-full p-3 flex flex-col gap-4 bg-neutral-900">
          <div>
            <h1 className="text-xs opacity-60 mb-2">Song Section</h1>
            <div className="flex flex-wrap gap-2">
              <div className="bg-neutral-800 hover:bg-neutral-700 cursor-pointer rounded-full text-sm px-3 py-1">
                Intro
              </div>
              <div className="bg-neutral-800 hover:bg-neutral-700 cursor-pointer rounded-full text-sm px-3 py-1">
                Verse
              </div>
              <div className="bg-neutral-800 hover:bg-neutral-700 cursor-pointer rounded-full text-sm px-3 py-1">
                Pre-chorus
              </div>
              <div className="bg-neutral-800 hover:bg-neutral-700 cursor-pointer rounded-full text-sm px-3 py-1">
                Chorus
              </div>
              <div className="bg-neutral-800 hover:bg-neutral-700 cursor-pointer rounded-full text-sm px-3 py-1">
                Outro
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xs opacity-60 mb-2">Song Function</h1>
            <div className="flex">
              <div className="bg-neutral-800 hover:bg-neutral-700 cursor-pointer rounded-full text-sm px-3 py-1">
                Instrumental
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar bg-neutral-800 flex flex-col items-center justify-center">
        <div className="w-32 flex flex-row justify-center items-center">
          <Button variant={"ghost"}>
            <Play weight="fill" />
          </Button>
          <Button variant={"ghost"}>
            <Stop weight="fill" />
          </Button>
        </div>
      </div>
    </div>
  );
}

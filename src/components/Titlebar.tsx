import { getCurrentWindow } from "@tauri-apps/api/window";
import { Minus, Square, X } from "@phosphor-icons/react";

const TitleBar = () => {
  const handleMinimize = async () => {
    const appWindow = await getCurrentWindow();
    appWindow.minimize();
  };

  const handleMaximize = async () => {
    const appWindow = await getCurrentWindow();
    appWindow.toggleMaximize();
  };

  const handleClose = async () => {
    const appWindow = await getCurrentWindow();
    appWindow.close();
  };

  return (
    <div
      data-tauri-drag-region
      className="h-[30px] z-50 select-none flex justify-between bg-neutral-800"
    >
      <div className="flex flex-row items-center opacity-70">
        <h1 className="text-white text-sm ml-3">Aridium (v0.0.1)</h1>
      </div>
      <div className="opacity-70">
        <div
          className="inline-flex justify-center items-center w-[30px] h-[29px] select-none hover:bg-[#8D1EA6]"
          id="titlebar-minimize"
          onClick={handleMinimize}
        >
          <Minus size={15} weight="bold" color="#fff" />
        </div>
        <div
          className="inline-flex justify-center items-center w-[30px] h-[29px] select-none hover:bg-[#8D1EA6]"
          id="titlebar-maximize"
          onClick={handleMaximize}
        >
          <Square size={15} weight="bold" color="#fff" />
        </div>
        <div
          className="inline-flex justify-center items-center w-[30px] h-[30px] select-none hover:bg-[#8D1EA6]"
          id="titlebar-close"
          onClick={handleClose}
        >
          <X size={16} weight="bold" color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default TitleBar;

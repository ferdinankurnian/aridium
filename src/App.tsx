import { Routes, Route } from "react-router-dom";
import TitleBar from "./components/Titlebar";
import MainMenu from "./pages/MainMenu";
import { AppProviders } from "./contexts/AppProviders";
import Canvas from "./pages/Canvas";
import Level1 from "./pages/levels/Level1";

function App() {
  return (
    <AppProviders>
      <div className="flex flex-col w-full h-dvh">
        <TitleBar />
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/level1" element={<Level1 />} />
          {/* Ini buat catch-all route, kalau URL gak match yang lain */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </div>
    </AppProviders>
  );
}

export default App;

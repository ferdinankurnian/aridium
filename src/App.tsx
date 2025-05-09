import TitleBar from "./components/Titlebar";
import MainMenu from "./pages/MainMenu";
import { AppProviders } from "./contexts/AppProviders";

function App() {
  return (
    <AppProviders>
      <div className="flex flex-col w-full h-dvh">
        <TitleBar />
        <MainMenu />
      </div>
    </AppProviders>
  );
}

export default App;

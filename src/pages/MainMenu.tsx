import { AppSidebar } from "@/components/Sidebar";

export default function MainMenu() {
  return (
    <div className="grow flex flex-row h-full overflow-hidden">
      <AppSidebar />

      <div className="flex flex-col w-full p-5 overflow-y-auto h-full">
        <div className="mx-auto max-w-3xl xl:max-w-4xl">
          <h1 className="text-white font-semibold text-xl">Recent Projects</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-neutral-800 rounded-md">
                <div className="p-3 flex rounded-t-md flex-col bg-neutral-900">
                  <p className="text-white text-xs opacity-50">
                    Don't want no money <br />
                    Don't need a fancy car <br /> I don't want the title of a
                    movie star <br /> I just want that taste of a little success{" "}
                    <br /> Something to call my own escape from the tests
                  </p>
                </div>
                <div className="p-2 flex flex-row items-center gap-2">
                  <div>
                    <img
                      className="w-[35px] h-[35px] rounded"
                      src="notoriousdemo.png"
                      alt="Artwork"
                    />
                  </div>
                  <div>
                    <h1 className="text-white text-sm">Notorious</h1>
                    <p className="text-white text-xs opacity-50">
                      ivycomb & Stephanafro
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-row items-center h-screen">
      <div className="bg-[#1A243A] flex flex-col gap-5 h-full p-5 w-1/3 max-w-[400px]">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Aridium</h1>
          <h2 className="text-xs text-gray-400">Timed-sync lyrics editor</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="bg-white text-black px-4 py-2 rounded-md">
            Create new project
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1>Welcome to Aridium</h1>
        <div className="card">
          <button onClick={() => setCount(count => count + 1)}>
            Count is: {count}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

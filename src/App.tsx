import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 pt-8 text-center">GitHub Finder</h1>
      <Outlet />
    </div>
  )
}

export default App

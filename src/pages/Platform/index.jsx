import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function Plaftorm() {
  return (
    <>
      <div className="w-screen h-screen flex">
        <Sidebar />
        <main className="w-[80vw]">
          <Outlet />
        </main>
      </div>
    </>
  )
}
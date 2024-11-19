import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";

export default function Plaftorm() {

  const [active, setActive] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {
    setActive(false)
}, [pathname])

  return (
    <>
      <div className="w-screen h-screen flex relative">
        <div className={`absolute sm:static ${active ? "left-0" : "-left-full"} z-10 h-full w-screen sm:w-auto transition-all duration-500`}>
          <Sidebar onClick={() => setActive((prev) => !prev)}/>
        </div>
        <div className="w-screen md:w-[80vw]">
          <Outlet />
        </div>
      </div>
    </>
  )
}
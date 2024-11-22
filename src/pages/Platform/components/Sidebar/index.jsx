import { GoHomeFill } from "react-icons/go";
import { MdHistory, MdLeaderboard } from "react-icons/md";
import SidebarButton from "./components/SidebarButton";
import { IoIosClose } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useContext } from "react";
import GeneratingContentContext from "../../context/GeneratingContentContext";
import { IoSettingsSharp } from "react-icons/io5";

export default function Sidebar({ onClick }) {
  const generatingContent = useContext(GeneratingContentContext);

  return (
    <aside className=" lg:w-[20vw] h-screen flex flex-col items-start gap-10 py-10 px-5  xl:px-14 border-r-2 bg-eWhite">
    <div className="flex gap-4 justify-between w-full">
        <button onClick={onClick} className="block sm:hidden">
          <IoIosClose className="size-10" />
        </button>
        <svg
          viewBox="0 0 103 26"
          className="h-10 w-36 self-center"
          fill="#10D48E"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30.1584 8.12736C32.3799 8.12736 35.4862 9.80289 34.8649 14.227H28.031C28.3699 15.2437 29.2547 15.7708 30.4408 15.7708C31.6456 15.7708 32.0222 15.5072 32.6999 15.2248L34.3378 16.8062C33.4718 17.6534 32.3046 18.2747 30.3278 18.2747C27.8992 18.2747 25 16.5991 25 13.2293C25 9.80289 27.9369 8.12736 30.1584 8.12736ZM30.1584 10.6689C29.3112 10.6689 28.4452 11.1584 28.0687 12.1373H32.2293C31.928 11.1584 31.0056 10.6689 30.1584 10.6689ZM41.3788 8.12736C43.1673 8.12736 44.6734 8.88041 45.5958 10.4618L43.3367 11.5349C42.8472 11.1207 42.4519 10.7442 41.4164 10.7442C40.2869 10.7442 39.1385 11.6102 39.1385 13.2104C39.1385 14.7918 40.2869 15.6202 41.4164 15.6202C42.4519 15.6202 42.8472 15.2813 43.3367 14.8671L45.6335 15.9402C44.6734 17.5216 43.2049 18.237 41.3788 18.237C39.1949 18.237 36.2581 16.6744 36.2581 13.2104C36.2581 9.80289 39.1949 8.12736 41.3788 8.12736ZM52.0156 8.12736C54.2371 8.12736 57.1739 9.80289 57.1739 13.2293C57.1739 16.6744 54.2371 18.2747 52.0156 18.2747C49.7941 18.2747 46.8572 16.6744 46.8572 13.2293C46.8572 9.80289 49.7941 8.12736 52.0156 8.12736ZM52.0156 10.7442C50.886 10.7442 49.7376 11.6102 49.7376 13.2293C49.7376 14.7918 50.886 15.6578 52.0156 15.6578C53.1451 15.6578 54.3124 14.7918 54.3124 13.2293C54.3124 11.6102 53.1451 10.7442 52.0156 10.7442ZM72.3667 8.25914H75.3224L71.8207 18.0864H68.9591L66.813 11.9679L64.6668 18.0864H61.8052L58.3035 8.25914H61.2592L63.2736 14.5471L65.5139 8.25914H68.112L70.3523 14.5471L72.3667 8.25914ZM83.7942 8.29679H86.7687V18.0864H83.7942V17.1074C83.6624 17.4463 82.7776 18.2747 81.2715 18.2747C79.0311 18.2747 76.452 16.6744 76.452 13.1728C76.452 9.80289 79.0311 8.12736 81.2715 8.12736C82.7776 8.12736 83.6624 8.99336 83.7942 9.20045V8.29679ZM81.7045 15.6578C82.9282 15.6578 83.926 14.8107 83.926 13.1728C83.926 11.5914 82.9282 10.7442 81.7045 10.7442C80.4243 10.7442 79.3324 11.6102 79.3324 13.1728C79.3324 14.7918 80.4243 15.6578 81.7045 15.6578ZM93.452 15.6014C93.9791 15.6014 94.3557 15.526 94.7698 15.4131V17.8793C94.3557 18.0676 93.6779 18.1994 92.6801 18.1994C91.0423 18.1994 89.6679 17.6534 89.6679 14.6412V10.7442H88.2936V8.29679H89.6679V6H92.6425V8.29679H94.7322V10.7442H92.6425V14.6412C92.6425 15.0742 92.7554 15.6014 93.452 15.6014ZM101.114 15.6014C101.641 15.6014 102.018 15.526 102.432 15.4131V17.8793C102.018 18.0676 101.34 18.1994 100.342 18.1994C98.7045 18.1994 97.3302 17.6534 97.3302 14.6412V10.7442H95.9559V8.29679H97.3302V6H100.305V8.29679H102.394V10.7442H100.305V14.6412C100.305 15.0742 100.418 15.6014 101.114 15.6014Z" />
          <path d="M15.6916 10.7188H8.58038L12.2868 0L0 14.9528H7.11172L3.4053 25.6713L15.6916 10.7188Z" />
        </svg>
      </div>
      <nav className="flex flex-col items-start justify-between flex-1 w-full">
        <ul className="flex flex-col gap-5 w-full">
          <li>
            <SidebarButton
              icon={<GoHomeFill className="size-5" />}
              text="Dashboard"
              to="/service/dashboard"
            />
          </li>
          <li>
            <SidebarButton
              icon={<MdLeaderboard className="size-5" />}
              text="Placar"
              to="/service/leaderboard"
            />
          </li>
          <li>
            <SidebarButton
              icon={<MdHistory className="size-5" />}
              text="Logs"
              to="/service/logs"
              generatingContent={generatingContent}
            />
          </li>
        </ul>
        <button className="flex gap-2 items-center group hover:bg-eGray/10 w-full px-3 py-2 rounded-lg transition-all duration-300" onClick={() =>
            document.getElementById("settings-modal").showModal()
          }>
            <IoSettingsSharp className="size-5 group-hover:rotate-180 transition-all duration-300"/>
            Configurações</button>
      </nav>
      <button
        className="block sm:hidden absolute -right-20 bottom-10 p-3 bg-eWhite rounded-full drop-shadow-md"
        onClick={onClick}
      >
        <HiOutlineMenuAlt2 className="size-8" />
      </button>
    </aside>
  );
}

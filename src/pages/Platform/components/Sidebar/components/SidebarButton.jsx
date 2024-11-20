import { NavLink } from "react-router-dom";

export default function SidebarButton({ icon, text, to, generatingContent }) {

  return (
    <NavLink
      to={to}
      className={`flex gap-2 items-center hover:bg-eGreen/5 px-3 py-2 rounded-lg transition-all duration-300 ${
        generatingContent ? "skeleton" : ""
      }`}
    >
      {icon}
      <span className="font-medium text-lg">{text}</span>
    </NavLink>
  );
}

import { NavLink } from "react-router-dom";

export default function SidebarButton({ icon, text, to }) {
  return (
    <NavLink
      to={to}
      className="flex gap-2 items-center hover:bg-eGreen/5 px-3 py-2 rounded-lg transition-all duration-300"
    >
      {icon}
      <span className="font-medium text-lg">{text}</span>
    </NavLink>
  );
}

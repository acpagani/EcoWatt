import { FaPlus } from "react-icons/fa6";

export default function Header({ title }) {
  return (
    <header className="w-full border-b-2 h-[20vh] px-8 py-5 flex justify-between items-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <button className="p-2 bg-eDarkBlue text-eWhite hover:bg-eWhite hover:text-eDarkBlue transition-all duration-300 font-bold flex items-center gap-1 rounded-lg">
        <FaPlus />
        <span>Nova Simulação</span>
      </button>
    </header>
  );
}

import { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import GeneratingContentContext from "../../context/GeneratingContentContext";

export default function Header({ title }) {
  const generatingContent = useContext(GeneratingContentContext);

  return (
    <>
      <header className="w-full border-b-2 h-[20vh] px-8 py-5 flex justify-between items-center gap-4">
        <h1 className="max-md:text-2xl text-4xl font-bold">{title}</h1>
        <button
          disabled={generatingContent}
          onClick={() =>
            document.getElementById("simulation-modal").showModal()
          }
          className={`p-2 bg-eDarkBlue text-eWhite enabled:hover:bg-eWhite enabled:hover:text-eDarkBlue transition-all duration-300 font-bold flex items-center gap-1 rounded-lg disabled:opacity-70  ${
            generatingContent ? "skeleton" : ""
          }`}
        >
          <FaPlus />
          <span className="max-md:text-xs ">Nova Simulação</span>
        </button>
      </header>
    </>
  );
}

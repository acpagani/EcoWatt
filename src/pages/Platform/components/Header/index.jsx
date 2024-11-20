import { FaPlus } from "react-icons/fa6";
import CallGemini from "../../backend/gemini/API";
import { useState } from "react";
import MetricInput from "./components/MetricInput";

export default function Header({ title }) {
  const [consumoTotal, setConsumoTotal] = useState(0);
  const [carbonoEmitido, setCarbonoEmitido] = useState(0);
  const [energiaRenovavel, setEnergiaRenovavel] = useState(0);
  const [fontesEnergiaRenovavel, setFontesEnergiaRenovavel] = useState(0);
  const [reducaoPicoDemanda, setReducaoPicoDemanda] = useState(0);

  const [generatingContent, setGeneratingContent] = useState(false);

  const handleSubmit = async () => {

    setCarbonoEmitido(0);
    setConsumoTotal(0);
    setEnergiaRenovavel(0);
    setFontesEnergiaRenovavel(0);
    setReducaoPicoDemanda(0);
    
    setGeneratingContent(true);

    const result = await CallGemini(JSON.stringify({
      consumoTotal,
      carbonoEmitido,
      energiaRenovavel,
      fontesEnergiaRenovavel,
      reducaoPicoDemanda,
    }));
    
    setGeneratingContent(false);
    console.log(result);
    
  };
  return (
    <>
      <header className="w-full border-b-2 h-[20vh] px-8 py-5 flex justify-between items-center gap-4">
        <h1 className="max-md:text-2xl text-4xl font-bold">{title}</h1>
        <button
          disabled={generatingContent}
          onClick={() => document.getElementById("simulation-modal").showModal()}
          className={`p-2 bg-eDarkBlue text-eWhite enabled:hover:bg-eWhite enabled:hover:text-eDarkBlue transition-all duration-300 font-bold flex items-center gap-1 rounded-lg disabled:opacity-70  ${generatingContent ? "skeleton" : ""}`}
        >
          <FaPlus />
          <span className="max-md:text-xs ">Nova Simulação</span>
        </button>
      </header>
      <dialog id="simulation-modal" className="modal">
        <div className="modal-box flex flex-col gap-5">
          <h3 className="font-bold text-lg">Nova Simulação (mensal)</h3>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-6" onClick={() => document.getElementById("simulation-modal").close()}>✕</button>
          <div className="">
            <form
              method="dialog"
              className="flex flex-col gap-10"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-5">
                <MetricInput
                  title={"Consumo Total"}
                  id={"consumo-total"}
                  range={100}
                  value={consumoTotal}
                  onChange={(e) => setConsumoTotal(e.target.value)}
                  label={"MWh"}
                />
                <MetricInput
                  title={"Volume de Carbono Emitido"}
                  id={"carbono-emitido"}
                  range={1000}
                  value={carbonoEmitido}
                  onChange={(e) => setCarbonoEmitido(e.target.value)}
                  label={"kg de CO₂"}
                />
                <MetricInput
                  title={"Energia Renovável"}
                  id={"energia-renovavel"}
                  range={100}
                  value={energiaRenovavel}
                  onChange={(e) => setEnergiaRenovavel(e.target.value)}
                  label={"%"}
                />
                <MetricInput
                  title={"Fontes de Energia Renovável"}
                  id={"fontes-energia-renovavel"}
                  range={10}
                  value={fontesEnergiaRenovavel}
                  onChange={(e) => setFontesEnergiaRenovavel(e.target.value)}
                  label={""}
                />
                <MetricInput
                  title={"Redução do Pico de Demanda"}
                  id={"reducao-pico-demanda"}
                  range={100}
                  value={reducaoPicoDemanda}
                  onChange={(e) => setReducaoPicoDemanda(e.target.value)}
                  label={"%"}
                />
              </div>
              <button
                type="submit"
                className="btn bg-eDarkBlue text-eWhite hover:text-eDarkBlue"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

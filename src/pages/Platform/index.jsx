import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import GeneratingContentContext from "./context/GeneratingContentContext";
import MetricInput from "./components/MetricInput";
import CallGemini from "./backend/gemini/CallGemini";
import { createNewSimulation, getSimulationData } from "../../api/simulation";
import { getUserDataLS } from "../../api/userData";
import { createNewLog } from "../../api/logs";
import { BsStars } from "react-icons/bs";
import SettingsModal from "./components/Sidebar/components/SettingsModal";
import Swal from "sweetalert2";

export default function Plaftorm() {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setActive(false);
  }, [pathname]);

  const [consumoTotal, setConsumoTotal] = useState(0);
  const [carbonoEmitido, setCarbonoEmitido] = useState(0);
  const [energiaRenovavel, setEnergiaRenovavel] = useState(0);
  const [fontesEnergiaRenovavel, setFontesEnergiaRenovavel] = useState(0);
  const [reducaoPicoDemanda, setReducaoPicoDemanda] = useState(0);

  const [generatingContent, setGeneratingContent] = useState(false);

  const handleSubmit = async () => {
    Swal.showLoading()
    setCarbonoEmitido(0);
    setConsumoTotal(0);
    setEnergiaRenovavel(0);
    setFontesEnergiaRenovavel(0);
    setReducaoPicoDemanda(0);

    setGeneratingContent(true);

    const userData = getUserDataLS();

    await createNewSimulation(userData.id, consumoTotal, carbonoEmitido, energiaRenovavel, fontesEnergiaRenovavel, reducaoPicoDemanda);

    const getSimulationDataResponse = await getSimulationData(userData.id);    

    const responseGemini = await CallGemini(
      JSON.stringify(getSimulationDataResponse.data)
    );
    
    await createNewLog(userData.id, responseGemini);

    setGeneratingContent(false);
    console.log(responseGemini);

    const resultJson = JSON.parse(responseGemini);
    let user = getUserDataLS();

    user.pontuation = resultJson.points;
    user.category = resultJson.userCategory;
    Swal.close()
    localStorage.setItem("user", JSON.stringify(user));
    window.location.reload()
  };

  return (
    <GeneratingContentContext.Provider value={generatingContent}>
      <div className={`max-w-screen max-h-screen flex relative ${active ? "overflow-hidden" : ""}`}>
        <div
          className={`absolute sm:static ${
            active ? "left-0" : "-left-full"
          } z-10 h-full w-screen sm:w-auto transition-all duration-500`}
        >
          <Sidebar onClick={() => setActive((prev) => !prev)} />
        </div>
        <div className="w-screen md:w-[80vw]">
          <Outlet />
        </div>
      </div>
      <dialog id="simulation-modal" className="modal">
        <div className="modal-box flex flex-col gap-5">
          <h3 className="font-bold sm:text-lg">Nova Simulação (mensal)</h3>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-5 top-6"
            onClick={() => document.getElementById("simulation-modal").close()}
          >
            ✕
          </button>
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
                className="btn bg-eDarkBlue text-eWhite hover:text-eDarkBlue flex items-center justify-center gap-2"
              >
                Submit
                <BsStars className="size-5" />
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <SettingsModal />
    </GeneratingContentContext.Provider>
  );
}

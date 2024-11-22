import { useEffect, useState } from "react";
import { getSimulationData } from "../../../../api/simulation";
import OutletMain from "../../components/OutletMain";
import ChartCard from "./components/ChartCard";
import BarChart from "./components/Charts/Bar";
import LineChart from "./components/Charts/Line";
import PieChart from "./components/Charts/Pie";
import { barChartData } from "./components/Charts/data/BarTemplateData";
import { lineChartData } from "./components/Charts/data/LineTemplateData";
import { pieChartData } from "./components/Charts/data/PieTemplateData";
import { getUserDataLS } from "../../../../api/userData";
import { ring } from "ldrs";

export default function Dashboard() {
  ring.register();

  const [simulationData, setSimulationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSimulationData = async () => {
      const response = await getSimulationData(getUserDataLS().id);
      setSimulationData(response.data);
      setIsLoading(false);
    };
    fetchSimulationData();
  }, []);

  const totalUse = simulationData.map((item) => parseInt(item.totalUse));
  console.log(totalUse);
  
  const carbonEmitted = simulationData.map((item) =>
    parseInt(item.carbonEmitted)
  );
  const renewableEnergy = parseInt(simulationData[0]?.renewableEnergy);
  const renewableEnergySource = parseInt(
    simulationData[0]?.renewableEnergySource
  );
  const peakDemandReduction = simulationData.map((item) =>
    parseInt(item.peakDemandReduction)
  );

  const renewableEnergyArray = [renewableEnergy, 100 - renewableEnergy];

  return (
    <>
      <OutletMain title="Dashboard">
        {isLoading ? (
          <div className="h-full w-full flex items-center justify-center">
            <l-ring size="60" speed="1.5" color="#10D48E"></l-ring>
          </div>
        ) : (
          <div className="flex flex-col h-full gap-3 p-3 overflow-y-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 basis-1/2 gap-3">
              <ChartCard label="Consumo Mensal do Complexo">
                <LineChart data={lineChartData(totalUse)} />
              </ChartCard>
              <ChartCard label="Emissões de Carbono">
                <BarChart data={barChartData(carbonEmitted)} />
              </ChartCard>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-1 gap-3 ">
              <ChartCard label="Redução do Pico de Demanda">
                <LineChart data={lineChartData(peakDemandReduction)} />
              </ChartCard>
              <ChartCard label="N° de Fontes de Energia Renovável">
                <div className="flex flex-col gap-2 h-full items-center justify-center">
                  <div className="stat text-center">
                    <div className="stat-value text-7xl">
                      {renewableEnergySource}
                    </div>
                  </div>
                </div>
              </ChartCard>
              <ChartCard label="% de Energia Renovável" isLast>
                <div className="md:w-2/3 lg:w-1/2 mx-auto h-full flex items-center">
                  <PieChart data={pieChartData(renewableEnergyArray)} />
                </div>
              </ChartCard>
            </div>
          </div>
        )}
      </OutletMain>
    </>
  );
}

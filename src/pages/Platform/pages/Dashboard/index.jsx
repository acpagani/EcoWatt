import OutletMain from "../../components/OutletMain";
import ChartCard from "./components/ChartCard";
import BarChart from "./components/Charts/Bar";
import LineChart from "./components/Charts/Line";
import PieChart from "./components/Charts/Pie";
import { barChartData } from "./components/Charts/data/FakeBarData";
import { lineChartData } from "./components/Charts/data/FakeLineData";
import { pieChartData } from "./components/Charts/data/FakePieData";

export default function Dashboard() {

  const fakeNumberSource = 5;


  return (
    <>
      <OutletMain title="Dashboard">
        <div className="flex flex-col h-full gap-3 p-3 overflow-y-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 basis-1/2 gap-3">
            <ChartCard label="Consumo Mensal do Complexo">
              <LineChart data={lineChartData} />
            </ChartCard>
            <ChartCard label="Emissões de Carbono">
              <BarChart data={barChartData} />
            </ChartCard>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-1 gap-3 ">
            <ChartCard label="Redução do Pico de Demanda">
              <LineChart data={lineChartData} />
            </ChartCard>
            <ChartCard label="N° de Fontes de Energia Renovável">
              <div className="flex flex-col gap-2 h-full items-center justify-center">
                <div className="stat text-center">
                  <div className="stat-value text-7xl">{fakeNumberSource}</div>
                </div>
              </div>
            </ChartCard>
            <ChartCard label="% de Energia Renovável" isLast>
              <div className="md:w-2/3 lg:w-1/2 mx-auto h-full flex items-center">
                <PieChart data={pieChartData} />
              </div>
            </ChartCard>
          </div>
        </div>
      </OutletMain>
    </>
  );
}

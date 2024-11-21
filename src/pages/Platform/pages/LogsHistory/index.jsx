import OutletMain from "../../components/OutletMain";
import LogCard from "./components/LogCard";
import logs from "./data/mockedLogs.json";

export default function LogsHistory() {
  return (
    <OutletMain title="Histórico de Logs">
      <div className="flex flex-col items-start gap-6 px-10 py-8 w-full lg:w-2/3 mx-auto">
        {
          logs
          .slice()
          .reverse()
          .map((log) => (
            <LogCard key={log.id} id={log.id} date={log.date}/>
          ))
        }
      </div>
    </OutletMain>
  );
}

import { useEffect, useState } from "react";
import { getUserLogs } from "../../../../api/logs";
import { getUserDataLS } from "../../../../api/userData";
import OutletMain from "../../components/OutletMain";
import LogCard from "./components/LogCard";
import { ring } from "ldrs";

export default function LogsHistory() {
  
  ring.register();

  const [retrievedLogs, setRetrievedLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchLogs = async () => {
      const user = getUserDataLS();
      const response = await getUserLogs(user.id);
      setRetrievedLogs(response.data);
      console.log(response.data[0]);
      
      setIsLoading(false);
    }
    fetchLogs();
  }, []);  

  return (
    <OutletMain title="Histórico de Logs">
      <div className="flex flex-col items-start gap-4 px-10 py-8 w-full lg:w-2/3 mx-auto overflow-y-scroll h-full">
      {isLoading ? (
          <div className="h-full w-full flex items-center justify-center">
            <l-ring size="60" speed="1.5" color="#10D48E"></l-ring>
          </div>
        ) : (
          retrievedLogs.length > 0 ?
            (retrievedLogs
            .map((log) => (
              <LogCard key={log.id} {...log}/>
            )))
            :
            (
              <div className="h-full w-full flex flex-col gap-10 items-center justify-center">
                <p className="text-xl text-eDarkBlue font-semibold">Nenhum log encontrado</p>
                <p className="text-xl text-eDarkBlue text-center">Experimente clicar no botão "Nova Simulação" e obtenha seu primeiro relatório!</p>
              </div>
            )
        ) }
      </div>
    </OutletMain>
  );
}

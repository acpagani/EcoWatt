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

  const fetchLogs = async () => {
    const user = getUserDataLS();
    const response = await getUserLogs(user.id);
    
    return response.data;
  }
  
  useEffect(() => {
    const getLogs = async () => {
      const logs = await fetchLogs();
      setRetrievedLogs(logs);
      setIsLoading(false);
    };
    getLogs();
  }, []);  

  return (
    <OutletMain title="Histórico de Logs">
      <div className="flex flex-col items-start gap-4 px-10 py-8 w-full lg:w-2/3 mx-auto">
      {isLoading ? (
          <div className="h-full w-full flex items-center justify-center">
            <l-ring size="60" speed="1.5" color="#10D48E"></l-ring>
          </div>
        ) : (
            retrievedLogs
            .map((log) => (
              <LogCard key={log.id} {...log}/>
            ))
        ) }
        
      </div>
    </OutletMain>
  );
}

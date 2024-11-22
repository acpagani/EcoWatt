import { Link, useParams } from "react-router-dom";
import OutletMain from "../../components/OutletMain";
import Markdown from "react-markdown";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { getLogDetails } from "../../../../api/logs";
import { useEffect, useState } from "react";
import { ring } from "ldrs";

export default function LogDetails() {
  ring.register();
  const { id } = useParams();

  const [retrievedLog, setRetrievedLog] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchLog = async () => {
    const response = await getLogDetails(id);

    return response.data[0];
  };

  useEffect(() => {
    const getLog = async () => {
      const log = await fetchLog();
      setRetrievedLog(log);
      setIsLoading(false);
    };
    getLog();
  }, []);

  const content = retrievedLog.content ? JSON.parse(retrievedLog.content) : {};

  return (
    <OutletMain title={`Detalhes do Log #${id}`}>
      <div className="flex flex-col gap-1  px-10 py-8 h-full w-full overflow-y-scroll">
        <Link
          to={"/service/logs"}
          className="hover:bg-gray-400/30 transition-all rounded-xl group flex items-center w-fit"
        >
          <MdOutlineKeyboardArrowLeft className="text-eGray text-4xl group-hover:-translate-x-2 transition-all" />
        </Link>
        {isLoading ? (
          <div className="h-full w-full flex items-center justify-center">
            <l-ring size="60" speed="1.5" color="#10D48E"></l-ring>
          </div>
        ) : (
          <div className="flex flex-col gap-14 md:flex-row">
            <div className="max-w-prose">
              <Markdown>{content.efficiencyLog}</Markdown>
            </div>
            <ul className="flex flex-col gap-4">
              <li>
                <p>Pontuação:</p>{" "}
                <span className="font-medium text-xl">{content.points}</span>
              </li>
              <li>
                <p>Emitido em</p>{" "}
                <span className="font-medium text-xl whitespace-nowrap">
                  {retrievedLog.createdAt}
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </OutletMain>
  );
}

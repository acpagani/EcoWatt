import { Link, useParams } from "react-router-dom";
import OutletMain from "../../components/OutletMain";
import logs from "../LogsHistory/data/mockedLogs.json";
import Markdown from "react-markdown";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function LogDetails() {
  const { id } = useParams();

  const log = logs.find((log) => log.id === parseInt(id));

  return (
    <OutletMain title={`Detalhes do Log #${id}`}>
      <div className="flex flex-col gap-1  px-10 py-8 h-full w-full overflow-y-scroll">
        <Link
          to={"/service/logs"}
          className="hover:bg-gray-400/30 transition-all rounded-xl group flex items-center w-fit"
        >
          <MdOutlineKeyboardArrowLeft className="text-eGray text-4xl group-hover:-translate-x-2 transition-all" />
        </Link>
        <div className="flex flex-col gap-14 md:flex-row">
          <div className="max-w-prose">
            <p>
              <Markdown>{log.efficiencyLog}</Markdown>
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            <li>
              <p>Pontuação:</p>{" "}
              <span className="font-medium text-xl">{log.points}</span>
            </li>
            <li>
              <p>Emitido em</p>{" "}
              <span className="font-medium text-xl whitespace-nowrap">
                {log.date}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </OutletMain>
  );
}

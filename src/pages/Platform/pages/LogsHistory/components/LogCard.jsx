import { Link } from "react-router-dom";

export default function LogCard({ id, date }) {
  return (
    <Link to={`/service/logs/${id}`} className="flex flex-col gap-2 w-full p-3 bg-white rounded-md shadow-md">
            <div className="flex justify-between">
            <h3 className="text-2xl font-semibold">Log #{id}</h3>
            <span className="text-lg text-gray-400">{date}</span>
            </div>
    </Link>
  )
}
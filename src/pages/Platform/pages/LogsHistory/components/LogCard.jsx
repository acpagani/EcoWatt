import { Link } from "react-router-dom";

export default function LogCard({ id, createdAt }) {
  return (
    <Link to={`/service/logs/${id}`} className="flex border-2 flex-col gap-2 w-full p-3 bg-white rounded-md hover:shadow-md hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between">
            <h3 className="text-2xl font-semibold">Log #{id}</h3>
            <span className="text-lg text-gray-400">{createdAt}</span>
            </div>
    </Link>
  )
}
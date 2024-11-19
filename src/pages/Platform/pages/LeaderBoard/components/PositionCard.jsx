export default function PositionCard({
  position,
  name,
  points,
  category,
  isUser,
}) {
  return (
    <div
      className={`flex items-center justify-between w-full px-6 py-4 rounded-lg shadow-md gap-7 ${
        isUser ? (position > 4 ? "bg-eGreen sticky bottom-0" : "bg-eGreen sticky top-0"): "bg-eWhite text-eDarkBlue"
      }`}
    >
      <span className="font-bold text-lg md:text-2xl basis-1/3 md:basis-1/4">{position}</span>
      <span className="font-bold md:text-lg md:basis-1/4 flex-grow overflow-hidden text-ellipsis">{name}</span>
      <span className="font-bold md:text-lg basis-1/3 md:basis-1/4 hidden md:block">{category}</span>
      <span className="font-bold text-lg md:text-2xl basis-1/3 md:basis-1/4 text-end pr-4">
        {points}
      </span>
    </div>
  );
}

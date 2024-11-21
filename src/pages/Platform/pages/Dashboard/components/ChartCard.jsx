export default function ChartCard({ label, children, isLast=false }) {
  return (
    <div className={`flex flex-col gap-4 items-center rounded-lg drop-shadow-lg bg-eWhite p-3 ${isLast ? "md:col-span-2 lg:col-span-1" : ""}`}>
      <h2 className="lg:text-lg font-medium text-center">{label}</h2>
      <div className="flex-1 w-full">
        {children}
      </div>
    </div>
  )
}
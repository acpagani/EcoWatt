export default function MetricInput({ title, id, range, value, onChange, label }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-medium">
        {title}
      </label>
      <div className="flex gap-2 items-center">
        <input
          id={id}
          type="range"
          min={0}
          max={range}
          className="range range-xs [--range-shdw:#10D48E]"
          value={value}
          onChange={onChange}
        />
        <span className="text-eDarkBlue whitespace-nowrap">
          {value} {label}
        </span>
      </div>
    </div>
  );
}

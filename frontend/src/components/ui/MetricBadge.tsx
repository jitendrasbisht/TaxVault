type Props = {
  value: string;
  positive?: boolean;
};

export function MetricBadge({
  value,
  positive = true,
}: Props) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        positive
          ? "bg-emerald-100 text-emerald-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {value}
    </span>
  );
}

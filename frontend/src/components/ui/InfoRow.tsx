type Props = {
  label: string;
  value: string;
};

export function InfoRow({
  label,
  value,
}: Props) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-medium text-slate-900">
        {value}
      </span>
    </div>
  );
}

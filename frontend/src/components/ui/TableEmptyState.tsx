type Props = {
  title?: string;
  description?: string;
};

export function TableEmptyState({
  title = "No records found",
  description = "There is no data available.",
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-slate-500">
        {description}
      </p>
    </div>
  );
}

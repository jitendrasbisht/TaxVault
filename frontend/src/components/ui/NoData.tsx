type Props = {
  title: string;
  description: string;
};

export function NoData({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-slate-200 py-16 text-center">
      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-3 text-slate-500">
        {description}
      </p>
    </div>
  );
}
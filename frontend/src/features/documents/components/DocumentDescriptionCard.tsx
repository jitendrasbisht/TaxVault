interface Props {
  description?: string;
}

export default function DocumentDescriptionCard({
  description,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-4 text-lg font-semibold">
        Description
      </h2>

      <p className="leading-7 text-slate-600">
        {description ||
          "No description available."}
      </p>

    </div>
  );
}
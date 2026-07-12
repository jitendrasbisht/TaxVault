import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export function SectionCard({
  title,
  children,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold">
        {title}
      </h2>

      {children}
    </div>
  );
}
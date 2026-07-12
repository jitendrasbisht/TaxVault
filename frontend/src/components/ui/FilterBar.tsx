import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function FilterBar({
  children,
}: Props) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {children}
    </div>
  );
}

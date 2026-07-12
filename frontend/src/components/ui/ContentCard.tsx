import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function ContentCard({
  children,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
      {children}
    </div>
  );
}

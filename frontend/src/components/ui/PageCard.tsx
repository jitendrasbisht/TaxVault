import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PageCard({
  children,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      {children}
    </div>
  );
}

import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export function FormSection({
  title,
  children,
}: Props) {
  return (
    <section className="space-y-5">

      <h2 className="text-xl font-semibold text-slate-900">
        {title}
      </h2>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {children}
      </div>

    </section>
  );
}

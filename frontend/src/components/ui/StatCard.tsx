import { ReactNode } from "react";

type Props = {
  title: string;
  value: string;
  footer?: string;
  icon?: ReactNode;
};

export function StatCard({
  title,
  value,
  footer,
  icon,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {value}
          </h2>

          {footer && (
            <p className="mt-2 text-sm text-slate-500">
              {footer}
            </p>
          )}

        </div>

        {icon}

      </div>

    </div>
  );
}

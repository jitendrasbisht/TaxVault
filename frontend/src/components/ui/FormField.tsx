import { ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
};

export function FormField({
  label,
  children,
}: Props) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      {children}
    </div>
  );
}

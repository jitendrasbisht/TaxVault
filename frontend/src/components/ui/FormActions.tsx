import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function FormActions({
  children,
}: Props) {
  return (
    <div className="mt-8 flex justify-end gap-3">
      {children}
    </div>
  );
}

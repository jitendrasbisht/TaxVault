import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function CardGrid({
  children,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {children}
    </div>
  );
}

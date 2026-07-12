import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PageSection({
  children,
}: Props) {
  return (
    <div className="space-y-8">
      {children}
    </div>
  );
}

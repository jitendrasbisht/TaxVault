import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PageContent({
  children,
}: Props) {
  return (
    <div className="space-y-6">
      {children}
    </div>
  );
}

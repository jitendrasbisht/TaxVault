import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PageContainer({
  children,
}: Props) {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {children}
    </div>
  );
}
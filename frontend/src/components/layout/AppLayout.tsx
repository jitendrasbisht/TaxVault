import type { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <Sidebar />
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default AppLayout;
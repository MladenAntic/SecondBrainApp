import { ReactNode } from "react";
import SideNav from "./side-nav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="container mx-auto flex gap-24 pt-12">
      <SideNav />

      {children}
    </div>
  );
}

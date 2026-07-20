import { ReactNode } from "react";
import FloatingNav from "./FloatingNav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <main>{children}</main>
      <FloatingNav />
    </div>
  );
}

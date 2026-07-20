import { Link, useLocation } from "react-router-dom";
import { Home, LayoutGrid, Boxes, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { to: "/", label: "Home", icon: Home },
  { to: "/#projects", label: "Projects", icon: LayoutGrid },
  { to: "/#skills", label: "Skills", icon: Boxes },
];

export default function FloatingNav() {
  const location = useLocation();

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-[18px] bg-charcoal-light/95 p-2 shadow-2xl backdrop-blur-sm sm:gap-3 sm:p-2.5"
    >
      {NAV_ITEMS.map(({ to, label, icon: Icon }) => {
        const isActive =
          to === "/" ? location.pathname === "/" && !location.hash : false;
        return (
          <Link
            key={label}
            to={to}
            aria-label={label}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 sm:h-[50px] sm:w-[50px]",
              isActive
                ? "bg-[#D4D4D4] text-charcoal"
                : "bg-charcoal text-white hover:bg-[#333]",
            )}
          >
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
          </Link>
        );
      })}
      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-white transition-colors duration-200 hover:bg-[#333] sm:h-[50px] sm:w-[50px]"
      >
        <Github className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
      </a>
    </nav>
  );
}

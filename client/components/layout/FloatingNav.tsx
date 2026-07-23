import { useEffect, useState } from "react";
import { Award, Boxes, Github, Home, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: LayoutGrid },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "skills", label: "Skills", icon: Boxes },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -60%", threshold: [0.1, 0.4, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-[18px] bg-charcoal-light/95 p-2 shadow-2xl backdrop-blur-sm sm:gap-3 sm:p-2.5"
    >
      {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => scrollTo(id)}
          aria-label={`Go to ${label}`}
          aria-current={activeSection === id ? "page" : undefined}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-[50px] sm:w-[50px]",
            activeSection === id
              ? "bg-[#D4D4D4] text-charcoal"
              : "bg-charcoal text-white hover:bg-[#333]",
          )}
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
        </button>
      ))}
      <a
        href="https://github.com/Yorukaze99/Portofolio-V2"
        target="_blank"
        rel="noreferrer"
        aria-label="Open GitHub repository"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-white transition-colors duration-200 hover:bg-[#333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-[50px] sm:w-[50px]"
      >
        <Github className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
      </a>
    </nav>
  );
}

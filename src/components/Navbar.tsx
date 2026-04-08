import { useState, useEffect } from "react";

const navItems = [
  { label: "Sobre mí", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const handleSectionTracking = () => {
      const navElement = document.querySelector("nav");
      const navHeight = navElement?.getBoundingClientRect().height ?? 0;
      const probeLine = window.scrollY + navHeight + 24;

      let currentSection = navItems[0]?.href ?? "#about";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }

        if (section.offsetTop <= probeLine) {
          currentSection = `#${id}`;
        }
      }

      setActiveSection(currentSection);
    };

    handleSectionTracking();
    window.addEventListener("scroll", handleSectionTracking, { passive: true });
    window.addEventListener("resize", handleSectionTracking);

    return () => {
      window.removeEventListener("scroll", handleSectionTracking);
      window.removeEventListener("resize", handleSectionTracking);
    };
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const targetId = href.replace("#", "");
    const targetSection = document.getElementById(targetId);
    const navElement = document.querySelector("nav");

    if (!targetSection || !navElement) {
      return;
    }

    const navHeight = navElement.getBoundingClientRect().height;
    const targetPosition =
      targetSection.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    const startY = window.scrollY;
    const endY = Math.max(targetPosition, 0);
    const distance = endY - startY;
    const duration = 900;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || Math.abs(distance) < 4) {
      window.scrollTo(0, endY);
    } else {
      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const startTime = performance.now();
      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * easedProgress);

        if (progress < 1) {
          window.requestAnimationFrame(animateScroll);
        }
      };

      window.requestAnimationFrame(animateScroll);
    }

    setActiveSection(href);
    setMenuOpen(false);
    window.history.replaceState(null, "", href);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary/95 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display text-2xl text-primary">
          ES
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              aria-current={activeSection === item.href ? "page" : undefined}
              className={`font-body text-xs tracking-[0.2em] uppercase transition-colors ${
                activeSection === item.href
                  ? "text-primary"
                  : "text-secondary-foreground/70 hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Menu"
        >
          <span className={`w-6 h-px bg-secondary-foreground transition-all ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`w-6 h-px bg-secondary-foreground transition-all ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-md py-8">
          <div className="container mx-auto px-6 flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                aria-current={activeSection === item.href ? "page" : undefined}
                className={`font-body text-sm tracking-[0.2em] uppercase transition-colors ${
                  activeSection === item.href
                    ? "text-primary"
                    : "text-secondary-foreground/70 hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

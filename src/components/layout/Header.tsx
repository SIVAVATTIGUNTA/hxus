import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Platform", href: "/platform" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Business Consulting", href: "/services/business-consulting" },
      { label: "AI Agents", href: "/services/ai-agents" },
      { label: "MSP", href: "/services/msp" },
      { label: "RPO", href: "/services/rpo" },
      { label: "RaaS", href: "/services/raas" },
      { label: "Direct Sourcing", href: "/solutions/direct-sourcing" },
      { label: "Global Staffing", href: "/solutions/global-staffing" },
      { label: "SaaS Enablement", href: "/services/saas-enablement" },
      { label: "Data & Insights", href: "/solutions/data-insights" },
    ],
  },
  { label: "Solutions", href: "/solutions" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const openServices = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setServicesOpen(true);
  };

  const closeServices = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setServicesOpen(false), 180);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/10 via-background/85 to-primary/5 backdrop-blur-xl border-b border-border/60 shadow-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">HX</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">HX Consulting</span>
              <span className="text-xs text-muted-foreground block -mt-1">hxinc.us</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                item.children?.some((child) => location.pathname.startsWith(child.href)) ||
                location.pathname === item.href;

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={openServices}
                    onMouseLeave={closeServices}
                  >
                    <button
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1",
                        isActive
                          ? "text-primary bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    {servicesOpen && (
                      <div className="absolute left-0 mt-2 w-64 rounded-xl bg-card border border-border shadow-soft py-2"
                        onMouseEnter={openServices}
                        onMouseLeave={closeServices}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => setServicesOpen(false)}
                            className={cn(
                              "block px-4 py-2 text-sm transition-colors",
                              location.pathname.startsWith(child.href)
                                ? "text-primary bg-accent"
                                : "text-foreground hover:bg-muted"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact">
              {/* <Button variant="ghost" size="sm">
                Contact
              </Button> */}
            </Link>
            <Link to="/contact">
              <Button size="sm">Book a Demo</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

          {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive =
                  item.children?.some((child) => location.pathname.startsWith(child.href)) ||
                  location.pathname === item.href;

                return (
                  <div key={item.label} className="flex flex-col gap-1">
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "text-primary bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-4 border-l border-border/60 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "px-3 py-2 rounded-lg text-sm transition-colors",
                              location.pathname.startsWith(child.href)
                                ? "text-primary bg-accent"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 border-t border-border mt-2 flex flex-col gap-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Contact
                  </Button>
                </Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Book a Demo</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

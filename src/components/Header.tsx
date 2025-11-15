import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onCTAClick: () => void;
}

export const Header = ({ onCTAClick }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Консультация", href: "#consultation" },
    { label: "Результаты", href: "#results" },
    { label: "Обо мне", href: "#about" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Услуги", href: "#services" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Виктория Мельчакова
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button onClick={onCTAClick} className="bg-gradient-primary">
              Хочу на консультацию
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button onClick={onCTAClick} className="bg-gradient-primary w-full">
              Хочу на консультацию
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

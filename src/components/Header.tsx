import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <a href="#" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary"></div>
            <span className="font-semibold">Ruihao Qiu</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#articles" className="text-muted-foreground hover:text-foreground transition-colors">Articles</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:inline-flex">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t bg-background px-4 py-4 flex flex-col space-y-3">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#articles" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMenuOpen(false)}>Articles</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
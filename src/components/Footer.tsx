import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:your@email.com" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary"></div>
              <span className="font-semibold">Ruihao Qiu</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Team Lead AI/Data Science · PhD in Physics.<br />
              Building AI that works in the real world.
            </p>
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Button key={label} variant="outline" size="icon" asChild aria-label={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-foreground transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Ruihao Qiu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      data-cursor={isDark ? "Light" : "Dark"}
      className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-foreground/[0.03] text-foreground/70 transition-all hover:border-border hover:text-foreground"
    >
      <Sun className={`h-3.5 w-3.5 transition-all ${isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`} />
      <Moon className={`absolute h-3.5 w-3.5 transition-all ${isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}`} />
    </button>
  );
}
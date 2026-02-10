import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "muted" | "dark" | "gradient";
}

const bgClasses = {
  white: "bg-white",
  muted: "bg-muted",
  dark: "bg-dark text-white",
  gradient: "bg-gradient-to-br from-primary/5 via-white to-secondary/5",
};

export default function SectionWrapper({
  children,
  className,
  id,
  background = "white",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 px-4", bgClasses[background], className)}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

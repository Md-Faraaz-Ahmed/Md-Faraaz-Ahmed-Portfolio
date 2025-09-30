import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center text-center space-y-4 mb-12", className)}>
        <h2 className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary")}>
            {children}
        </h2>
    </div>
  );
}


import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
  icon?: React.ReactNode;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, href, icon, ...props }, ref) => {
  const content = (
    <>
      <span className="relative z-20 inline-flex items-center gap-2 translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 whitespace-nowrap">
        {icon && <span className="shrink-0">{icon}</span>}
        {text}
      </span>
      <div className="absolute top-0 left-0 z-20 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100 whitespace-nowrap px-4">
        <span>{text}</span>
        <ArrowRight className="w-5 h-5" />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-green-600 transition-all duration-500 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-green-600 z-0 opacity-0"></div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group relative min-w-[240px] cursor-pointer overflow-hidden rounded-full border-2 border-white/20 bg-green-500 p-4 text-center font-black text-white shadow-xl transition-all whatsapp-pulse flex items-center justify-center",
          className
        )}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      className={cn(
        "group relative min-w-[200px] cursor-pointer overflow-hidden rounded-full border bg-background p-4 text-center font-semibold transition-all flex items-center justify-center",
        className
      )}
      {...props}
    >
      {content}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };

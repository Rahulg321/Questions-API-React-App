import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface AnimatedGradientTextProps {
  text: string;
  className?: string;
}

export default function AnimatedGradientText({
  text,
  className,
}: AnimatedGradientTextProps) {
  return (
    <div className="group flex items-center justify-center">
      <div
        className={cn(
          "relative flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/40 px-4 py-2 backdrop-blur-sm [--bg-size:300%]",
          "transition-all duration-500 hover:bg-gray-900/50",
          className
        )}
      >
        <div
          className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
        />
        <span className="text-sm">🎉</span>
        <span
          className="text-sm bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-[length:var(--bg-size)_100%] animate-gradient bg-clip-text text-transparent"
        >
          {text}
        </span>
        <ChevronRight className="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-0.5" />
      </div>
    </div>
  );
}
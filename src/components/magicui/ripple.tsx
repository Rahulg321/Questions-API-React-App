import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

interface RippleProps {
  className?: string;
  duration?: number;
  size?: number;
}

export default function Ripple({
  className,
  duration = 4000,
  size = 400,
}: RippleProps) {
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ripple = rippleRef.current;
    if (!ripple) return;

    const createRipple = () => {
      const circle = document.createElement("div");
      circle.classList.add("ripple");

      // Random position within the container
      const x = Math.random() * ripple.offsetWidth;
      const y = Math.random() * ripple.offsetHeight;

      circle.style.width = circle.style.height = `${size}px`;
      circle.style.left = `${x - size / 2}px`;
      circle.style.top = `${y - size / 2}px`;
      circle.style.position = "absolute";
      circle.style.borderRadius = "50%";
      circle.style.background = `
        radial-gradient(
          circle at center,
          rgba(99, 102, 241, 0.15) 0%,
          rgba(99, 102, 241, 0.1) 25%,
          rgba(99, 102, 241, 0.05) 50%,
          rgba(99, 102, 241, 0) 100%
        )
      `;
      circle.style.pointerEvents = "none";
      circle.style.transform = "scale(0)";
      circle.style.animation = `ripple ${duration}ms cubic-bezier(0.4, 0.0, 0.2, 1)`;

      ripple.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, duration);
    };

    // Create initial ripples
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createRipple(), i * 800);
    }

    // Continue creating ripples
    const interval = setInterval(() => {
      createRipple();
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [duration, size]);

  return (
    <div
      ref={rippleRef}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    />
  );
}

import { useRef, type ReactNode } from "react";

const AnimatedButton = ({ children }: { children: ReactNode }) => {
  const bgRef = useRef<HTMLSpanElement | null>(null);

  const getDirection = (e: React.MouseEvent, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const y = e.clientY - rect.top - rect.height / 2;
    return y > 0 ? "bottom" : "top";
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!bgRef.current) return;

    const dir = getDirection(e, e.currentTarget);

    const from = {
      top: "translateY(-100%)",
      bottom: "translateY(100%)",
    };

    // Move background off-screen
    bgRef.current.style.transform = from[dir];

    // Animate it into view
    requestAnimationFrame(() => {
      bgRef.current!.style.transform = "translate(0,0)";
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!bgRef.current) return;

    const dir = getDirection(e, e.currentTarget);

    const to = {
      top: "translateY(-100%)",
      bottom: "translateY(100%)",
    };

    bgRef.current.style.transform = to[dir];
  };

  return (
    <button
      className="relative overflow-hidden group w-full border-y-4 py-4 px-1 font-bold text-lg flex items-center justify-between hover:text-white hover:border-black hover:px-4 transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative z-10 flex items-center justify-between w-full">
        {children}
      </span>

      <span
        ref={bgRef}
        className="absolute inset-0 bg-black -z-10 transition-transform duration-300"
        style={{ transform: "translateY(100%)" }}
      />
    </button>
  );
};

export default AnimatedButton;

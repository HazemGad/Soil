import { useEffect, useRef, useState } from "react";

const useInView = <T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
};

export default useInView;

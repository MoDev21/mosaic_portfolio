import { useEffect, useState } from "react";

export function UseIsVisible(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    // Return early if the element reference doesn't exist yet
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
import gsap from "gsap";
import { ReactNode, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface RouteTransitionProps {
  children: ReactNode;
}

export function RouteTransition({ children }: RouteTransitionProps) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    });

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div ref={containerRef} style={{ width: "100%" }}>
      {children}
    </div>
  );
}

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import reactLogo from "../../assets/react.svg";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.7,
            onComplete,
          });
        },
      });

      tl.from(".splash-logo", {
        scale: 3.5,
        duration: 1,
        ease: "back.out(1.7)",
      })
        .from(".splash-text", {
          y: 50,
          opacity: 0,
          duration: 1,
        })
        .to(
          progressRef.current,
          {
            width: "100%",
            duration: 1.5,
            ease: "power1.inOut",
          },
          "-=1"
        );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        zIndex: 9999,
      }}
    >
      <div className="splash-logo" style={{ color: "#fff" }}>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1 className="splash-text" style={{ color: "#fff", marginTop: "1rem" }}>
        Welcome
      </h1>
      <div
        style={{
          width: "200px",
          height: "4px",
          backgroundColor: "#333",
          marginTop: "2rem",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          ref={progressRef}
          style={{
            width: "0%",
            height: "100%",
            backgroundColor: "#fff",
            transition: "width 0.1s linear",
          }}
        />
      </div>
    </div>
  );
};

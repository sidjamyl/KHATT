"use client";
import React, { useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

type CursorColor = "green-400" | "orange-500" | "sky-500" | "black";

const CURSOR_COLORS: Record<string, CursorColor> = {
  h1: "green-400",
  button: "orange-500",
  default: "sky-500",
};

const CustomCursor: React.FC = () => {
  // Reference for cursor elements
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const clickEffectRef = useRef<HTMLDivElement>(null);

  // State for tracking mouse position, cursor color, and click state
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState<Position>({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState<string>("sky-500");
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    // Event listener for mouse movement
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Event listener for mouse down (click)
    const handleMouseDown = (): void => {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 800);
    };

    // Event listener for mouse over (hover) on elements
    const handleMouseOver = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();

      if (tagName === "h1") {
        setCursorColor(CURSOR_COLORS.h1);
      } else if (tagName === "button" || target.closest("button")) {
        setCursorColor(CURSOR_COLORS.button);
      } else {
        setCursorColor(CURSOR_COLORS.default);
      }
    };

    // Adding event listeners to window
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Smooth follow effect with requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setCursorPosition((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;

        // Lerp (linear interpolation) for smooth following
        // 0.15 = speed of following (lower = slower, more lag)
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition]);

  return (
    <>
      {/* Outer cursor */}
      <div
        ref={cursorRef}
        style={{ top: cursorPosition.y, left: cursorPosition.x }}
        className="hidden md:block fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] rounded-full w-2 h-2 bg-black"
      />

      {/* Inner cursor with click effect */}
      <div
        ref={cursorInnerRef}
        style={{ top: cursorPosition.y, left: cursorPosition.x }}
        className={`hidden md:block fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] rounded-full w-8 h-8 border-2 border-${cursorColor}`}
      >
        <div
          ref={clickEffectRef}
          className={`w-8 h-8 ${
            clicked ? "scale-100 opacity-30" : "scale-0 opacity-0"
          } transform -translate-x-[1px] -translate-y-[1px] rounded-full bg-${cursorColor} transition-all duration-100`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
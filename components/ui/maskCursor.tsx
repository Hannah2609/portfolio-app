"use client";
import React, { useEffect, useRef, useState } from "react";

interface MaskCursorProps {
  color?: string;
  size?: number;
  easing?: number;
  exclusionMode?: boolean;
}

const MaskCursor: React.FC<MaskCursorProps> = ({
  color = "#ffffff",
  size = 13,
  easing = 0.1,
  exclusionMode = true,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const hoveringCardRef = useRef(false); // <- Ny ref
  const [hoveringCard, setHoveringCard] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    cursor.style.height = `${size}px`;
    cursor.style.width = `${size}px`;
    cursor.style.backgroundColor = color;
    if (exclusionMode) {
      cursor.style.mixBlendMode = "exclusion";
    }

    let lastTime = performance.now();

    const updateCursorPosition = (currentTime: number) => {
      const { x, y } = positionRef.current;
      const { x: targetX, y: targetY } = targetRef.current;

      const delta = (currentTime - lastTime) / 16.67; // 16.67ms ~ 60FPS
      lastTime = currentTime;

      positionRef.current.x += (targetX - x) * easing * delta;
      positionRef.current.y += (targetY - y) * easing * delta;

      if (cursor) {
        cursor.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
      }

      requestAnimationFrame(updateCursorPosition);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const currentSize = hoveringCardRef.current ? 140 : size;
      targetRef.current.x = e.clientX - currentSize / 2;
      targetRef.current.y = e.clientY - currentSize / 2;
    };

    const handleMouseEnter = () => {
      setHoveringCard(true);
      hoveringCardRef.current = true;
    };

    const handleMouseLeave = () => {
      setHoveringCard(false);
      hoveringCardRef.current = false;
    };

    // Start animation
    positionRef.current.x = window.innerWidth / 2 - size / 2;
    positionRef.current.y = window.innerHeight / 2 - size / 2;
    requestAnimationFrame(updateCursorPosition);

    // Mouse events
    window.addEventListener("mousemove", handleMouseMove);

    // Hover detection på card
    const cards = document.querySelectorAll(".card-hover-target");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [size, color, easing, exclusionMode]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform flex items-center justify-center"
      style={{
        height: hoveringCard ? 140 : size,
        width: hoveringCard ? 140 : size,
        borderRadius: "50%",
        backgroundColor: hoveringCard ? "transparent" : color,
        transition:
          "width 0.3s ease, height 0.3s ease, background-color 0.3s ease",
        mixBlendMode: exclusionMode ? "exclusion" : "normal",
      }}
    >
      {hoveringCard && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          width="140"
          height="140"
          style={{ transform: "rotate(45deg)" }}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12l4-4 4 4M12 16V8" />
        </svg>
      )}
    </div>
  );
};

export default MaskCursor;

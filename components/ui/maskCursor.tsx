"use client";
import React, { useEffect, useRef } from "react";

// TODO: remove maskcursor when mobile+tablet - from md, lg?

interface MaskCursorProps {
  color?: string;
  size?: number;
  easing?: number;
  exclusionMode?: boolean;
}

const MaskCursor: React.FC<MaskCursorProps> = ({
  color = "#ffffff",
  size = 15,
  easing = 0.12,
  exclusionMode = true,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    x: 0,
    y: 0,
  });
  const targetRef = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Apply initial styles
    cursor.style.height = `${size}px`;
    cursor.style.width = `${size}px`;
    cursor.style.backgroundColor = color;

    if (exclusionMode) {
      cursor.style.mixBlendMode = "exclusion";
    }

    const updateCursorPosition = () => {
      const { x, y } = positionRef.current;
      const { x: targetX, y: targetY } = targetRef.current;

      // Calculate position with easing
      positionRef.current.x += (targetX - x) * easing;
      positionRef.current.y += (targetY - y) * easing;

      // Update cursor position
      cursor.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;

      requestAnimationFrame(updateCursorPosition);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Update the target position
      targetRef.current.x = e.clientX - size / 2;
      targetRef.current.y = e.clientY - size / 2;
    };

    // Initialize position
    positionRef.current.x = window.innerWidth / 2 - size / 2;
    positionRef.current.y = window.innerHeight / 2 - size / 2;

    // Start animation loop
    updateCursorPosition();

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size, color, easing, exclusionMode]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white will-change-transform`}
    />
  );
};

export default MaskCursor;

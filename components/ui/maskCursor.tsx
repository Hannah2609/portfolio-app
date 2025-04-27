// "use client";
// import React, { useEffect, useRef } from "react";

// // TODO: remove maskcursor when mobile+tablet - from md, lg?

// interface MaskCursorProps {
//   color?: string;
//   size?: number;
//   easing?: number;
//   exclusionMode?: boolean;
// }

// const MaskCursor: React.FC<MaskCursorProps> = ({
//   color = "#ffffff",
//   size = 13,
//   easing = 0.10,
//   exclusionMode = true,
// }) => {
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const positionRef = useRef({
//     x: 0,
//     y: 0,
//   });
//   const targetRef = useRef({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     if (!cursor) return;

//     // Apply initial styles
//     cursor.style.height = `${size}px`;
//     cursor.style.width = `${size}px`;
//     cursor.style.backgroundColor = color;

//     if (exclusionMode) {
//       cursor.style.mixBlendMode = "exclusion";
//     }

//     const updateCursorPosition = () => {
//       const { x, y } = positionRef.current;
//       const { x: targetX, y: targetY } = targetRef.current;

//       // Calculate position with easing
//       positionRef.current.x += (targetX - x) * easing;
//       positionRef.current.y += (targetY - y) * easing;

//       // Update cursor position
//       cursor.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;

//       requestAnimationFrame(updateCursorPosition);
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       // Update the target position
//       targetRef.current.x = e.clientX - size / 2;
//       targetRef.current.y = e.clientY - size / 2;
//     };

//     // Initialize position
//     positionRef.current.x = window.innerWidth / 2 - size / 2;
//     positionRef.current.y = window.innerHeight / 2 - size / 2;

//     // Start animation loop
//     updateCursorPosition();

//     // Add event listener
//     window.addEventListener("mousemove", handleMouseMove);

//     // Cleanup
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [size, color, easing, exclusionMode]);

//   return (
//     <div
//       ref={cursorRef}
//       className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white will-change-transform`}
//     />
//   );
// };

// export default MaskCursor;


// "use client";
// import React, { useEffect, useRef, useState } from "react";

// interface MaskCursorProps {
//   color?: string;
//   size?: number;
//   hoverSize?: number;
//   easing?: number;
//   exclusionMode?: boolean;
// }

// const MaskCursor: React.FC<MaskCursorProps> = ({
//   color = "#ffffff",
//   size = 13,
//   hoverSize = 60,
//   easing = 0.8,
//   exclusionMode = true,
// }) => {
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const positionRef = useRef({ x: 0, y: 0 });
//   const targetRef = useRef({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   // Opdater styling ved hover-skift
//   useEffect(() => {
//     const cursor = cursorRef.current;
//     if (!cursor) return;

//     if (isHovering) {
//       cursor.style.height = `${hoverSize}px`;
//       cursor.style.width = `${hoverSize}px`;
//       // Fjern baggrundsfarven, så SVG'en vises uden baggrund
//       cursor.style.backgroundColor = "transparent";
//     } else {
//       cursor.style.height = `${size}px`;
//       cursor.style.width = `${size}px`;
//       cursor.style.backgroundColor = color;
//     }
//   }, [isHovering, hoverSize, size, color]);

//   // Event listeners for at sætte hover tilstand
// useEffect(() => {
//   const handleMouseEnter = () => setIsHovering(true);
//   const handleMouseLeave = () => setIsHovering(false);

//   const targets = document.querySelectorAll(".card-hover-target");
//   targets.forEach((el) => {
//     el.addEventListener("mouseenter", handleMouseEnter);
//     el.addEventListener("mouseleave", handleMouseLeave);
//   });

//   return () => {
//     targets.forEach((el) => {
//       el.removeEventListener("mouseenter", handleMouseEnter);
//       el.removeEventListener("mouseleave", handleMouseLeave);
//     });
//   };
// }, []);

//   // Hovedfunktion: Opdater cursorens position
//   useEffect(() => {
//     const cursor = cursorRef.current;
//     if (!cursor) return;

//     // Anvend basisstilarter
//     cursor.style.mixBlendMode = exclusionMode ? "exclusion" : "normal";

//     const updateCursorPosition = () => {
//       const { x, y } = positionRef.current;
//       const { x: targetX, y: targetY } = targetRef.current;

//       // Beregn ny position med easing
//       positionRef.current.x += (targetX - x) * easing;
//       positionRef.current.y += (targetY - y) * easing;

//       cursor.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
//       requestAnimationFrame(updateCursorPosition);
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       // Hvis vi er i hover-tilstand, skal vi centrere ud fra hoverSize
//       const offset = isHovering ? hoverSize / 2 : size / 2;
//       targetRef.current.x = e.clientX - offset;
//       targetRef.current.y = e.clientY - offset;
//     };

//     // Start med at sætte cursoren i midten
//     positionRef.current.x = window.innerWidth / 2 - size / 2;
//     positionRef.current.y = window.innerHeight / 2 - size / 2;
//     updateCursorPosition();
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [size, hoverSize, color, easing, exclusionMode, isHovering]);

//   return (
//     <div
//       ref={cursorRef}
//       className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full will-change-transform transition-all duration-300 ease-in-out"
//     >
//       {isHovering && (
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 100 100"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{ mixBlendMode: "inherit", display: "block" }}
//         >
//           {/* Cirklen */}
//           <circle
//             cx="50"
//             cy="50"
//             r="45"
//             stroke={color}
//             strokeWidth="5"
//             fill="transparent"
//           />
//           {/* Pilen */}
//           <path
//             d="M35 35 L65 35 L65 65"
//             stroke={color}
//             strokeWidth="5"
//             fill="transparent"
//           />
//           <path
//             d="M35 65 L65 35"
//             stroke={color}
//             strokeWidth="5"
//             fill="transparent"
//           />
//         </svg>
//       )}
//     </div>
//   );
// };

// export default MaskCursor;


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
  const [hoveringCard, setHoveringCard] = useState(false);

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
      targetRef.current.x = e.clientX - size / 2;
      targetRef.current.y = e.clientY - size / 2;
    };

    const handleMouseEnter = () => setHoveringCard(true);
    const handleMouseLeave = () => setHoveringCard(false);

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
        height: hoveringCard ? 200 : size,
        width: hoveringCard ? 200 : size,
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
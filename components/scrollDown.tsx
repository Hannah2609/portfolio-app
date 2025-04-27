import Link from 'next/link'
import React from 'react'

function ScrollDown() {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
    <Link href="#projects" aria-label="Scroll down">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="60"
        viewBox="0 0 40 70"
        fill="none"
        className="text-black dark:text-white"
        >
        <rect
            x="5"
            y="5"
            width="30"
            height="60"
            rx="15"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
        />
        <circle cx="20" cy="15" r="3" fill="currentColor">
            <animate
            attributeName="cy"
            values="15; 50"
            dur="1.5s"
            repeatCount="indefinite"
            keyTimes="0;1"
            keySplines="0.4 0 0.2 1"
            calcMode="spline"
            />
            <animate
            attributeName="opacity"
            values="1;1;0"
            keyTimes="0;0.8;1"
            dur="1.5s"
            repeatCount="indefinite"
            />
        </circle>
        </svg>
    </Link>
    </div>
  )
}

export default ScrollDown
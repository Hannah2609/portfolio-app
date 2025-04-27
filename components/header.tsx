"use client";
import { useEffect, useState } from "react";
import { ModeToggle } from "./ui/modeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // juster denne værdi hvis nødvendigt
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[var(--bagground)]/80 dark:bg-[var(--bagground)]/40 backdrop-blur-md transition-all duration-300">
      <div
        className={`${
          scrolled ? "p-4" : "p-8"
        } flex flex-row w-full justify-between gap-16 sm:px-20`}
      >
        <div>
          <h2
            className={`${
              scrolled ? "text-xl" : "text-2xl"
            } transition-all duration-300`}
          >
            Hannah Isabel
          </h2>
          <h2
            className={`${
              scrolled ? "text-xl leading-2 -mt-2" : "text-2xl leading-0 -mt-4 "
            } transition-all duration-300`}
          >
            Grenade{" "}
            <span
              className={`${
                scrolled ? "text-4xl leading-2" : "text-7xl leading-0"
              }  dark:text-zinc-700 text-zinc-300 transition-all duration-300`}
            >
              .
            </span>
          </h2>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}

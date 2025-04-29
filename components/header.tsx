"use client";
import { useEffect, useState } from "react";
import { ModeToggle } from "./ui/modeToggle";
import Link from "next/link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[var(--bagground)]/80 dark:bg-[var(--bagground)]/40 backdrop-blur-md transition-all duration-300">
      <div
        className={`${
          scrolled ? "p-4 px-8" : "sm:p-8 p-4 px-8"
        } flex flex-row w-full justify-between gap-16 sm:px-20`}
      >
        <Link href="/" className="no-underline text-inherit">
          <div>
            <h2
              className={`${
                scrolled ? "text-xl" : "sm:text-2xl text-xl"
              } transition-all duration-300`}
            >
              Hannah Isabel
            </h2>
            <h2
              className={`${
                scrolled
                  ? "text-xl leading-2 -mt-2"
                  : "sm:text-2xl sm:leading-0 sm:-mt-4 text-xl leading-2 -mt-2"
              } transition-all duration-300`}
            >
              Grenade{" "}
              <span
                className={`${
                  scrolled
                    ? "text-4xl leading-2"
                    : "sm:text-7xl sm:leading-0 text-4xl leading-2"
                } dark:text-zinc-700 text-zinc-300 transition-all duration-300`}
              >
                .
              </span>
            </h2>
          </div>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}

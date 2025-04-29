import React from 'react'
import { BoxReveal } from './magicui/box-reveal';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import ScrollDown from './scrollDown';

function Hero() {
  return (
    <>
      <section className="sm:w-2/3 py-16 md:py-46 md:pl-20 relative mb-26 md:mb-40">
        <div className="absolute rounded-full bg-[#ffcc8e] dark:bg-[#4b6cc5] top-30 -left-10 w-1/4 h-1/3 blur-[4rem] md:blur-[6rem] dark:blur-[6rem] dark:md:blur-[10rem] pointer-events-none "></div>
        <div className="absolute rounded-full  bg-[#ffa9de] dark:bg-[#ff6ac6] top-70  left-50  w-1/4 h-1/4 blur-[4rem] md:blur-[6rem] dark:blur-[6rem] dark:md:blur-[8rem] pointer-events-none "></div>
        <div className="relative z-10">
          <BoxReveal>
            <h2 className="text-4xl md:text-6xl mb-6">Hii, im Hannah 🙋🏽‍♀️</h2>
          </BoxReveal>
          <BoxReveal>
            <h2 className="text-3xl md:text-4xl mb-14">
              Passionate frontend developer with a love for good design and cool
              code
            </h2>
          </BoxReveal>
          <BoxReveal>
            <Button variant={"hoverEffect"} asChild>
              <Link href={"/resume.pdf"} download aria-label="download resume">
                Get resume{" "}
                <Image
                  src={"/file.svg"}
                  alt="project image"
                  width={12}
                  height={12}
                />
              </Link>
            </Button>
          </BoxReveal>
        </div>
      </section>
      <ScrollDown />
    </>
  );
}

export default Hero
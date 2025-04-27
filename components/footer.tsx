"use client"

// import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
// import Image from "next/image";
import AnimatedDiv from "./animatedDiv";
import Links from "./links";
import Link from "next/link";
// import { useTheme } from "next-themes";

function Footer() {
//   const { resolvedTheme } = useTheme();
//   const [imageSrc, setImageSrc] = useState("/billede.png");

//   useEffect(() => {
//     setImageSrc(resolvedTheme === "dark" ? "/billede2.png" : "/billede.png");
//   }, [resolvedTheme]);

  return (
    <AnimatedDiv>
      <footer className="flex flex-col items-center justify-center">
        {/* <Image
          aria-hidden
          src={imageSrc}
          alt="Profile image"
          width={160}
          height={160}
        /> */}
        <h3 className="text-4xl mb-10">Get in touch</h3>
        <div className="gap-4 flex flex-row mt-6 mb-4">
          {/* <Button variant={"hoverEffect"} asChild>
            <Link href="mailto:deterhannahs@gmail.com" aria-label="Email">
              Send email
            </Link>
          </Button> */}
          <Button variant={"hoverEffect"} asChild>
            <Link href={"/resume.pdf"} download aria-label="download resume">
              Get resume
            </Link>
          </Button>
        </div>
        <Links />
        <p className="text-sm text-gray-500 mt-30 mb-10">
          © {new Date().getFullYear()} Hannah Isabel Grenade.
        </p>
      </footer>
    </AnimatedDiv>
  );
}

export default Footer;

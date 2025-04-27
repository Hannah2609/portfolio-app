"use client"
import AnimatedDiv from "./animatedDiv";
import Links from "./links";

function Footer() {
  return (
    <AnimatedDiv>
      <footer className=" relative">
        <div className="absolute rounded-full bg-[#ffcc8e] dark:bg-[#4b6cc5] top-30 -right-10 w-1/4 h-1/3 blur-[4rem] md:blur-[6rem] dark:blur-[6rem] dark:md:blur-[10rem] pointer-events-none "></div>
        <div className="absolute rounded-full  bg-[#ffa9de] dark:bg-[#ff6ac6] top-70  right-50  w-1/4 h-1/4 blur-[4rem] md:blur-[6rem] dark:blur-[6rem] dark:md:blur-[8rem] pointer-events-none "></div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h3 className="text-4xl mb-10">Get in touch</h3>
          <Links />
          <p className="text-sm text-gray-500 mt-30 mb-10">
            © {new Date().getFullYear()} Hannah Isabel Grenade.
          </p>
        </div>
      </footer>
    </AnimatedDiv>
  );
}

export default Footer;

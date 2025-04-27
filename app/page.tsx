import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { BoxReveal } from "@/components/magicui/box-reveal";
// import { TextReveal } from "@/components/magicui/text-reveal";
import Projects from "@/components/projects";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Header />
      <div className="font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2 justify-center sm:items-start p-10 pb-20 gap-16 sm:px-20">
          <section className="sm:w-2/3 py-36 md:py-46 md:pl-20 relative mb-20">
            <div className="absolute rounded-full bg-[#ffcc8e] dark:bg-[#4b6cc5] top-30 -left-10 w-1/4 h-1/3 blur-[4rem] md:blur-[6rem] dark:blur-[6rem] dark:md:blur-[10rem] pointer-events-none "></div>
            <div className="absolute rounded-full  bg-[#ffa9de] dark:bg-[#ff6ac6] top-70  left-50  w-1/4 h-1/4 blur-[4rem] md:blur-[6rem] dark:blur-[6rem] dark:md:blur-[8rem] pointer-events-none "></div>
            <div className="relative z-10">
              <BoxReveal>
                <h2 className="text-4xl md:text-6xl mb-6">Hii, im Hannah 🙋🏽‍♀️</h2>
              </BoxReveal>
              <BoxReveal>
                <h2 className="text-3xl md:text-4xl mb-14">
                  Passionate frontend developer with a love for design and cool
                  code
                </h2>
              </BoxReveal>
              <BoxReveal>
                <Button variant={"hoverEffect"} size={"lg"} asChild>
                  <Link href={"/"}> Get in touch </Link>
                </Button>
              </BoxReveal>
            </div>
          </section>
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  );
}

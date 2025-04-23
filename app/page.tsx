import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { TextReveal } from "@/components/magicui/text-reveal";
import Projects from "@/components/projects";


export default function Home() {
  return (
    <>
      <Header />
      <div className="font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2 justify-center sm:items-start p-8 pb-20 gap-16 sm:px-20">
          <section className="sm:w-2/3">
            <TextReveal className="text-6xl">
              Hii 🙋🏽‍♀️ Passionate frontend developer with a love for design and
              cool code
            </TextReveal>
          </section>
          <Projects />
        </main>
       <Footer />
      </div>
    </>
  );
}

import Footer from "@/components/footer";
import { Header } from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";


export default function Home() {
  return (
    <>
      <Header />
      <div className="font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2 justify-center sm:items-start p-10 pb-20 gap-16 sm:px-20">
          <Hero />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  );
}

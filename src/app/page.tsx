import Hero from "@/components/hero/Hero";
import Skills from "@/components/projects/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Hero />
      <Skills />
    </section>
  );
}

import Hero from "@/components/hero";
import AboutSection from "@/components/sections/aboutSection";
import ServiceSection from "@/components/sections/servicesSection";

export default function Home() {
  return (
    <div className="pt-5 flex flex-col gap-10 md:gap-32 lg:gap-64">
      <Hero />
      <ServiceSection />
      <AboutSection />
      <section id="contact">
        <h2>Contact Us</h2>
        {/* Add contact form or information here */}
      </section>
      <footer>{/* Add footer content here */}</footer>
    </div>
  );
}

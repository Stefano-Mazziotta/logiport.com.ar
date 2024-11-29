import Hero from "@/components/hero";
import ServiceSection from "@/sections/servicesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <section id="about">
        <h2>About Us</h2>
        {/* Add content about your company here */}
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        {/* Add contact form or information here */}
      </section>
      <footer>{/* Add footer content here */}</footer>
    </>
  );
}

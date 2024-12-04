import Hero from "@/components/hero";
import AboutSection from "@/components/sections/aboutSection";
import ContactSection from "@/components/sections/contactSection";
import ServiceSection from "@/components/sections/servicesSection";

export default function Home() {
  return (
    <div className="pt-5 flex flex-col gap-10 md:gap-32 lg:gap-64">
      <Hero />
      <ServiceSection />
      <AboutSection />
      <ContactSection />
      <footer>{/* Add footer content here */}</footer>
    </div>
  );
}

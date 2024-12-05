import Footer from "@/components/footer";
import Hero from "@/components/hero";
import AboutSection from "@/components/sections/aboutSection";
import ContactSection from "@/components/sections/contactSection";
import ServiceSection from "@/components/sections/servicesSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 pt-5 md:gap-12 lg:gap-24">
      <Hero />
      <ServiceSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

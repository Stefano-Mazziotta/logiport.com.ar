import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="services">
        <h2>Our Services</h2>
        {/* Add content about your services here */}
      </section>
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

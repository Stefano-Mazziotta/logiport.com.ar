import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import ContactForm from "../ui/contactForm";
import { Separator } from "../ui/separator";

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Background Image Section */}
      <section className="relative h-96">
        <Image
          src="/images/consultaria_maritima.jpg" // Change to the desired image
          alt="Barco en el puerto"
          layout="fill"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground opacity-70"></div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="justify-centerpx-4 relative flex flex-col items-center bg-secondary pt-3 text-foreground"
      >
        <div className="flex w-full flex-col rounded-t-md p-4 md:w-[80%] lg:w-[40%]">
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center text-3xl font-extrabold md:text-4xl lg:text-7xl">
              <ChevronRight size={24} className="text-primary" />
              Contáctanos
            </h2>
            <p className="text-muted-foreground">
              Completá el formulario y nos pondremos en contacto contigo pronto.
            </p>
            <Separator className="bg-muted-foreground" />
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactSection;

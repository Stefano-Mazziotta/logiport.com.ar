"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
  };

  return (
    <>
      {/* Background Image Section */}
      <section className="relative h-96">
        <Image
          src="/images/consultaria_maritima.jpg" // Change to the desired image
          alt="Barco en el puerto"
          layout="fill"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground opacity-90"></div>
      </section>

      {/* Contact Form Section */}
      <section className="relative flex items-center justify-center px-4 text-secondary">
        <div className="container relative flex flex-col justify-center gap-8 rounded-md bg-foreground p-8 shadow-lg md:w-1/2">
          <h2 className="flex items-center text-2xl font-extrabold md:text-4xl lg:text-6xl">
            <ChevronRight size={36} className="text-primary" />
            Contáctanos
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre completo o Empresa"
                className="bg-secondary text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@ejemplo.com"
                className="bg-secondary text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Me gustaría consultar sobre..."
                className="bg-secondary text-foreground"
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-secondary text-foreground hover:bg-primary hover:text-secondary"
            >
              Enviar
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactSection;

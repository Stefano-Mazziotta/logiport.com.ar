"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    <section className="relative flex items-center justify-center bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 relative h-[300px]">
          <Image
            src="/images/Quienes-somos-img.jpg" // Change to the desired image
            alt="Barco en el puerto"
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text and Form */}
        <div className="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contáctanos</h2>
          <p className="mb-6">
            Estamos aquí para responder tus preguntas y brindarte más
            información. Completa el formulario a continuación para ponerte en
            contacto con nosotros.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="bg-gray-700 text-white"
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
                placeholder="Tu correo electrónico"
                className="bg-gray-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tu mensaje"
                className="bg-gray-700 text-white"
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

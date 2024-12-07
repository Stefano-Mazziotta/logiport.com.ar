"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
  phone: string;
  consultationReason: string;
}

const consultationReasons = [
  {
    label: "Consultoría Marítima",
    value: "consultoria_maritima",
  },
  {
    label: "Consultoría Portuaria",
    value: "consultoria_portuaria",
  },
  {
    label: "Consultoría de Seguridad",
    value: "consultoria_seguridad",
  },
  {
    label: "Consultoría de Logística",
    value: "consultoria_logistica",
  },
  {
    label: "Consultoría de Protección",
    value: "consultoria_proteccion",
  },

  {
    label: "Capacitación",
    value: "consultoria_capacitacion",
  },
];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    phone: "",
    consultationReason: "",
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
    <div className="flex flex-col">
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
      <section className="relative flex flex-col items-center justify-center bg-secondary px-4 pt-3 text-secondary">
        <div className="flex w-full flex-col gap-16 rounded-t-md bg-foreground p-8 shadow-lg md:w-[80%] lg:w-[60%]">
          <h2 className="flex items-center text-3xl font-extrabold md:text-4xl lg:text-7xl">
            <ChevronRight size={36} className="text-primary" />
            Contáctanos
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <Label htmlFor="consultation-reason">Razón de consulta</Label>
              <Select>
                <SelectTrigger className="bg-secondary text-muted-foreground">
                  <SelectValue placeholder="Seleccionar razón de consulta" />
                </SelectTrigger>
                <SelectContent>
                  {consultationReasons.map((reason) => (
                    <SelectItem key={reason.value} value={reason.value}>
                      {reason.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Número de celular</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Por ejemplo, +54 341 1234567"
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
              className="hover: w-full bg-primary text-secondary hover:bg-blue-500"
            >
              Enviar
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;

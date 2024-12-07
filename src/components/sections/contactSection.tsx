"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Anchor, Mail, MessageCircle, Phone, User } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

interface FormData {
  name: string;
  email: string;
  message: string;
  phone: string;
  consultationReason: string;
}

const consultationReasons = [
  { label: "Consultoría Marítima", value: "consultoria_maritima" },
  { label: "Consultoría Portuaria", value: "consultoria_portuaria" },
  { label: "Consultoría de Seguridad", value: "consultoria_seguridad" },
  { label: "Consultoría de Logística", value: "consultoria_logistica" },
  { label: "Consultoría de Protección", value: "consultoria_proteccion" },
  { label: "Capacitación", value: "consultoria_capacitacion" },
  { label: "Otro", value: "consultoria_otro" },
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, ingrese un correo electrónico válido.",
  }),
  phone: z.string().min(10, {
    message: "Por favor, ingrese un número de teléfono válido.",
  }),
  consultationReason: z.string({
    required_error: "Por favor seleccione una razón de consulta.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      consultationReason: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
    toast({
      title: "Formulario enviado con éxito",
      description: "Nos pondremos en contacto contigo pronto.",
    });
  }

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
        <div className="flex w-full flex-col gap-8 rounded-t-md bg-foreground p-8 shadow-lg md:w-[80%] lg:w-[60%]">
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center text-3xl font-extrabold md:text-4xl lg:text-7xl">
              {/* <ChevronRight size={36} className="text-primary" /> */}
              Contáctanos
            </h2>
            <p className="text-sm text-muted-foreground">
              Estamos aquí para ayudarte con todas tus necesidades de gestión
              portuaria. Completa el formulario y nos pondremos en contacto
              contigo pronto.
            </p>
          </div>
          {isSubmitted ? (
            <div className="mt-8 rounded-lg bg-green-100 p-6 text-green-700">
              <h3 className="text-lg font-medium">
                ¡Gracias por contactarnos!
              </h3>
              <p className="mt-2">
                Hemos recibido tu mensaje y nos pondremos en contacto contigo
                pronto.
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-8 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Nombre</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300" />
                          <Input
                            placeholder="Nombre completo o Empresa"
                            className="pl-10"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Correo electrónico
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300" />
                          <Input
                            placeholder="ejemplo@ejemplo.com"
                            className="pl-10"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Número de celular
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300" />
                          <Input
                            placeholder="+54 341 1234567"
                            className="pl-10"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="consultationReason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Razón de consulta
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <div className="relative">
                            <Anchor className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300" />
                            <SelectTrigger className="pl-10">
                              <SelectValue placeholder="Seleccionar razón de consulta" />
                            </SelectTrigger>
                          </div>
                        </FormControl>
                        <SelectContent>
                          {consultationReasons.map((reason) => (
                            <SelectItem key={reason.value} value={reason.value}>
                              {reason.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Mensaje</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-gray-300" />
                          <Textarea
                            placeholder="Me gustaría consultar sobre..."
                            className="min-h-[100px] pl-10"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600"
                >
                  Enviar
                </Button>
              </form>
            </Form>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactSection;

"use client";

import { contactFormSchema } from "@/types/contactFormSchema";
import { useRef, useState } from "react";
import * as z from "zod";

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

import { useForm } from "react-hook-form";

import {
  AlertCircle,
  Anchor,
  Mail,
  MessageCircle,
  Phone,
  User,
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

/**
 *
 * https://medium.com/@jedpatterson/adding-cloudflare-turnstile-to-a-next-js-app-78121bf4d7e3
 * https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 * https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/
 * cloudflare turnstile
 */
const consultationReasons = [
  { label: "Consultoría Marítima", value: "consultoria_maritima" },
  { label: "Consultoría Portuaria", value: "consultoria_portuaria" },
  { label: "Consultoría de Seguridad", value: "consultoria_seguridad" },
  { label: "Consultoría de Logística", value: "consultoria_logistica" },
  { label: "Consultoría de Protección", value: "consultoria_proteccion" },
  { label: "Capacitación", value: "consultoria_capacitacion" },
  { label: "Otro", value: "consultoria_otro" },
];

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  //   const router = useRouter();
  const turnstileRef = useRef<string>();
  const formRef = useRef<HTMLFormElement>(null);
  const [turnstileStatus, setTurnstileStatus] = useState<
    "success" | "error" | "expired" | "required"
  >("required");

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      consultationReason: "",
      message: "",
      cfTurnstileResponse: "",
    },
  });

  const onSubmit = async (formData: z.infer<typeof contactFormSchema>) => {
    setError(null);
    setIsLoading(true);

    if (!formRef.current) {
      setIsLoading(false);
      return;
    }

    if (turnstileStatus !== "success") {
      console.log("turnstileStatus is not success");
      setError("Please verify you are not a robot");
      setIsLoading(false);
      return;
    }

    const contactFormData = new FormData(formRef.current);
    const token = contactFormData.get("cf-turnstile-response");

    formData.cfTurnstileResponse = token ? (token as string) : "";

    try {
      const response = await fetch("/api/contactNotification", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok || response.status !== 200) {
        throw new Error("Failed to send contact notification");
      }

      setIsSubmitted(true);
      toast({
        title: "Formulario enviado con éxito",
        description: "Nos pondremos en contacto contigo pronto.",
      });
    } catch (err) {
      setError("Ocurrió un problema. Por favor intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return isSubmitted ? (
    <div className="mt-8 rounded-lg bg-green-100 p-6 text-green-700">
      <h3 className="text-lg font-medium">¡Gracias por contactarnos!</h3>
      <p className="mt-2">
        Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.
      </p>
    </div>
  ) : (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        ref={formRef}
        className="mt-8 space-y-6"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Nombre</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
                    <Input
                      placeholder="Nombre completo o Empresa"
                      className="border-foreground pl-10"
                      autoComplete="off"
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
                <FormLabel className="text-base">Correo electrónico</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
                    <Input
                      placeholder="ejemplo@ejemplo.com"
                      className="border-foreground pl-10"
                      autoComplete="off"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Número de celular</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
                    <Input
                      placeholder="+54 341 1234567"
                      className="border-foreground pl-10"
                      autoComplete="off"
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
                <FormLabel className="text-base">Razón de consulta</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <div className="relative">
                      <Anchor className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
                      <SelectTrigger className="border-foreground pl-10">
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
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Mensaje</FormLabel>
              <FormControl>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-primary" />
                  <Textarea
                    placeholder="Me gustaría consultar sobre..."
                    className="min-h-[100px] border-foreground pl-10"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div
          className="cf-turnstile flex justify-center"
          data-sitekey="0x4AAAAAAA1tKJ17_9Tybxx9"
          data-callback="javascriptCallback"
          data-theme="dark"
          data-language="es"
        ></div>
        {error && (
          <div
            className="mb-2 flex items-center gap-2 text-sm text-red-500"
            aria-live="polite"
          >
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}
        <Button type="submit" className="w-full bg-foreground hover:bg-primary">
          Enviar
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;

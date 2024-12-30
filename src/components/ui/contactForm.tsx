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

import { CONSULTATION_REASONS } from "@/placeholder-data";
import { APIResponse } from "@/types/api";
import {
  AlertCircle,
  Anchor,
  LoaderCircle,
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

enum TurnstileStatus {
  Success = "success",
  Error = "error",
  Expired = "expired",
  Required = "required",
}

async function validateTurnstile(token: string) {
  const response = await fetch("/api/turnstile/validate", {
    method: "POST",
    body: JSON.stringify({ token }),
  });

  if (!response.ok || response.status !== 200) {
    return false;
  }

  const data = (await response.json()) as APIResponse;

  return data.success;
}

async function sendNotification(formData: z.infer<typeof contactFormSchema>) {
  const response = await fetch("/api/notification/send", {
    method: "POST",
    body: JSON.stringify(formData),
  });

  if (!response.ok || response.status !== 200) {
    return false;
  }

  const data = (await response.json()) as APIResponse;

  return data.success;
}

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  //   const router = useRouter();

  const formRef = useRef<HTMLFormElement>(null);
  const [turnstileStatus, setTurnstileStatus] = useState<TurnstileStatus>(
    TurnstileStatus.Required,
  );

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      consultationReason: "",
      message: "",
    },
  });

  const onSubmit = async (formData: z.infer<typeof contactFormSchema>) => {
    setError(null);
    setIsLoading(true);

    if (!formRef.current) {
      setIsLoading(false);
      return;
    }

    const contactFormData = new FormData(formRef.current);
    const token = contactFormData.get("cf-turnstile-response");

    if (!token) {
      setError("Por favor, debes verificar que eres humano.");
      setIsLoading(false);
      return;
    }

    try {
      // validate token
      const isTurnstileValid = await validateTurnstile(token.toString());

      if (!isTurnstileValid) {
        setError("Failed to validate turnstile");
        setIsLoading(false);
        return;
      }

      // send notification to the admin email
      const notificationResponse = await sendNotification(formData);
      console.log("notificationResponse", notificationResponse);

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
                    {CONSULTATION_REASONS.map((reason) => (
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

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">
                Confirme que es humano
              </FormLabel>
              <FormControl>
                <div
                  className="cf-turnstile"
                  // data-sitekey="0x4AAAAAAA1tKJ17_9Tybxx9"
                  data-sitekey="1x00000000000000000000AA"
                  data-callback="javascriptCallback"
                  data-theme="dark"
                  data-language="es"
                  data-size="flexible"
                  {...field}
                ></div>
              </FormControl>
            </FormItem>
          )}
        />

        {error && (
          <div
            className="mb-2 flex items-center gap-2 text-sm text-red-500"
            aria-live="polite"
          >
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}
        <Button
          type="submit"
          className="w-full bg-foreground hover:bg-primary"
          disabled={isLoading}
        >
          {isLoading ? "Enviando..." : "Enviar"}
          {isLoading && (
            <LoaderCircle className="animate-spin text-secondary" />
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;

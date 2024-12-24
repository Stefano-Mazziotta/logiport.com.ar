import * as z from "zod";

export const contactFormSchema = z.object({
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

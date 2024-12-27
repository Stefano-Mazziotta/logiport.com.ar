import { contactFormSchema } from "@/types/contactFormSchema";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as z from "zod";

export async function POST(req: NextRequest) {
  const { consultationReason, name, phone, email, message } =
    (await req.json()) as z.infer<typeof contactFormSchema>;

  // Verificar las variables de entorno
  console.log("ZOHO_EMAIL:", process.env.ZOHO_EMAIL);
  console.log("ZOHO_EMAIL_PASSWORD:", process.env.ZOHO_EMAIL_PASSWORD);
  console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);

  // send notification to the admin email
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.ZOHO_EMAIL, // your Zoho email address
      pass: process.env.ZOHO_EMAIL_PASSWORD, // your Zoho email password
    },
  });

  const mailOptions = {
    from: process.env.ZOHO_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: "New Contact Form Submission",
    text: `You have a new contact form submission from ${name} (${email}).\n\nReason: ${consultationReason}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);
    console.log("Failed to send email");
    console.log(error.message);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

import { contactFormSchema } from "@/types/contactFormSchema";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as z from "zod";

export async function POST(req: NextRequest) {
  const { consultationReason, name, phone, email, message } =
    (await req.json()) as z.infer<typeof contactFormSchema>;

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
    subject: "Logiport.com.ar - Nueva consulta!",
    html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">Logiport.com.ar - Nueva consulta!</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Celular:</strong> ${phone}</p>
          <p><strong>Razón de consulta:</strong> ${consultationReason}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd;">${message}</p>
        </div>
      `,
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

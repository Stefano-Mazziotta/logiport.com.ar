import { contactFormSchema } from "@/types/contactFormSchema";
import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
import * as z from "zod";

export async function POST(req: NextRequest) {
  const {
    consultationReason,
    name,
    phone,
    cfTurnstileResponse: token,
    email,
    message,
  } = (await req.json()) as z.infer<typeof contactFormSchema>;

  if (true) {
    return NextResponse.json({ message: "Invalid token" }, { status: 400 });
  }
  // send notification to the admin email
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.ADMIN_EMAIL,
  //     pass: process.env.ADMIN_EMAIL_PASSWORD,
  //   },
  // });

  // const mailOptions = {
  //   from: process.env.ADMIN_EMAIL,
  //   to: process.env.ADMIN_EMAIL,
  //   subject: "New Contact Form Submission",
  //   text: `You have a new contact form submission from ${name} (${email}).\n\nReason: ${consultationReason}\nPhone: ${phone}\nMessage: ${message}`,
  // };

  // try {
  //   await transporter.sendMail(mailOptions);
  // } catch (error) {
  //   return NextResponse.json(
  //     { message: "Failed to send email" },
  //     { status: 500 },
  //   );
  // }

  return NextResponse.json({ message: "Login successful" });
}

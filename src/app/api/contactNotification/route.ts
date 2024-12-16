import { contactFormSchema } from "@/types/contactFormSchema";
import { validateTurnstileToken } from "next-turnstile";
import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
import { v4 } from "uuid";
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

  const validationResponse = await validateTurnstileToken({
    token,
    secretKey: process.env.TURNSTILE_SECRET_KEY!,
    // Optional: Add an idempotency key to prevent token reuse
    idempotencyKey: v4(),
    sandbox: process.env.NODE_ENV === "development",
  });

  if (!validationResponse.success) {
    return NextResponse.json({ message: "Invalid token" }, { status: 400 });
  }

  return NextResponse.json({ message: "Login successful" });
}

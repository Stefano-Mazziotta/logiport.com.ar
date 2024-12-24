import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { token } = await request.json();
  const ip = request.headers.get("CF-Connecting-IP") || "0.0.0.0"; // Valor predeterminado
  console.log("IP Address: ", ip);
  console.log("Token: ", token);
  console.log("Secret Key: ", process.env.TURNSTILE_SECRET_KEY);

  if (!token || !process.env.TURNSTILE_SECRET_KEY) {
    return NextResponse.json({ message: "Token is required" }, { status: 400 });
  }

  let formData = new FormData();
  const idempotencyKey = crypto.randomUUID();

  formData.append("secret", process.env.TURNSTILE_SECRET_KEY);
  formData.append("response", token);
  formData.append("remoteip", ip);
  formData.append("idempotency_key", idempotencyKey);

  try {
    const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const result = await fetch(url, {
      body: formData,
      method: "POST",
    });

    const firstOutcome = await result.json();
    console.log("First Outcome: ", firstOutcome);
    if (!firstOutcome.success) {
      return NextResponse.json({ success: false, message: "Invalid token" });
    }

    // A subsequent validation request to the "/siteverify"
    // API endpoint for the same token as before, providing
    // the associated idempotency key as well.
    const subsequentResult = await fetch(url, {
      body: formData,
      method: "POST",
    });

    const subsequentOutcome = await subsequentResult.json();
    if (!subsequentOutcome.success) {
      return NextResponse.json({ success: false, message: "Invalid token" });
    }

    return NextResponse.json(
      { success: true, message: "Turnstile validated successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to validate token" },
      { status: 500 },
    );
  }
}

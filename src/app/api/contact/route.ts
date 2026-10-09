import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, inquiryType, message, honeypot } = body;

    // 1. Anti-spam honeypot screening
    if (honeypot) {
      // Silently discard bot submission
      return NextResponse.json({ success: true, message: "Inquiry received." });
    }

    // 2. Strict server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must contain at least 10 characters." },
        { status: 400 }
      );
    }

    // 3. No provider means no delivery: never acknowledge an unsent inquiry.
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL_TO || "khuntronak5@gmail.com";
    const senderEmail = process.env.CONTACT_EMAIL_FROM;

    if (!resendApiKey || !senderEmail || /@resend\.dev\b/i.test(senderEmail)) {
      return NextResponse.json(
        { success: false, error: "Message delivery is unavailable. Please email directly." },
        { status: 503 }
      );
    }

    if (resendApiKey) {
      try {
        const delivery = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: senderEmail,
            reply_to: email,
            to: recipientEmail,
            subject: `[Portfolio Inquiry] ${inquiryType || "General"} from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nOrganization: ${organization || "N/A"}\nType: ${
              inquiryType || "General"
            }\n\nMessage:\n${message}`,
          }),
        });
        if (!delivery.ok) {
          throw new Error(`Resend returned HTTP ${delivery.status}`);
        }
      } catch (err) {
        console.error("Resend delivery failed:", err);
        return NextResponse.json(
          { success: false, error: "Message delivery failed. Please email directly." },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been accepted by the email provider.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please email directly." },
      { status: 500 }
    );
  }
}

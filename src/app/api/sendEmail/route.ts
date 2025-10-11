import emailjs from "@emailjs/nodejs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { to_name, from_name, from_email, message } = await req.json();

    console.log("Sending email with:", {
      to_name,
      from_name,
      from_email,
      message,
    });

    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        to_name: to_name,
        from_name: from_name,
        from_email: from_email,
        message: message,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );

    console.log("EmailJS Success:", response);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

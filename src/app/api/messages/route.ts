import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure this route runs on the Node.js runtime (needed for nodemailer)
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    // ✅ Parse JSON body
    const body = await req.json();
    const { name, email, message, service, contactnumber } = body;

    // ✅ Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // ✅ Log received data (for debugging only – remove in prod)
    console.log("Contact form data:", { name, email, message, service, contactnumber });

    // ✅ Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // you can switch to SMTP if needed
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // ✅ Send email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER, // your inbox
      subject: `New message from ${name}`,
      text: `
        Service: ${service || "N/A"}
        Contact Number: ${contactnumber || "N/A"}
        Message: ${message}
      `,
      html: `
        <p><strong>Service:</strong> ${service || "N/A"}</p>
        <p><strong>Contact Number:</strong> ${contactnumber || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message", error: error.message },
      { status: 500 }
    );
  }
}

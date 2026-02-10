import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().min(2),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // In production: send email, save to CRM, etc.
    console.log("Contact submission:", data);

    return NextResponse.json(
      { success: true, message: "Message reçu avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json(
      { success: false, message: "Données invalides" },
      { status: 400 }
    );
  }
}

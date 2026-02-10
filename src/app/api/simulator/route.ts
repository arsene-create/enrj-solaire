import { NextResponse } from "next/server";
import { simulatorSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = simulatorSchema.parse(body);

    // In production: send email, save to CRM, etc.
    console.log("Simulator submission:", data);

    return NextResponse.json(
      { success: true, message: "Demande reçue avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Simulator error:", error);
    return NextResponse.json(
      { success: false, message: "Données invalides" },
      { status: 400 }
    );
  }
}

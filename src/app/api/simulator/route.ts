import { NextResponse } from "next/server";
import { simulatorSchema } from "@/lib/schemas";
import { sendSimulatorEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = simulatorSchema.parse(body);

    await sendSimulatorEmail(data);

    return NextResponse.json(
      { success: true, message: "Demande reçue avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Simulator error:", error);
    return NextResponse.json(
      { success: false, message: "Erreur lors de l'envoi de la demande" },
      { status: 500 }
    );
  }
}

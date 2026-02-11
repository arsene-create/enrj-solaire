import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "ENR'J Solaire <noreply@enrj.org>";
const TO_EMAIL = process.env.CONTACT_EMAIL || "contact@enr-j.com";
const BCC_EMAILS = ["arsene@ntechparis.com", "louis@enr-j.com"];

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}) {
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    bcc: BCC_EMAILS,
    replyTo: data.email,
    subject: `[Contact ENR'J] ${data.subject} - ${data.company}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #93C191; padding: 20px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">Nouvelle demande de contact</h1>
        </div>
        <div style="background: #f9f9f9; padding: 24px; border: 1px solid #eee; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px; vertical-align: top;">Nom</td>
              <td style="padding: 8px 0; font-weight: bold;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Entreprise</td>
              <td style="padding: 8px 0; font-weight: bold;">${data.company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #93C191;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Téléphone</td>
              <td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #93C191;">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Sujet</td>
              <td style="padding: 8px 0;">${data.subject}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #eee;">
            <p style="margin: 0 0 4px 0; color: #666; font-size: 13px;">Message :</p>
            <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            Envoyé depuis le formulaire de contact enr-j.com
          </p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    throw new Error(`Email send failed: ${error.message}`);
  }
}

export async function sendSimulatorEmail(data: {
  buildingType: string;
  roofArea: string;
  location: string;
  electricityBill: string;
  roofOrientation: string;
  roofCondition: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  message?: string;
}) {
  const buildingLabels: Record<string, string> = {
    agricole: "Hangar agricole",
    industriel: "Toiture industrielle",
    parking: "Ombrière de parking",
    autre: "Autre",
  };

  const orientationLabels: Record<string, string> = {
    sud: "Sud",
    "sud-est": "Sud-Est",
    "sud-ouest": "Sud-Ouest",
    est: "Est",
    ouest: "Ouest",
    "ne-sait-pas": "Ne sait pas",
  };

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    bcc: BCC_EMAILS,
    replyTo: data.email,
    subject: `[Simulateur ENR'J] ${data.companyName} - ${buildingLabels[data.buildingType] || data.buildingType} ${data.roofArea}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #93C191, #57B2F9); padding: 20px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">Nouvelle demande de devis</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 4px 0 0 0; font-size: 14px;">Via le simulateur d'éligibilité</p>
        </div>
        <div style="background: #f9f9f9; padding: 24px; border: 1px solid #eee; border-radius: 0 0 12px 12px;">

          <h2 style="font-size: 16px; color: #333; margin: 0 0 12px 0; padding-bottom: 8px; border-bottom: 2px solid #93C191;">Contact</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; color: #666; width: 140px;">Nom</td>
              <td style="padding: 6px 0; font-weight: bold;">${data.contactName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666;">Entreprise</td>
              <td style="padding: 6px 0; font-weight: bold;">${data.companyName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666;">Email</td>
              <td style="padding: 6px 0;"><a href="mailto:${data.email}" style="color: #93C191;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666;">Téléphone</td>
              <td style="padding: 6px 0;"><a href="tel:${data.phone}" style="color: #93C191; font-weight: bold;">${data.phone}</a></td>
            </tr>
          </table>

          <h2 style="font-size: 16px; color: #333; margin: 0 0 12px 0; padding-bottom: 8px; border-bottom: 2px solid #57B2F9;">Projet</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; color: #666; width: 140px;">Type de bâtiment</td>
              <td style="padding: 6px 0; font-weight: bold;">${buildingLabels[data.buildingType] || data.buildingType}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666;">Surface de toiture</td>
              <td style="padding: 6px 0; font-weight: bold;">${data.roofArea}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666;">Localisation</td>
              <td style="padding: 6px 0; font-weight: bold;">${data.location}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666;">Facture électricité</td>
              <td style="padding: 6px 0;">${data.electricityBill}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666;">Orientation toiture</td>
              <td style="padding: 6px 0;">${orientationLabels[data.roofOrientation] || data.roofOrientation}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666;">État de la toiture</td>
              <td style="padding: 6px 0;">${data.roofCondition}</td>
            </tr>
          </table>

          ${data.message ? `
          <div style="padding: 16px; background: white; border-radius: 8px; border: 1px solid #eee;">
            <p style="margin: 0 0 4px 0; color: #666; font-size: 13px;">Message :</p>
            <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>
          ` : ""}

          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            Envoyé depuis le simulateur d'éligibilité enr-j.com
          </p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    throw new Error(`Email send failed: ${error.message}`);
  }
}

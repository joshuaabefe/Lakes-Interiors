import { Resend } from "resend";
import { site, services } from "@/data/site";

export const runtime = "nodejs";

type Enquiry = {
  name?: unknown;
  email?: unknown;
  space?: unknown;
  location?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
  privacy?: unknown;
};

const clean = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") || 0) > 16_000) {
    return Response.json({ error: "The enquiry is too large." }, { status: 413 });
  }

  let input: Enquiry;
  try {
    input = await request.json();
  } catch {
    return Response.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  // Quietly accept honeypot submissions without sending email.
  if (clean(input.website, 200)) return Response.json({ ok: true });

  const name = clean(input.name, 100);
  const email = clean(input.email, 254);
  const space = clean(input.space, 100);
  const location = clean(input.location, 120);
  const service = clean(input.service, 120);
  const message = clean(input.message, 3000);
  const allowedSpaces = ["Home", "Office", "Other commercial space", "Other"];
  const allowedServices = services.map(item => item.title);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !validEmail || !allowedSpaces.includes(space) || !location || !message || input.privacy !== "on" || (service && !allowedServices.includes(service))) {
    return Response.json({ error: "Please complete the required fields with valid details." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from || !site.email) {
    return Response.json({ error: "The enquiry service is not configured yet. Please contact us by email or WhatsApp." }, { status: 503 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [site.email],
      replyTo: email,
      subject: `Website enquiry${service ? ` — ${service}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Type of space: ${space}`,
        `Project location: ${location}`,
        `Service: ${service || "Not specified"}`,
        "",
        "Project details:",
        message,
      ].join("\n"),
    });

    if (error) {
      return Response.json({ error: "We couldn’t send your enquiry just now. Please try again or contact us directly." }, { status: 502 });
    }
  } catch {
    return Response.json({ error: "We couldn’t send your enquiry just now. Please try again or contact us directly." }, { status: 502 });
  }

  return Response.json({ ok: true });
}

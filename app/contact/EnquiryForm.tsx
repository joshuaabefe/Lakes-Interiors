"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { services, site, waLink } from "@/data/site";

export default function EnquiryForm({ selectedService = "" }: { selectedService?: string }) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!site.email) {
      setStatus("Email enquiries are not set up yet. Please use the Instagram contact link while email enquiries are being set up.");
      return;
    }
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const space = String(form.get("space") || "").trim();
    const location = String(form.get("location") || "").trim();
    const service = String(form.get("service") || "").trim();
    const message = String(form.get("message") || "").trim();
    const subject = encodeURIComponent(`Project enquiry${service ? ` — ${service}` : ""}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nType of space: ${space}\nProject location: ${location}\nService: ${service || "Not specified"}\n\nProject details:\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with your enquiry. Please send the prepared message there. If it does not open, contact us on Instagram.");
  }

  function whatsappHref(form: HTMLFormElement | null) {
    const d = form ? new FormData(form) : new FormData();
    const g = (k: string) => String(d.get(k) || "").trim();
    const lines = [g("name") && `Name: ${g("name")}`, g("space") && `Type of space: ${g("space")}`, g("location") && `Project location: ${g("location")}`, g("service") && `Service: ${g("service")}`, g("message") && `Details: ${g("message")}`].filter(Boolean);
    return waLink(["Hello Lakes Interiors, I'd like to enquire about a project.", ...lines].join("\n"));
  }
  const field = "mt-2 w-full border border-ivory/35 bg-charcoal/25 px-3 py-3 text-sm text-ivory placeholder:text-ivory/55 focus-visible:outline";
  const label = "block text-sm text-ivory/90";

  if (!site.email) {
    return (
      <div className="contact-form mt-8 rounded-sm border border-ivory/20 bg-charcoal/20 p-5 sm:p-6">
        <h3 className="font-serif text-2xl">Enquiries by Instagram</h3>
        <p className="mt-3 max-w-lg text-sm leading-6 text-ivory/80">We have not set up an enquiry email yet, so this website cannot securely send your details. Please message us on Instagram with your name, project location, type of space, and what you have in mind.</p>
        <a className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 border border-ivory bg-ivory px-5 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-stone" href={site.instagram} target="_blank" rel="noopener noreferrer">Message Lakes Interiors on Instagram <ArrowRight size={15} aria-hidden="true" /></a>
        <p className="mt-3 text-xs leading-5 text-ivory/85">Avoid sending sensitive personal or financial information.</p>
      </div>
    );
  }

  return (
    <form className="contact-form mt-8 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
      <div>
        <label className={label} htmlFor="enquiry-name">Your name <span aria-hidden="true">*</span></label>
        <input className={field} id="enquiry-name" name="name" autoComplete="name" required maxLength={100} />
      </div>
      <div>
        <label className={label} htmlFor="enquiry-email">Email address <span aria-hidden="true">*</span></label>
        <input className={field} id="enquiry-email" name="email" type="email" autoComplete="email" required maxLength={254} />
      </div>
      <div>
        <label className={label} htmlFor="enquiry-space">Type of space <span aria-hidden="true">*</span></label>
        <select className={field} id="enquiry-space" name="space" defaultValue="" required>
          <option className="bg-olive text-ivory" value="" disabled>Select a space</option>
          <option className="bg-olive text-ivory">Home</option><option className="bg-olive text-ivory">Office</option><option className="bg-olive text-ivory">Other commercial space</option><option className="bg-olive text-ivory">Other</option>
        </select>
      </div>
      <div>
        <label className={label} htmlFor="enquiry-location">Project location <span aria-hidden="true">*</span></label>
        <input className={field} id="enquiry-location" name="location" autoComplete="address-level2" required maxLength={120} />
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="enquiry-service">Service (optional)</label>
        <select className={field} id="enquiry-service" name="service" defaultValue={selectedService}>
          <option className="bg-olive text-ivory" value="">Not sure yet</option>
          {services.map(service => <option className="bg-olive text-ivory" key={service.slug} value={service.title}>{service.title}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="enquiry-message">A few details about your project <span aria-hidden="true">*</span></label>
        <textarea className={field} id="enquiry-message" name="message" rows={5} required maxLength={3000} placeholder="What would you like help with?" />
      </div>
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-sm leading-6 text-ivory/85">
          <input className="mt-1 size-4 accent-[#cbb77f]" type="checkbox" name="privacy" required />
          <span>I agree that Lakes Interiors may use these details to respond to my enquiry. See the <a className="underline underline-offset-4" href="/privacy">Privacy policy</a>. <span aria-hidden="true">*</span></span>
        </label>
      </div>
      <div className="sm:col-span-2">
        <button className="inline-flex items-center justify-center gap-2 border border-ivory bg-ivory px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-stone" type="submit">Prepare email enquiry <ArrowRight size={15} aria-hidden="true" /></button>
        {waLink() && <button type="button" className="ml-0 mt-3 inline-flex items-center justify-center gap-2 border border-ivory/60 px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-ivory/10 sm:ml-3 sm:mt-0" onClick={e => { const form = e.currentTarget.closest("form"); window.open(whatsappHref(form), "_blank", "noopener,noreferrer"); }}>Send on WhatsApp instead</button>}
        <p className="mt-3 max-w-xl text-xs leading-5 text-ivory/80">This form prepares an email on your device; it does not send or store your details on this website. Please don’t include sensitive personal or financial information.</p>
        <p className="sr-only" aria-live="polite">{status}</p>
      </div>
    </form>
  );
}

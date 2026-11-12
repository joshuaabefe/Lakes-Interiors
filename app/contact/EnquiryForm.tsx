"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/site";

export default function EnquiryForm({ selectedService = "" }: { selectedService?: string }) {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    setStatus("");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We couldn’t send your enquiry. Please try again.");
      form.reset();
      setStatus("Thank you. Your enquiry has been sent to Lakes Interiors.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "We couldn’t send your enquiry. Please try again or contact us directly.");
    } finally {
      setSending(false);
    }
  }
  const field = "contact-field mt-2 w-full border border-ivory/25 bg-[#34362f] px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/50 focus-visible:outline";
  const label = "contact-label block text-xs font-medium text-ivory/85";

  return (
    <form className="contact-form mt-8 grid gap-x-5 gap-y-6 sm:grid-cols-2" onSubmit={handleSubmit}>
      <div className="contact-form-field">
        <label className={label} htmlFor="enquiry-name">Your name <span aria-hidden="true">*</span></label>
        <input className={field} id="enquiry-name" name="name" autoComplete="name" required maxLength={100} />
      </div>
      <div className="contact-form-field">
        <label className={label} htmlFor="enquiry-email">Email address <span aria-hidden="true">*</span></label>
        <input className={field} id="enquiry-email" name="email" type="email" autoComplete="email" required maxLength={254} />
      </div>
      <div className="contact-form-field">
        <label className={label} htmlFor="enquiry-space">Type of space <span aria-hidden="true">*</span></label>
        <select className={field} id="enquiry-space" name="space" defaultValue="" required>
          <option className="bg-olive text-ivory" value="" disabled>Select a space</option>
          <option className="bg-olive text-ivory">Home</option><option className="bg-olive text-ivory">Office</option><option className="bg-olive text-ivory">Other commercial space</option><option className="bg-olive text-ivory">Other</option>
        </select>
      </div>
      <div className="contact-form-field">
        <label className={label} htmlFor="enquiry-location">Project location <span aria-hidden="true">*</span></label>
        <input className={field} id="enquiry-location" name="location" autoComplete="address-level2" required maxLength={120} />
      </div>
      <div className="contact-form-field sm:col-span-2">
        <label className={label} htmlFor="enquiry-service">Service (optional)</label>
        <select className={field} id="enquiry-service" name="service" defaultValue={selectedService}>
          <option className="bg-olive text-ivory" value="">Not sure yet</option>
          {services.map(service => <option className="bg-olive text-ivory" key={service.slug} value={service.title}>{service.title}</option>)}
        </select>
      </div>
      <div className="contact-form-trap" aria-hidden="true"><label htmlFor="enquiry-website">Leave this field empty</label><input id="enquiry-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <div className="contact-form-field sm:col-span-2">
        <label className={label} htmlFor="enquiry-message">A few details about your project <span aria-hidden="true">*</span></label>
        <textarea className={field} id="enquiry-message" name="message" rows={5} required maxLength={3000} placeholder="What would you like help with?" />
      </div>
      <div className="contact-form-consent sm:col-span-2">
        <label className="flex items-start gap-3 text-sm leading-6 text-ivory/85">
          <input className="mt-1 size-4 accent-[#cbb77f]" type="checkbox" name="privacy" required />
          <span>I agree that Lakes Interiors may use these details to respond to my enquiry. See the <a className="underline underline-offset-4" href="/privacy">Privacy policy</a>. <span aria-hidden="true">*</span></span>
        </label>
      </div>
      <div className="contact-form-actions sm:col-span-2">
        <button className="contact-primary-action inline-flex min-h-12 items-center justify-center gap-2 border border-ivory bg-ivory px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-stone disabled:cursor-wait disabled:opacity-70" type="submit" disabled={sending}>{sending ? "Sending enquiry…" : "Send enquiry"} <ArrowRight size={15} aria-hidden="true" /></button>
        <p className="mt-3 max-w-xl text-xs leading-5 text-ivory/80">Your details will be emailed to Lakes Interiors so we can respond. Please don’t include sensitive personal or financial information.</p>
        <p className="mt-3 text-sm leading-6 text-ivory" role="status" aria-live="polite">{status}</p>
      </div>
    </form>
  );
}

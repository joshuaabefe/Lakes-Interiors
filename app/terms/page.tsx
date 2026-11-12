import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Terms and Conditions", description: "Terms for using the Lakes Interiors website." };

export default function Terms() {
  return (
    <PolicyPage title="Terms and conditions">
      <section>
        <h2>About these terms</h2>
        <p>This website is provided by Lakes Interiors, based in Maryland, Lagos, Nigeria. By browsing the site, you agree to use it lawfully and respect the rights of Lakes Interiors and third-party content owners.</p>
        <p>The site provides general information about interior design, finishing, and furnishing services. It does not take bookings, accept payments, or form a client agreement online.</p>
      </section>
      <section>
        <h2>Project enquiries and service agreements</h2>
        <p>A website description or message exchange is not a final quote or confirmation of a project. Before paid work begins, Lakes Interiors and the client should agree in writing on the project scope, deliverables, price, payment schedule, timing, cancellation terms, and any project-specific conditions.</p>
        <p>These website terms do not replace that project agreement or limit consumer rights that apply under Nigerian law.</p>
      </section>
      <section>
        <h2>Website content and images</h2>
        <p>Website text, layout, and branding are owned by Lakes Interiors or used with permission, except where another owner is identified. Interior photographs are sourced from Unsplash and used under the <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer">Unsplash License</a>. That license permits broad commercial use, but it does not grant rights to any separate trademarks, artwork, or identifiable people that may appear in a photograph. Any such additional rights must be checked where relevant.</p>
        <p>Photographs on this site are visual examples and do not by themselves represent work completed by Lakes Interiors. Do not treat images as proof of a specific project, supplier, product, or result.</p>
      </section>
      <section>
        <h2>External services</h2>
        <p>The site links to Instagram and other external services. Those services are operated independently and have their own terms, privacy practices, and availability. A link does not mean Lakes Interiors endorses every part of an external service.</p>
      </section>
      <section>
        <h2>Accuracy and legal rights</h2>
        <p>We aim to keep the website information useful and current. Service availability, project requirements, and final terms are confirmed directly with each client. Nothing in these terms removes rights or remedies that cannot legally be excluded, including rights under the Federal Competition and Consumer Protection Act.</p>
      </section>
      <section>
        <h2>Applicable law and contact</h2>
        <p>These website terms are governed by the laws of Nigeria, subject to any mandatory consumer protections that apply to you. For questions about these terms, contact Lakes Interiors through its <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram profile</a>.</p>
      </section>
    </PolicyPage>
  );
}

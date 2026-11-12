import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Lakes Interiors handles information when you use this website or contact the studio." };

export default function PrivacyPolicy() {
  return (
    <PolicyPage title="Privacy policy">
      <section>
        <h2>Who is responsible</h2>
        <p>This website is operated under the public business name Lakes Interiors, based in Maryland, Lagos, Nigeria. For privacy questions or requests, {site.privacyEmail || site.email ? <>email <a href={`mailto:${site.privacyEmail || site.email}`}>{site.privacyEmail || site.email}</a></> : <>contact the studio through its <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram profile</a></>}. The website does not currently publish a separate privacy email or the operator&apos;s full registered legal name and postal address.</p>
      </section>
      <section>
        <h2>Information handled when you visit</h2>
        <p>This website has no account system, checkout, analytics, or advertising pixels. The contact form prepares an email in your device&apos;s email app or opens WhatsApp with selected enquiry details pre-filled. The website does not store these form details on its servers. If you choose the WhatsApp option, the details are passed to WhatsApp to create the draft; the chat is sent only if you choose to send it there. Your email app or WhatsApp handles the message you choose to send.</p>
        <p>Like other websites, the hosting and delivery systems may receive technical request data such as your IP address, browser and device information, pages requested, referring page, and request time. These details are used to deliver and protect the site. The hosting provider is not identified in this project&apos;s configuration, so its exact log retention period and processing locations must be confirmed with the selected host.</p>
      </section>
      <section>
        <h2>If you contact the studio</h2>
        <p>The enquiry form asks for your name, email address, type of space, project location, service interest, and a short project description. If you choose “Prepare email enquiry,” these details are placed in a draft email and are not sent unless you send it from your email app. If you choose “Send on WhatsApp instead,” your name, space type, location, service interest, and project details are passed to WhatsApp to pre-fill a message; review it and send it there if you want to contact the studio that way. If you contact the studio on Instagram instead, your message may include your Instagram handle and any details or images you choose to share. Lakes Interiors uses information you send to respond and, if requested, take steps toward a service agreement.</p>
        <p>The message is handled through Instagram, which is operated by Meta. Meta processes information under its own <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer">Instagram Privacy Policy</a>. The Instagram link is not an embedded feed or tracking pixel; Instagram is contacted when you choose to follow the link. Avoid sending sensitive personal or financial information in a social media message.</p>
      </section>
      <section>
        <h2>Images and service providers</h2>
        <p>Interior photographs are requested from Unsplash through Next.js image optimization. The browser requests images from this website; the hosting service may request the image files from Unsplash. No marketing or behavioural tracking is attached to those image requests by this website.</p>
        <p>Hosting, Instagram, and image delivery providers may process technical information in countries outside Nigeria. Their own terms and privacy notices apply to the services they provide. Confirm the deployed hosting provider and its safeguards before launch.</p>
      </section>
      <section>
        <h2>Legal grounds and retention</h2>
        <p>Technical processing is limited to operating and securing the site. If you make an enquiry, information you choose to send is used to respond and take steps you request before a possible contract. Information may also be retained where needed to meet legal obligations or establish, exercise, or defend legal claims.</p>
        <p>If an enquiry does not result in a project, Lakes Interiors intends to remove its enquiry records within six months after the enquiry is closed, unless a legal claim or other legal obligation requires longer retention. If you become a client, relevant records are kept for the project and any applicable legal record-keeping period. Instagram may separately retain copies under its own policies. The host&apos;s technical-log retention period depends on the host and deployment settings.</p>
      </section>
      <section>
        <h2>Your data rights</h2>
        <p>Under applicable Nigerian data-protection law, you may request information about processing, access or a copy of your information, correction, deletion, restriction, or object to processing. Where processing relies on consent, you may withdraw it. You may also have rights to data portability and to complain to the Nigeria Data Protection Commission.</p>
        <p>To make a request, message Lakes Interiors through the <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram profile</a> and ask for the privacy contact. Please do not post a rights request publicly. You can also contact the <a href="https://ndpc.gov.ng/" target="_blank" rel="noopener noreferrer">Nigeria Data Protection Commission</a>.</p>
      </section>
      <section>
        <h2>Cookies, children, and changes</h2>
        <p>The current website code does not include analytics, advertising pixels, embedded social feeds, or browser-storage tracking, and does not intentionally set non-essential cookies. Necessary technical cookies or server logs may be used by the hosting or security provider, depending on the deployment configuration; confirm this with the selected host before launch. If non-essential tracking is added, this policy should be updated and consent obtained before it loads.</p>
        <p>The site is intended for people seeking interior services and is not designed to collect children&apos;s personal information.</p>
        <p>This policy may be updated if the site&apos;s features, providers, or data practices change. The date at the top of this page shows when it was last reviewed.</p>
      </section>
    </PolicyPage>
  );
}

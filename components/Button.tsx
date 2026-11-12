import Link from "next/link";
import { ReactNode } from "react";
const v = {
  primary: "bg-charcoal text-ivory hover:bg-olive border border-charcoal",
  outline: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory",
  darkOutline: "border border-ivory text-ivory hover:bg-ivory hover:text-charcoal",
  light: "bg-ivory text-charcoal hover:bg-stone border border-ivory",
};
export default function Button({ href, children, variant = "primary", external = false }:
  { href: string; children: ReactNode; variant?: keyof typeof v; external?: boolean }) {
  const cls = `inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 ${v[variant]}`;
  return external
    ? <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
    : <Link href={href} className={cls}>{children}</Link>;
}

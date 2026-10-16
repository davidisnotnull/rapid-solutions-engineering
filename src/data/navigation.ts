export interface NavItem {
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href?: string;
}

export const serviceName = "Rapid Solutions Engineering";
export const serviceTagline = "Low code solutions for council services";

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/our-work", label: "Our work" },
  { href: "/about", label: "About us" },
  { href: "/support", label: "Get support" },
];

/**
 * Cookies stays visible text without an href.
 * Checked 16 Oct 2026: accessibility, privacy, and contact pages return 200.
 * https://www.hackney.gov.uk/cookies, /cookies/, /cookie-policy, and
 * /more-us/cookies return 404. Do not invent a cookies URL.
 */
export const footerLinks: FooterLink[] = [
  {
    label: "Accessibility",
    href: "https://www.hackney.gov.uk/more-us/accessibility-statement-hackney-council",
  },
  {
    label: "Privacy",
    href: "https://www.hackney.gov.uk/more-us/privacy-statement",
  },
  { label: "Cookies" },
  {
    label: "Contact us",
    href: "https://www.hackney.gov.uk/more-us/contact-us",
  },
];

export const councilHomeHref = "https://www.hackney.gov.uk/";

export function isCurrentPath(pathname: string, href: string): boolean {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  return path === href;
}

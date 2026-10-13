export const siteConfig = {
  siteName: "UAE Driving Licence Guide",
  domain: "https://uaedrivinglicense.com",
  targetEmirate: "Dubai",
  whatsAppNumber: "971565592944",
  whatsAppDisplay: "+971 56 559 2944",
  contactEmail: "info@uaedrivinglicense.com",
  defaultPhone: "+971 56 559 2944",
  operatorName: "www.UaeDrivingLicense.com",
  operatorDescription:
    "This website is an independent information website created for general guidance on UAE driving licence information. It is not an official UAE government service or a licensed driving school unless formal business arrangements are confirmed.",
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/971565592944",
  },
  officialLinks: [
    { label: "Dubai RTA", href: "https://www.rta.ae/" },
    { label: "UAE Government Portal", href: "https://u.ae/" },
    { label: "UAE Legislation", href: "https://uaelegislation.gov.ae/" },
    { label: "Google Search Central", href: "https://developers.google.com/search/docs" },
  ],
  disclosures: {
    operator: "Independent information website",
    relationship:
      "No formal partnership with any driving institute, authority, or government entity has been confirmed. All information should be verified with the current official guidance before making a decision.",
  },
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
    enableAnalytics: Boolean(process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true"),
  },
} as const;

export const navItems = [
  { href: "/open-driving-file-dubai/", label: "Open a file" },
  { href: "/driving-license-requirements-uae/", label: "Requirements" },
  { href: "/dubai-driving-license-cost/", label: "Costs" },
  { href: "/driving-license-faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

export function buildWhatsAppLink(topic: string, extra?: string) {
  const baseMessage = `Hi, I found ${siteConfig.domain} and would like information about ${topic}.`;
  const message = extra ? `${baseMessage} ${extra}` : baseMessage;
  return `https://wa.me/${siteConfig.whatsAppNumber}?text=${encodeURIComponent(message)}`;
}

export function getPageTitle(title: string) {
  return `${title} | ${siteConfig.siteName}`;
}

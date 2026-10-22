export type Firm = {
  name: string;
  /** File under /public/logos — drop in PNG/SVG/WebP with this name */
  logo: string;
  featured?: boolean;
};

/**
 * Alumni placement firms.
 * Put logo files in /public/logos using the `logo` filename.
 * Missing files fall back to a typeset wordmark in the same cell.
 */
export const alumniFirms: Firm[] = [
  { name: "Goldman Sachs", logo: "goldman-sachs.png", featured: true },
  { name: "Morgan Stanley", logo: "morgan-stanley.png", featured: true },
  { name: "J.P. Morgan", logo: "jp-morgan.png", featured: true },
  { name: "Evercore", logo: "evercore.png", featured: true },
  { name: "Moelis & Company", logo: "moelis.png", featured: true },
  { name: "Bank of America", logo: "bank-of-america.png", featured: true },
  { name: "BMO", logo: "bmo.png", featured: true },
  { name: "CIBC", logo: "cibc.png", featured: true },
  { name: "RBC", logo: "rbc.png", featured: true },
  { name: "TD", logo: "td.png", featured: true },
  { name: "Scotiabank", logo: "scotiabank.png", featured: true },
  { name: "CPP Investments", logo: "cpp-investments.png", featured: true },
  { name: "Ontario Teachers'", logo: "otpp.png", featured: true },
  { name: "PSP Investments", logo: "psp.png", featured: true },
  { name: "Brookfield", logo: "brookfield.png", featured: true },
  { name: "Macquarie", logo: "macquarie.png", featured: true },
  { name: "Qatalyst Partners", logo: "qatalyst.png", featured: true },
  { name: "Boston Consulting Group", logo: "bcg.png", featured: true },
  { name: "Oliver Wyman", logo: "oliver-wyman.png" },
  { name: "Deloitte", logo: "deloitte.png" },
  { name: "EY", logo: "ey.png" },
  { name: "KPMG", logo: "kpmg.png" },
  { name: "PwC", logo: "pwc.png" },
  { name: "Deutsche Bank", logo: "deutsche-bank.png" },
  { name: "Greenhill", logo: "greenhill.png" },
  { name: "Gluskin Sheff", logo: "gluskin-sheff.png" },
  { name: "Jarislowsky Fraser", logo: "jarislowsky-fraser.png" },
  { name: "Polar Asset Management", logo: "polar.png" },
  { name: "Canaccord Genuity", logo: "canaccord.png" },
  { name: "Capital One", logo: "capital-one.png" },
  { name: "SIG", logo: "sig.png" },
  { name: "Manulife", logo: "manulife.png" },
  { name: "Sun Life", logo: "sun-life.png" },
  { name: "Shopify", logo: "shopify.png" },
  { name: "Loblaw", logo: "loblaw.png" },
  { name: "PepsiCo", logo: "pepsico.png" },
  { name: "Revolut", logo: "revolut.png" },
  { name: "Union Square Advisors", logo: "union-square.png" },
  { name: "Veritas", logo: "veritas.png" },
  { name: "Wave", logo: "wave.png" },
  { name: "FairVentures", logo: "fairventures.png" },
];

export const featuredFirms = alumniFirms.filter((firm) => firm.featured);

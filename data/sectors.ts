export type Holding = {
  ticker: string;
  name: string;
  region: "Canada" | "United States";
};

export type Sector = {
  id: string;
  name: string;
  short: string;
  description: string;
  image: string;
  weight: string;
  holdings: Holding[];
};

/**
 * Sector coverage and placeholder holdings.
 * Replace tickers, names, and weights with the live book when ready.
 * Tile photos go in /public/sectors as <id>.jpg; a navy block shows until then.
 */
export const sectors: Sector[] = [
  {
    id: "tmt",
    name: "Technology, Media & Telecom",
    short: "TMT",
    description:
      "Software, semiconductors, internet platforms, and communications infrastructure across North America.",
    image: "/sectors/tmt.jpg",
    weight: "18%",
    holdings: [
      { ticker: "SHOP", name: "Shopify", region: "Canada" },
      { ticker: "MSFT", name: "Microsoft", region: "United States" },
      { ticker: "GOOGL", name: "Alphabet", region: "United States" },
    ],
  },
  {
    id: "financials",
    name: "Financial Institutions",
    short: "Financials",
    description:
      "Banks, asset managers, exchanges, and diversified financials with durable franchises.",
    image: "/sectors/financials.jpg",
    weight: "16%",
    holdings: [
      { ticker: "RY", name: "Royal Bank of Canada", region: "Canada" },
      { ticker: "JPM", name: "JPMorgan Chase", region: "United States" },
      { ticker: "BN", name: "Brookfield", region: "Canada" },
    ],
  },
  {
    id: "consumer",
    name: "Consumer",
    short: "Consumer",
    description:
      "Retail, branded goods, and consumer services with pricing power and repeat demand.",
    image: "/sectors/consumer.jpg",
    weight: "14%",
    holdings: [
      { ticker: "COST", name: "Costco", region: "United States" },
      { ticker: "L", name: "Loblaw", region: "Canada" },
      { ticker: "MCD", name: "McDonald's", region: "United States" },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    short: "Healthcare",
    description:
      "Managed care, medical devices, and life sciences with long-duration cash flows.",
    image: "/sectors/healthcare.jpg",
    weight: "12%",
    holdings: [
      { ticker: "UNH", name: "UnitedHealth", region: "United States" },
      { ticker: "ISRG", name: "Intuitive Surgical", region: "United States" },
      { ticker: "TMO", name: "Thermo Fisher", region: "United States" },
    ],
  },
  {
    id: "industrials",
    name: "Industrials",
    short: "Industrials",
    description:
      "Compounding industrials, logistics, and equipment names tied to North American capex.",
    image: "/sectors/industrials.jpg",
    weight: "14%",
    holdings: [
      { ticker: "CNR", name: "Canadian National Railway", region: "Canada" },
      { ticker: "CAT", name: "Caterpillar", region: "United States" },
      { ticker: "WM", name: "Waste Management", region: "United States" },
    ],
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    short: "Energy",
    description:
      "Energy producers, midstream, and regulated utilities with attractive free-cash-flow profiles.",
    image: "/sectors/energy.jpg",
    weight: "13%",
    holdings: [
      { ticker: "ENB", name: "Enbridge", region: "Canada" },
      { ticker: "SU", name: "Suncor", region: "Canada" },
      { ticker: "NEE", name: "NextEra Energy", region: "United States" },
    ],
  },
  {
    id: "materials",
    name: "Metals, Mining & Materials",
    short: "Materials",
    description:
      "Quality miners and materials businesses with disciplined capital allocation.",
    image: "/sectors/materials.jpg",
    weight: "13%",
    holdings: [
      { ticker: "AEM", name: "Agnico Eagle", region: "Canada" },
      { ticker: "FCX", name: "Freeport-McMoRan", region: "United States" },
      { ticker: "NTR", name: "Nutrien", region: "Canada" },
    ],
  },
];

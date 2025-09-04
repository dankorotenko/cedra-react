export type ProjectCategory =
  | "Analytics"
  | "Bridges"
  | "DeFi"
  | "Education"
  | "Explorers"
  | "Gaming"
  | "Infra"
  | "Launchpad"
  | "Marketplaces"
  | "NFT"
  | "NFT Tooling"
  | "On/Off Ramps"
  | "Oracles"
  | "Payments"
  | "RPC"
  | "RWA"
  | "Security"
  | "Social"
  | "Stablecoins"
  | "Tooling"
  | "Wallets";

export type Project = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  categories: ProjectCategory[];
  website?: string;
  socials?: {
    discord?: string;
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    telegram?: string;
  };
};

export const ALL_CATEGORIES: ProjectCategory[] = [
  "Analytics",
  "Bridges",
  "DeFi",
  "Education",
  "Explorers",
  "Gaming",
  "Infra",
  "Launchpad",
  "Marketplaces",
  "NFT",
  "NFT Tooling",
  "On/Off Ramps",
  "Oracles",
  "Payments",
  "RPC",
  "RWA",
  "Security",
  "Social",
  "Stablecoins",
  "Tooling",
  "Wallets",
];

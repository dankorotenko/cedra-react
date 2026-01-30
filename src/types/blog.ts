export const BLOG_CATEGORIES = [
  "Blockchain",
  "DeFi",
  "NFTs",
  "Crypto Trends",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const ALL_BLOG_CATEGORIES: readonly string[] = [
  "All",
  ...BLOG_CATEGORIES,
];

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  category: BlogCategory;
  dateISO: string;
  readTimeMinutes: number;
  excerpt: string;
  coverImage?: string;
  contentMarkdown: string;
};

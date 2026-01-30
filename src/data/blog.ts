import type { BlogPost } from "../types/blog";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "cedra-vision-scalable-future-on-blockchain",
    title: "The Cedra Vision: Building a Scalable Future on Blockchain",
    category: "Blockchain",
    dateISO: "2026-01-01",
    readTimeMinutes: 4,
    excerpt:
      "Cedra introduces a modular blockchain architecture designed for high throughput, low fees, and secure on-chain execution tailored for next-generation Web3 applications.",
    coverImage: "/images/header.png",
    contentMarkdown: `## Why modular matters

Cedra is built around a **modular architecture** that separates execution, consensus, and data availability. This makes it easier to scale each layer independently while keeping strong security guarantees.

## What it unlocks for builders

By focusing on **predictable fees** and **fast finality**, Cedra targets real-world use cases where UX matters:

- Consumer apps that need responsiveness
- Games that need throughput and low latency
- DeFi systems that need reliable execution under load

> The goal is simple: ship products users love, without compromising decentralization.

In this post we cover the guiding principles behind Cedra’s design choices and what they unlock for builders.`,
  },
  {
    id: "2",
    slug: "how-cedra-makes-defi-faster-and-cheaper",
    title: "How Cedra Makes DeFi Faster and Cheaper",
    category: "DeFi",
    dateISO: "2026-01-02",
    readTimeMinutes: 5,
    excerpt:
      "Discover how Cedra’s optimized consensus and fee model reduce DeFi transaction costs while improving confirmation times for traders, liquidity providers, and protocol builders.",
    coverImage: "/images/header.png",
    contentMarkdown: `DeFi needs fast confirmations and stable fees to support advanced trading and complex multi-step transactions. Cedra is designed to keep fees **low and consistent** during demand spikes.

Cedra’s performance targets allow protocols to offer more interactive experiences, including improved market making and tighter feedback loops for users.

We’ll walk through the core design elements that reduce latency and cost, and how to best leverage them in your protocol.`,
  },
  {
    id: "3",
    slug: "nfts-on-cedra-beyond-digital-collectibles",
    title: "NFTs on Cedra: Beyond Digital Collectibles",
    category: "NFTs",
    dateISO: "2026-01-03",
    readTimeMinutes: 4,
    excerpt:
      "Learn how Cedra enables programmable NFTs with richer metadata, on-chain royalties, and cross-app utility for gaming, art, and real-world asset tokenization.",
    coverImage: "/images/header.png",
    contentMarkdown: `Modern NFTs are more than pictures: they’re programmable assets that can carry state, permissions, and application-specific behaviors.

Cedra’s execution environment supports composable NFT primitives and better UX around minting, trading, and ownership changes.

This post explores patterns you can use to create NFTs that are useful across ecosystems rather than locked into a single app.`,
  },
  {
    id: "4",
    slug: "2026-crypto-trends-why-modular-chains-win",
    title: "2026 Crypto Trends: Why Modular Chains Win",
    category: "Crypto Trends",
    dateISO: "2026-01-04",
    readTimeMinutes: 6,
    excerpt:
      "A look at emerging crypto trends in 2026 and why modular, high-performance chains like Cedra are positioned to power the next big wave of Web3 adoption.",
    coverImage: "/images/header.png",
    contentMarkdown: `As apps become more demanding, chains need better specialization. Modular design lets networks evolve without forcing every component to scale in lockstep.

We’re seeing increasing demand for predictable UX: fast confirmations, stable fees, and developer tooling that supports rapid iteration.

Here’s what we think matters most in 2026, and where Cedra fits in the market landscape.`,
  },
  {
    id: "5",
    slug: "secure-smart-contracts-on-cedra-best-practices",
    title: "Secure Smart Contracts on Cedra: Best Practices for Builders",
    category: "Blockchain",
    dateISO: "2026-01-05",
    readTimeMinutes: 7,
    excerpt:
      "A practical guide to writing secure smart contracts on Cedra, covering code audits, testing strategies, permission design, and how the protocol helps prevent common exploits.",
    coverImage: "/images/header.png",
    contentMarkdown: `Security is a process: threat modeling, careful permissioning, and rigorous testing matter as much as the language itself.

We’ll cover recommended patterns for access control, state validation, and upgrade strategies, along with common pitfalls to avoid.

Use this as a checklist before shipping any contract that will custody user funds or critical application state.`,
  },
  {
    id: "6",
    slug: "cedra-defi-primitives-amms-lending-and-beyond",
    title: "Cedra DeFi Primitives: AMMs, Lending, and Beyond",
    category: "DeFi",
    dateISO: "2026-01-06",
    readTimeMinutes: 4,
    excerpt:
      "Overview of core DeFi building blocks on Cedra, including AMMs, lending markets, and yield protocols designed for composability and capital efficiency.",
    coverImage: "/images/header.png",
    contentMarkdown: `DeFi primitives are Lego bricks: the better they compose, the faster the ecosystem can innovate.

Cedra’s low-latency execution enables protocols to coordinate more complex interactions without forcing users to wait across long confirmation windows.

We’ll outline what primitives are most important to bootstrap a healthy DeFi ecosystem and how builders can contribute.`,
  },
  {
    id: "7",
    slug: "gaming-nfts-on-cedra-instant-mints-fair-drops",
    title: "Gaming NFTs on Cedra: Instant Mints, Fair Drops",
    category: "NFTs",
    dateISO: "2026-01-07",
    readTimeMinutes: 5,
    excerpt:
      "Explore how Cedra’s low latency and low fees enable fair NFT drops, in-game assets, and seamless trading experiences for Web3 gaming ecosystems.",
    coverImage: "/images/header.png",
    contentMarkdown: `Gaming needs throughput and predictability. If minting is expensive or slow, players churn.

Cedra enables instant mints and smoother in-game marketplaces, unlocking better onboarding and retention.

We’ll cover mechanics for fair drops, anti-bot patterns, and UX tips for integrating NFTs into gameplay loops.`,
  },
  {
    id: "8",
    slug: "on-chain-data-off-chain-speed-cedras-hybrid-trend",
    title: "On-Chain Data, Off-Chain Speed: Cedra’s Hybrid Trend",
    category: "Crypto Trends",
    dateISO: "2026-01-08",
    readTimeMinutes: 6,
    excerpt:
      "Cedra follows the hybrid blockchain trend, combining on-chain security with off-chain data layers to deliver responsive apps without sacrificing decentralization.",
    coverImage: "/images/header.png",
    contentMarkdown: `Many apps need rich data and real-time UX. Pushing every byte on-chain is often unnecessary and expensive.

Hybrid architectures keep critical state and verification on-chain while using complementary off-chain systems for speed and scale.

We’ll discuss practical approaches that keep trust assumptions clear while still delivering great product experiences.`,
  },
];

import oilsCover from "@/components/images/oils.webp";
import spikyCover from "@/components/images/spiky.webp";
import oilsShop from "@/components/images/oils-shop.webp";
import oilsCart from "@/components/images/oils-cart.webp";
import spikyDashboard from "@/components/images/spiky-dashboard.webp";
import spikyClient from "@/components/images/spiky-client.webp";

export const projects = [
  {
    slug: "spiky",
    name: "Spiky",
    category: "COACHING PLATFORM",
    number: "01",
    line: "One connected coaching experience.",
    summary: "An Arabic-first platform bringing the coach’s workflow and the client’s daily training and nutrition into one connected experience.",
    cover: spikyCover,
    coverAlt: "Spiky Arabic coaching website",
    live: "https://spiky-coaching.vercel.app/",
    stack: ["HTML", "CSS", "JavaScript", "Supabase", "Vercel"],
    scope: "Coach dashboard · Client experience · Public website",
    contribution: "Project lead — requirements coordination, visual direction from the coach’s reference, and functionality review.",
    context: "Training and nutrition are ongoing conversations. A coach needs to prepare and adjust plans; a client needs a clear place to follow them. Spiky brings those two sides together through a public website, a coach workspace, and a dedicated client experience.",
    challenge: "When plans, exercise references, and updates are spread across separate documents, keeping the client’s routine aligned with the coach’s changes becomes harder. The challenge was to connect content preparation with everyday use, while making Arabic feel native throughout the interface.",
    solution: "A shared workflow: reusable food and exercise libraries support the coach’s planning, while a dedicated client link presents the assigned training, nutrition, and notes. The experience also includes hydration tracking and downloadable plan books.",
    decisions: [
      { title: "Arabic from the first interaction", text: "Right-to-left layouts and Arabic typography carry through the public website, coaching workspace, and client screens. The reading direction is part of the structure." },
      { title: "Keep the daily plan close", text: "The client experience groups training and nutrition around daily use, with exercise references, rest timing, meal alternatives, and coach notes available within the same workflow." },
      { title: "Build on reusable content", text: "Food and exercise libraries give the coach a starting point for individual plans. Customization creates private copies of shared content, preserving the original library." },
    ],
    gallery: [
      { image: spikyDashboard, alt: "Spiky coach dashboard with private details redacted", label: "01 / THE COACH’S WORKSPACE", title: "A single place to manage the routine.", text: "The dashboard connects coaching content and client management. Private information is redacted in this project image." },
      { image: spikyClient, alt: "Spiky Arabic client exercise screen", label: "02 / THE CLIENT’S EXPERIENCE", title: "From a plan to a daily companion.", text: "A mobile-oriented training view keeps exercise information and the current routine close to the person using it." },
    ],
    outcome: "The project brings coaching administration, personalized plans, client access, and PDF guides into a connected product. Its strength is the continuity between preparation and use: the coach works in one environment, and the client has a dedicated place to follow along.",
    takeaway: "A useful interface connects both sides of a workflow. For Spiky, that meant paying attention to the coach’s preparation as well as the client’s everyday routine.",
  },
  {
    slug: "al-araby-oils",
    name: "AL-Araby Oils",
    category: "E-COMMERCE INTERFACE",
    number: "02",
    line: "A calmer way to discover natural products.",
    summary: "A responsive storefront exploring how clear product presentation, familiar navigation, and a considered cart experience can shape natural-product shopping.",
    cover: oilsCover,
    coverAlt: "AL-Araby Oils natural products storefront",
    live: "https://mohammed-004del.github.io/AL-Araby-Oils-E-commerce-Website/",
    source: "https://github.com/Mohammed-004del/AL-Araby-Oils-E-commerce-Website",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router"],
    scope: "Storefront UI · Product browsing · Cart interactions",
    contribution: "Frontend development — component-based storefront, responsive layouts, and shopping interactions.",
    context: "AL-Araby Oils is a natural-product shopping interface spanning oils, herbs, skincare, and haircare. The frontend work focuses on the journey from discovering the range to examining products and reviewing a selection in the cart.",
    challenge: "The interface challenge is one of clarity: a mixed natural-product catalogue needs to feel approachable, while product information and shopping actions remain easy to find. This study looks at the design problem through the implemented shopping journey.",
    solution: "A storefront with a clear visual hierarchy, category navigation, consistent product cards, dedicated detail screens, and an interactive cart. Warm imagery and restrained green accents connect the interface to the natural-product theme, while familiar controls keep the shopping journey recognizable.",
    decisions: [
      { title: "Give discovery a clear starting point", text: "The landing page introduces the product world, then leads into featured selections and category entry points. Product imagery and concise labels keep the range easy to scan." },
      { title: "Make product cards work consistently", text: "A repeatable card structure groups product name, category, price, and the add-to-cart action. The same visual language carries from featured selections into the catalogue." },
      { title: "Make selection visible", text: "Quantity selection, confirmation feedback, and the cart count make a shopping action visible. The cart then brings the chosen items and order summary into one review screen." },
    ],
    gallery: [
      { image: oilsShop, alt: "AL-Araby Oils product catalogue showing category controls and product cards", label: "01 / PRODUCT DISCOVERY", title: "A catalogue with a consistent rhythm.", text: "Aligned product cards create a scannable layout. Category labels, price hierarchy, and repeated actions establish a familiar visual pattern." },
      { image: oilsCart, alt: "AL-Araby Oils cart interface with a selected natural oil product", label: "02 / THE CART EXPERIENCE", title: "Keep the selection in view.", text: "A focused cart layout gives the selected products, quantities, and summary their own space within the shopping journey." },
    ],
    outcome: "The frontend brings the storefront, catalogue, product detail, and cart screens into a cohesive visual experience. It demonstrates responsive interface work, reusable React components, typed data structures, and interactive state across the shopping journey.",
    takeaway: "The details between screens matter as much as the screens themselves. Consistent cards, clear feedback, and a recognizable cart pattern help the shopping experience feel connected.",
  },
];
export type Project = (typeof projects)[number];

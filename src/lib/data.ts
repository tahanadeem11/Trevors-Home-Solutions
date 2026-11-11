export const BUSINESS = {
  name: "Trevor's Home Solutions",
  phone: "(737) 278-0860",
  phoneHref: "tel:+17372780860",
  emails: ["trev00792@icloud.com", "2wheelz1207@gmail.com"],
  address: "3448 3rd Ave, Bartow, FL 33830",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=3448+3rd+Ave+Bartow+FL+33830",
  years: 12,
  radius: 80,
};

export type Service = {
  key: string;
  title: string;
  blurb: string;
  image?: string;
  alt?: string;
};

export const septicServices: Service[] = [
  {
    key: "pump",
    title: "Septic System Pumping",
    blurb:
      "Remove built-up sludge and scum before it backs up into your home. Routine pumping is the cheapest insurance your system has.",
    image: "/images/pumping.webp",
    alt: "Technician in blue coveralls pumping a septic tank with a vacuum hose",
  },
  {
    key: "clean",
    title: "Septic System Cleaning",
    blurb:
      "A thorough tank clean-out that restores capacity and keeps the whole system flowing the way it should.",
    image: "/images/cleaning.jpg",
    alt: "Large suction hose lowered into an open septic tank",
  },
  {
    key: "inspect",
    title: "Septic System Inspection",
    blurb:
      "We check your tank, lids, baffles and drain field so small issues are caught long before they become expensive ones.",
    image: "/images/inspection.jpeg",
    alt: "Technician opening a septic tank lid for inspection",
  },
  {
    key: "repair",
    title: "Septic System Repair",
    blurb:
      "Cracked lids, failing baffles, slow drains, soggy spots in the yard. We find the cause and fix it properly.",
    image: "/images/repair.webp",
    alt: "Technician working at an excavated septic tank access",
  },
];

export const plumbingServices: Service[] = [
  {
    key: "jet",
    title: "Hydro-Jetting",
    blurb:
      "High-pressure water scours grease, roots and scale out of your pipes for a truly clear line.",
  },
  {
    key: "pinspect",
    title: "Plumbing Inspection",
    blurb:
      "Spot leaks, clogs and weak points early with a careful inspection of your lines.",
  },
  {
    key: "install",
    title: "Installation & Replacement",
    blurb:
      "New fixtures, lines and full replacements installed cleanly and built to last.",
  },
  {
    key: "prepair",
    title: "Plumbing Repair",
    blurb:
      "Leaks, clogs and breakdowns diagnosed and repaired quickly, any hour of the day.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Call us, day or night",
    text: "Reach a real person at any hour. Tell us what is happening and we will tell you what to do next.",
  },
  {
    n: "02",
    title: "We assess on site",
    text: "We come to you anywhere within 80 miles of Bartow, look at the problem and explain it in plain language.",
  },
  {
    n: "03",
    title: "Clear plan, proper fix",
    text: "You get a straightforward plan, then the work is done right the first time with the right equipment.",
  },
  {
    n: "04",
    title: "Clean-up and advice",
    text: "We leave the site tidy and share simple tips to keep your system healthy for the long run.",
  },
];

export const faqs = [
  {
    q: "How often should a septic tank be pumped?",
    a: "As a general rule most household tanks need pumping every three to five years, depending on tank size and how many people live in the home. After an inspection we will recommend a schedule that fits your system.",
  },
  {
    q: "What is hydro-jetting and when do I need it?",
    a: "Hydro-jetting uses high-pressure water to scrub the inside of your pipes, clearing grease, roots and buildup that a standard snake can leave behind. It is ideal for recurring clogs and slow drains.",
  },
  {
    q: "Do you really work 24/7?",
    a: "Yes. Septic backups and plumbing leaks do not wait for business hours, so neither do we. Call (737) 278-0860 any time.",
  },
  {
    q: "What area do you cover?",
    a: "We are based in Bartow, Florida and serve the surrounding area up to 80 miles out, including Lakeland, Winter Haven, Plant City, Tampa, Orlando, Sebring and more.",
  },
  {
    q: "How do I get a quote?",
    a: "Call us or send the quick form below with a few details about your situation. We will get back to you as soon as possible.",
  },
];

export const serviceNames = [
  "Septic Pumping",
  "Hydro-Jetting",
  "Septic Cleaning",
  "Plumbing Repair",
  "Septic Inspection",
  "Plumbing Installation",
  "Septic Repair",
  "Plumbing Inspection",
];

export const cities = [
  { name: "Lakeland", lat: 28.0395, lon: -81.9498 },
  { name: "Winter Haven", lat: 28.0222, lon: -81.7329 },
  { name: "Lake Wales", lat: 27.9014, lon: -81.5859 },
  { name: "Plant City", lat: 28.0186, lon: -82.1129 },
  { name: "Tampa", lat: 27.9506, lon: -82.4572 },
  { name: "Orlando", lat: 28.5384, lon: -81.3789 },
  { name: "Sebring", lat: 27.4956, lon: -81.4409 },
  { name: "Wauchula", lat: 27.5472, lon: -81.8112 },
  { name: "Sarasota", lat: 27.3364, lon: -82.5307 },
  { name: "Kissimmee", lat: 28.2920, lon: -81.4076 },
];
export const HOME = { lat: 27.8964, lon: -81.8431 };

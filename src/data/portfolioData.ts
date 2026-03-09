export type BrandSlug = "lenscape" | "hover" | "nexscape" | "growthscape";

export type BrandItem = {
  slug: BrandSlug;
  name: string;
  category: string;
  description: string;
  services: string[];
  shortLogo: string;
  longLogo?: string;
  route: string;
  instagram?: string;
  youtube?: string;
  reels: {
    title: string;
    link: string;
    description: string;
  }[];
  portfolio: {
    title: string;
    description: string;
  }[];
};

export type NavLinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const navLinks: NavLinkItem[] = [
  { label: "Home", href: "/#landingDiv" },
  { label: "Featured", href: "/#featured-projects" },
  { label: "Brands", href: "/#brands" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/client-reels" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "https://medium.com/@ahashmendis", external: true },
];

export const brands: BrandItem[] = [
  {
    slug: "lenscape",
    name: "Lenscape Studios",
    category: "Video Production Studio",
    description:
      "Lenscape Studios is a cinematic video production brand focused on storytelling-driven visuals including weddings, events, brand films, and cinematic productions.",
    services: [
      "Wedding cinematography",
      "Event video production",
      "Brand content",
      "Music video production",
      "Cinematic storytelling",
    ],
    shortLogo: "/brands/lenscape/short.png",
    longLogo: "/brands/lenscape/long.png",
    route: "/brands/lenscape",
    instagram: "https://www.instagram.com/lenscapestudios.sl/",
    youtube: "https://www.youtube.com/@LenscapeStudiosSL",
    reels: [
      {
        title: "Wedding Story Film",
        link: "https://www.instagram.com/p/DIMdsvezKj3/",
        description: "Cinematic wedding edit focused on emotional storytelling and documentary pacing.",
      },
      {
        title: "Brand Film Cut",
        link: "https://www.instagram.com/p/DS2ixIdki51/",
        description: "Story-led brand content with cinematic grading and rhythm-based editing.",
      },
    ],
    portfolio: [
      {
        title: "Wedding Cinematography",
        description: "Cinematic storytelling-driven wedding visuals.",
      },
      {
        title: "Event Video Production",
        description: "Event productions captured and delivered with cinematic quality.",
      },
      {
        title: "Brand and Music Visuals",
        description: "Brand content and music video productions built for strong visual impact.",
      },
    ],
  },
  {
    slug: "hover",
    name: "Hover by Ahash",
    category: "Drone Videography",
    description:
      "Hover by Ahash provides professional aerial cinematography services capturing landscapes, real estate properties, events, and cinematic drone visuals.",
    services: [
      "Aerial cinematography",
      "Real estate drone filming",
      "Event drone coverage",
      "Landscape aerial visuals",
    ],
    shortLogo: "/brands/hover/short.png",
    route: "/brands/hover",
    instagram: "https://www.instagram.com/hoverbyahash/",
    reels: [
      {
        title: "Drone Cinematography Reel",
        link: "https://www.instagram.com/p/DS2ixIdki51/",
        description: "Signature drone showreel featuring cinematic aerial scenes and transitions.",
      },
    ],
    portfolio: [
      {
        title: "Aerial Cinematography",
        description: "Professional aerial cinematography visuals for cinematic productions.",
      },
      {
        title: "Real Estate Drone Filming",
        description: "Drone filming focused on real estate properties and location showcases.",
      },
      {
        title: "Landscape and Event Visuals",
        description: "Landscape aerial visuals and event drone coverage.",
      },
    ],
  },
  {
    slug: "nexscape",
    name: "Nexscape",
    category: "Technology Startup",
    description:
      "Nexscape is a modern technology startup focused on building innovative digital solutions. The company specializes in web development, software development, and scalable digital platforms, helping businesses transform ideas into powerful technology products and future-ready systems.",
    services: [
      "Web development",
      "Software development",
      "Startup MVP development",
      "Scalable digital platforms",
      "Automation and digital tools",
    ],
    shortLogo: "/brands/nexscape/short.png",
    longLogo: "/brands/nexscape/long.png",
    route: "/brands/nexscape",
    reels: [],
    portfolio: [
      {
        title: "Web Platform Engineering",
        description: "Modern web development projects focused on speed, reliability, and user experience.",
      },
      {
        title: "Software Product Development",
        description: "End-to-end software development for practical business and startup use cases.",
      },
      {
        title: "Scalable Digital Systems",
        description: "Future-ready platform architecture built for growth, scale, and automation.",
      },
    ],
  },
  {
    slug: "growthscape",
    name: "Growthscape",
    category: "Digital Marketing & Social Media Growth Agency",
    description:
      "Growthscape is a digital marketing and social media growth agency dedicated to helping brands expand their online presence. Through content strategy, social media management, and targeted digital campaigns, the agency helps businesses reach wider audiences and turn attention into measurable growth.",
    services: [
      "Social media management",
      "Content strategy",
      "Brand growth campaigns",
      "Audience engagement strategy",
      "Digital marketing campaigns",
    ],
    shortLogo: "/brands/growthscape/short.png",
    longLogo: "/brands/growthscape/long.png",
    route: "/brands/growthscape",
    reels: [
      {
        title: "Growth Content Reel",
        link: "https://www.instagram.com/p/DTX-9PJj44-/",
        description: "Brand growth content reel showcasing social-first campaign visuals and engagement-driven edits.",
      },
    ],
    portfolio: [
      {
        title: "Social Growth Campaigns",
        description: "Brand growth campaigns focused on audience expansion and measurable engagement.",
      },
      {
        title: "Content Strategy Systems",
        description: "Strategic content planning built to improve platform consistency and performance.",
      },
      {
        title: "Digital Marketing Execution",
        description: "Targeted digital campaigns designed to turn attention into business outcomes.",
      },
    ],
  },
];

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Digital Campaigns", value: "250+" },
  { label: "Projects Delivered", value: "1000+" },
  { label: "Digital Brands Built", value: "4" },
  { label: "Clients", value: "9+" },
] as const;

export const skillCategories = [
  {
    title: "Web Development",
    items: ["Next.js", "React", "Tailwind", "TypeScript"],
  },
  {
    title: "Software Development",
    items: ["Software Architecture", "Automation", "Digital Tools"],
  },
  {
    title: "Video Production",
    items: ["Cinematic Storytelling", "Event Video Production", "Brand Films"],
  },
  {
    title: "Drone Cinematography",
    items: ["Aerial Cinematography", "Real Estate Drone Filming", "Landscape Visuals"],
  },
  {
    title: "Social Media Management",
    items: ["Digital Brand Building", "Content Production", "Platform Strategy"],
  },
] as const;

export const recentProjects = [
  {
    title: "Lenscape Studios Showreel",
    tag: "Brand",
    link: "https://www.instagram.com/p/DIMdsvezKj3/",
    description: "Cinematic storytelling reel from Lenscape Studios.",
  },
  {
    title: "Hover Drone Showreel",
    tag: "Brand",
    link: "https://www.instagram.com/p/DS2ixIdki51/",
    description: "Aerial cinematography visual reel by Hover by Ahash.",
  },
  {
    title: "Client Project Highlights",
    tag: "Client",
    link: "https://www.instagram.com/p/DTX-9PJj44-/",
    description: "Client campaign highlights with social-first execution.",
  },
] as const;

export const featuredProjects = [
  {
    title: "AI Portfolio Platform",
    description: "A cinematic personal platform combining creative storytelling with high-performance web UX.",
  },
  {
    title: "Startup Brand Ecosystem Platform",
    description: "A multi-brand startup-style ecosystem website connecting products, media, and services.",
  },
  {
    title: "Cinematic Drone Visuals",
    description: "Aerial visual system for premium brand reels, event cinematography, and destination stories.",
  },
  {
    title: "Content Creation Systems",
    description: "Integrated content operations for social growth, campaign planning, and publishing consistency.",
  },
] as const;

export const clients = [
  {
    name: "Hydrant Food Hall",
    mark: "HF",
    service: "Restaurant, AU",
    logo: "/clients/hydrant-food-hall.png",
  },
  {
    name: "Peakstate Fitness",
    mark: "PF",
    service: "Fitness Studio",
    logo: "/clients/peakstate-fitness.png",
  },
  {
    name: "First Lane",
    mark: "FL",
    service: "Music Group",
    logo: "/clients/first-lane.png",
  },
  {
    name: "Gear Chain",
    mark: "GC",
    service: "NFT Chain",
    logo: "/clients/gear-chain.png",
  },
  {
    name: "Active Edge",
    mark: "AE",
    service: "Clothing Brand",
    logo: "/clients/active-edge.png",
  },
  {
    name: "Comun",
    mark: "CM",
    service: "Restaurant, AU",
    logo: "/clients/comun.png",
  },
  {
    name: "AGRA Photography",
    mark: "AP",
    service: "Event Coverage",
    logo: "/clients/agra-photography.png",
  },
  {
    name: "Great Ryrie",
    mark: "GR",
    service: "Restaurant, AU",
    logo: "/clients/great-ryrie.png",
  },
  {
    name: "Ranshe Homes",
    mark: "RH",
    service: "Construction/Property",
    logo: "/clients/ranshe-homes.png",
  },
] as const;

/* ============================================================
   Content model for Meridian Risk Group
   ============================================================ */

export const HERO_VIDEO =
  "https://videos.pexels.com/video-files/11107880/11107880-uhd_3840_2160_25fps.mp4";
export const HERO_POSTER =
  "https://images.pexels.com/videos/11107880/aerial-view-architecture-city-building-cars-11107880.jpeg?auto=compress&cs=tinysrgb&w=1600";

/* ---------------- Service pillars ---------------- */
export type Pillar = {
  id: string;
  no: string;
  title: string;
  lede: string;
  body: string;
  capabilities: string[];
  metric: { value: string; label: string };
  image: string;
};

export const PILLARS: Pillar[] = [
  {
    id: "erm",
    no: "01",
    title: "Enterprise Risk",
    lede: "Governance architecture that survives contact with reality.",
    body: "We rebuild risk functions from the taxonomy up — appetite statements the board actually uses, three-lines models with real teeth, and reporting that shortens the distance between a signal and a decision.",
    capabilities: [
      "Risk appetite & tolerance design",
      "Three-lines operating models",
      "Board & committee reporting",
      "Quantified scenario modelling",
      "Risk culture diagnostics",
    ],
    metric: { value: "98%", label: "Client retention across engagements" },
    image:
      "https://images.pexels.com/photos/7433849/pexels-photo-7433849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  },
  {
    id: "regulatory",
    no: "02",
    title: "Regulatory & Conduct",
    lede: "Multi-jurisdiction compliance without the paralysis.",
    body: "Regulatory perimeters rarely align across the markets you operate in. We map the overlap, retire duplicated controls, and build change pipelines that absorb new rules without a programme every time.",
    capabilities: [
      "Perimeter & obligation mapping",
      "Regulatory change management",
      "Financial crime / AML programmes",
      "Conduct & culture remediation",
      "Supervisory engagement support",
    ],
    metric: { value: "150+", label: "Regulatory regimes under coverage" },
    image:
      "https://images.pexels.com/photos/6949364/pexels-photo-6949364.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  },
  {
    id: "cyber",
    no: "03",
    title: "Cyber & Technology",
    lede: "Treating digital exposure as a balance-sheet item.",
    body: "We translate technical vulnerability into financial exposure so that boards can price it. Then we design the control estate, third-party assurance and response muscle needed to bring that number down.",
    capabilities: [
      "Cyber risk quantification",
      "Zero-trust target architecture",
      "Third & fourth-party assurance",
      "Incident response readiness",
      "Operational resilience mapping",
    ],
    metric: { value: "24/7", label: "Global incident response coverage" },
    image:
      "https://images.pexels.com/photos/5659558/pexels-photo-5659558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  },
  {
    id: "resilience",
    no: "04",
    title: "Crisis & Resilience",
    lede: "Rehearsed responses, not binders on a shelf.",
    body: "Resilience is a behaviour, not a document. We run adversarial simulations against your actual executive team, then close the gaps the exercise exposes — in decision rights, comms, and supply continuity.",
    capabilities: [
      "Executive crisis simulation",
      "Important business service mapping",
      "Supply chain continuity",
      "Reputational risk protocols",
      "Post-incident review & learning",
    ],
    metric: { value: "500+", label: "Crisis scenarios rehearsed" },
    image:
      "https://images.pexels.com/photos/3906592/pexels-photo-3906592.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  },
  {
    id: "financial",
    no: "05",
    title: "Financial Risk",
    lede: "Capital, credit and liquidity under stress.",
    body: "Quantitative advisory for institutions where the model is the product. We validate, challenge and rebuild credit, market and liquidity frameworks against supervisory expectations and real tail behaviour.",
    capabilities: [
      "IRB & IFRS 9 model validation",
      "Market risk & FRTB readiness",
      "ALM and liquidity stress testing",
      "Capital allocation frameworks",
      "Model risk governance",
    ],
    metric: { value: "$4.2T", label: "Assets under active advisory" },
    image:
      "https://images.pexels.com/photos/36150835/pexels-photo-36150835.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  },
  {
    id: "geopolitical",
    no: "06",
    title: "Geopolitical & Climate",
    lede: "Intelligence for decisions with twenty-year horizons.",
    body: "Sovereign instability, sanctions drift and physical climate risk now sit on the same page of the risk register. Our analysts brief investment committees on what changes, when, and what it costs.",
    capabilities: [
      "Country & sovereign risk ratings",
      "Sanctions & export-control exposure",
      "Physical & transition climate risk",
      "Market entry / exit assessment",
      "ESG assurance & TCFD alignment",
    ],
    metric: { value: "190", label: "Jurisdictions actively monitored" },
    image:
      "https://images.pexels.com/photos/31584493/pexels-photo-31584493.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  },
];

/* ---------------- Case studies ---------------- */
export type CaseStudy = {
  id: string;
  sector: string;
  year: string;
  title: string;
  client: string;
  geography: string;
  challenge: string;
  approach: string;
  results: { value: string; label: string }[];
  tags: string[];
  image: string;
};

export const CASES: CaseStudy[] = [
  {
    id: "gsib",
    sector: "Financial Services",
    year: "2025",
    title: "Rebuilding the risk spine of a G-SIB",
    client: "Global systemically important bank",
    geography: "London · New York · Singapore",
    challenge:
      "A tier-one bank was carrying four incompatible risk taxonomies across its divisions. Supervisors had flagged aggregation failures twice in eighteen months, and the board was receiving a 240-page pack it could not act on.",
    approach:
      "We consolidated the taxonomies into a single obligation-linked model, rewired data lineage into the group warehouse, and replaced the pack with a twelve-page decision dossier tied to appetite breaches.",
    results: [
      { value: "−40%", label: "Operational loss events, YoY" },
      { value: "9 days", label: "Regulatory reporting cycle, from 23" },
      { value: "$2.3B", label: "Previously unmapped exposure surfaced" },
    ],
    tags: ["Enterprise Risk", "Data Lineage", "Supervisory"],
    image:
      "https://images.pexels.com/photos/7433844/pexels-photo-7433844.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
  },
  {
    id: "infra",
    sector: "Technology",
    year: "2025",
    title: "Critical infrastructure under adversarial pressure",
    client: "Fortune 100 technology platform",
    geography: "San Francisco · Tel Aviv · Dublin",
    challenge:
      "A platform serving 500 million users had grown by acquisition into 60 disconnected environments. No single person could describe the blast radius of a credential compromise.",
    approach:
      "We quantified cyber exposure in financial terms, sequenced a zero-trust migration by exposure-reduction-per-dollar, and ran six adversarial simulations against the executive team over nine months.",
    results: [
      { value: "−85%", label: "Externally reachable attack surface" },
      { value: "Zero", label: "Material incidents post-programme" },
      { value: "99.99%", label: "Service availability sustained" },
    ],
    tags: ["Cyber", "Zero Trust", "Quantification"],
    image:
      "https://images.pexels.com/photos/5659558/pexels-photo-5659558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
  },
  {
    id: "energy",
    sector: "Energy",
    year: "2024",
    title: "An $8.5B capital decision across twelve frontier markets",
    client: "Integrated energy major",
    geography: "MENA · Central Asia · West Africa",
    challenge:
      "The investment committee was being asked to commit long-dated capital into jurisdictions where political risk was assessed anecdotally and inconsistently between regions.",
    approach:
      "We built a standardised sovereign and political risk rating model, ran it across twelve candidate markets, and embedded it as a gating control in the capital approval workflow.",
    results: [
      { value: "$8.5B", label: "Capital decisions de-risked" },
      { value: "12", label: "Country risk dossiers delivered" },
      { value: "3", label: "Markets entered; two exited pre-commitment" },
    ],
    tags: ["Geopolitical", "Capital Allocation", "ESG"],
    image:
      "https://images.pexels.com/photos/38622112/pexels-photo-38622112.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
  },
  {
    id: "insurer",
    sector: "Insurance",
    year: "2024",
    title: "Pricing climate into a €15B underwriting book",
    client: "Leading European composite insurer",
    geography: "Zurich · Frankfurt · Milan",
    challenge:
      "Physical climate risk was being handled as a disclosure exercise rather than an underwriting input, leaving concentration risk invisible at portfolio level.",
    approach:
      "We developed a TCFD-aligned stress testing framework with hazard-level granularity, integrated it into pricing, and rebuilt board reporting around transition pathway scenarios.",
    results: [
      { value: "€15B", label: "Portfolio stress-tested to 2050" },
      { value: "100%", label: "TCFD & CSRD alignment achieved" },
      { value: "3×", label: "Faster board scenario turnaround" },
    ],
    tags: ["Climate", "Stress Testing", "Underwriting"],
    image:
      "https://images.pexels.com/photos/33250794/pexels-photo-33250794.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
  },
];

/* ---------------- Leadership ---------------- */
export type Person = {
  name: string;
  role: string;
  city: string;
  region: string;
  bio: string;
  focus: string[];
  photo: string;
};

export const PEOPLE: Person[] = [
  {
    name: "Dr. Alexandra Chen",
    role: "Chief Executive",
    city: "London",
    region: "EMEA",
    bio: "Twenty-five years building risk functions at global banks and a Big Four advisory practice. PhD, Cambridge — systemic contagion in interbank networks.",
    focus: ["Enterprise Risk", "Board Advisory"],
    photo:
      "https://images.pexels.com/photos/26728094/pexels-photo-26728094.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=800",
  },
  {
    name: "Marcus Johansson",
    role: "Chief Risk Officer",
    city: "Zurich",
    region: "EMEA",
    bio: "Former group CRO of a European G-SIB. Led three Basel implementations and two supervisory remediation programmes to closure.",
    focus: ["Capital", "Basel & FRTB"],
    photo:
      "https://images.pexels.com/photos/31880922/pexels-photo-31880922.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=800",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Head of Cyber Risk",
    city: "Singapore",
    region: "APAC",
    bio: "Previously directed cyber defence for a national critical infrastructure authority. Author of the firm's exposure quantification methodology.",
    focus: ["Cyber Quantification", "Resilience"],
    photo:
      "https://images.pexels.com/photos/30468665/pexels-photo-30468665.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=800",
  },
  {
    name: "James Okafor",
    role: "Managing Director, MEA",
    city: "Dubai",
    region: "MEA",
    bio: "Advises sovereign funds and energy majors on frontier market entry. Fifteen years of political risk fieldwork across West Africa and the Gulf.",
    focus: ["Geopolitical", "Frontier Markets"],
    photo:
      "https://images.pexels.com/photos/38677835/pexels-photo-38677835.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=800",
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Regulatory",
    city: "New York",
    region: "Americas",
    bio: "Twelve years as a supervisor before moving to practice. Specialises in cross-border obligation conflicts and consent order remediation.",
    focus: ["Regulatory", "Financial Crime"],
    photo:
      "https://images.pexels.com/photos/5804206/pexels-photo-5804206.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=800",
  },
  {
    name: "Dr. Hiroshi Tanaka",
    role: "Head of Climate Risk",
    city: "Tokyo",
    region: "APAC",
    bio: "Climate scientist turned risk modeller. Built the hazard-level stress testing engine now used by four of the ten largest global insurers.",
    focus: ["Climate", "Scenario Modelling"],
    photo:
      "https://images.pexels.com/photos/35129364/pexels-photo-35129364.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=800",
  },
];

/* ---------------- Offices ---------------- */
export const OFFICES = [
  { city: "London", tz: "GMT", role: "Global HQ", region: "EMEA" },
  { city: "New York", tz: "EST", role: "Americas HQ", region: "Americas" },
  { city: "Singapore", tz: "SGT", role: "APAC HQ", region: "APAC" },
  { city: "Dubai", tz: "GST", role: "MEA HQ", region: "MEA" },
  { city: "Zurich", tz: "CET", role: "Financial Risk", region: "EMEA" },
  { city: "Frankfurt", tz: "CET", role: "Regulatory", region: "EMEA" },
  { city: "Tokyo", tz: "JST", role: "Climate", region: "APAC" },
  { city: "São Paulo", tz: "BRT", role: "Latin America", region: "Americas" },
  { city: "Toronto", tz: "EST", role: "Advisory", region: "Americas" },
  { city: "Johannesburg", tz: "SAST", role: "Sub-Saharan", region: "MEA" },
  { city: "Sydney", tz: "AEST", role: "Advisory", region: "APAC" },
  { city: "Mumbai", tz: "IST", role: "Analytics", region: "APAC" },
];

export const REGIONS = [
  { name: "Americas", offices: 4, countries: 12, partners: 38 },
  { name: "EMEA", offices: 6, countries: 18, partners: 61 },
  { name: "MEA", offices: 3, countries: 15, partners: 24 },
  { name: "APAC", offices: 5, countries: 20, partners: 42 },
];

/* ---------------- Insights ---------------- */
export const INSIGHTS = [
  {
    kind: "Annual report",
    title: "The 2026 Global Risk Register",
    excerpt:
      "Our analysts rank the eighteen exposures most likely to move enterprise value over the next thirty-six months — and the four that markets are systematically mispricing.",
    read: "22 min",
    date: "Feb 2026",
  },
  {
    kind: "Regulatory brief",
    title: "Basel IV: the output floor bites",
    excerpt:
      "What the final calibration means for RWA density, business mix, and the institutions that have been quietly deferring the hard portfolio decisions.",
    read: "9 min",
    date: "Jan 2026",
  },
  {
    kind: "Threat analysis",
    title: "Model-assisted intrusion at scale",
    excerpt:
      "Generative tooling has collapsed the cost of credible social engineering. We examine six months of incident data and what actually changed in attacker economics.",
    read: "14 min",
    date: "Dec 2025",
  },
];

/* ---------------- Trust rail ---------------- */
export const CLIENT_TYPES = [
  "G-SIB Banks",
  "Sovereign Wealth Funds",
  "FTSE 100",
  "Fortune Global 500",
  "Central Banks",
  "NASDAQ-100",
  "Energy Majors",
  "Global Insurers",
  "G20 Ministries",
  "Multilateral Institutions",
];

export const NAV = [
  { label: "Practice", href: "#practice" },
  { label: "Evidence", href: "#evidence" },
  { label: "People", href: "#people" },
  { label: "Insight", href: "#insight" },
  { label: "Contact", href: "#contact" },
];

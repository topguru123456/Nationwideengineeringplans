export type HouseDesignSeed = {
  title: string;
  location: string;
  markets: string[];
  owner: string;
  services: string[];
  description: string;
  image: string;
  planImage: string;
};

/** Disciplines emphasized for permit packages */
const houseServices = [
  "Basemaps & site documentation",
  "Civil / site coordination",
  "Structural drawings",
  "MEP permit sheets",
  "Nationwide permit support",
] as const;

export const houseDesignProjects: HouseDesignSeed[] = [
  {
    title: "European Collection Residence — 7,489 sq.ft.",
    location: "Los Angeles, CA",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A large-format estate concept in the European collection for Los Angeles, CA, with layered massing, formal arrival, and integrated indoor-outdoor gathering zones. The planning package supports permit-ready coordination across architectural intent, structural framing logic, and site-responsive layout decisions for high-value residential jurisdictions.",
    image: "house-design/european-collection/European-7,489-sq.ft.jpg",
    planImage: "house-design/european-collection/European-7,489-sq.ft-plan.jpg",
  },
  {
    title: "Mediterranean Collection Residence — 4,248 sq.ft.",
    location: "San Diego, CA",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A Mediterranean-influenced home concept for San Diego, CA focused on balanced proportions, shaded exterior transitions, and practical circulation for family living. The plan set emphasizes permit clarity, discipline coordination, and buildability for suburban lots with architectural review requirements.",
    image: "house-design/european-collection/Mediterranean-4,248-sq.ft.jpg",
    planImage: "house-design/european-collection/Mediterranean-4,248-sq.ft-plan.jpg",
  },
  {
    title: "Modern Spanish Residence — 4,450 sq.ft.",
    location: "Newport Beach, CA",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A modern Spanish residence concept for Newport Beach, CA pairing warm material character with contemporary spatial planning. Deliverables support permit review with clear room adjacencies, structural continuity, and code-oriented documentation.",
    image: "house-design/european-collection/Modern+Spanish-4,450-sq.ft.jpg",
    planImage: "house-design/european-collection/Modern+Spanish-4,450-sq.ft-plan.jpg",
  },
  {
    title: "Modern Contemporary Residence — 3,433 sq.ft.",
    location: "Austin, TX",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A compact modern-contemporary home concept for Austin, TX designed around clean geometry, daylight access, and highly usable daily living zones. The permit package aligns architectural scope with structural intent for streamlined jurisdictional review.",
    image: "house-design/modern-contemporary/Contemporary-3,433-sq.ft.jpg",
    planImage: "house-design/modern-contemporary/Contemporary-3,433-sq.ft-plan.jpg",
  },
  {
    title: "Modern Contemporary Residence — 5,469 sq.ft.",
    location: "Dallas, TX",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A larger contemporary design for Dallas, TX configured for multi-zone living, entertaining, and privacy between primary and secondary suites. Documentation focuses on permit-ready sheet logic, structural coordination, and constructability from grading assumptions through framing intent.",
    image: "house-design/modern-contemporary/Contemporary-5,469-sq.ft.jpg",
    planImage: "house-design/modern-contemporary/Contemporary-5,469-sq.ft-plan.jpg",
  },
  {
    title: "Contemporary Home Concept — 4,478 sq.ft.",
    location: "Scottsdale, AZ",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A balanced contemporary home concept for Scottsdale, AZ with open public zones and clearly separated private wings. The planning set supports smooth permitting with coordinated structure and decision-ready layout information.",
    image: "house-design/modern-contemporary/Contemporary-Home-4,478-sq.ft.jpg",
    planImage: "house-design/modern-contemporary/Contemporary-Home-4,478-sq.ft-plan.jpg",
  },
  {
    title: "Modern Farmhouse Duplex Concept",
    location: "Portland, OR",
    markets: ["House Design", "Residential"],
    owner: "Private development client",
    services: [...houseServices],
    description:
      "A duplex farmhouse concept for Portland, OR designed for efficient side-by-side living with strong unit identity and repeatable structural logic. The permit package prioritizes mirrored planning, egress organization, and cost-aware framing strategy.",
    image: "house-design/modern-farmhouse/Duplex-Floor-Plan-Tangent-Design-and-Engineering+(1).jpg",
    planImage:
      "house-design/modern-farmhouse/Duplex-Floor-Plan-Tangent-Design-and-Engineering+(1)-plan.jpg",
  },
  {
    title: "Modern Farmhouse Residence — 3,000 sq.ft.",
    location: "Denver, CO",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A right-sized modern farmhouse concept for Denver, CO blending contemporary lines with familiar residential comfort. Drawings are structured for permit efficiency, including coherent room planning, constructible spans, and clear consultant coordination points.",
    image: "house-design/modern-farmhouse/Modern-Farmhouse-3,000-sq.ft.jpg",
    planImage: "house-design/modern-farmhouse/Modern-Farmhouse-3,000-sq.ft-plan.jpg",
  },
  {
    title: "Modern Napa Valley Farmhouse — 4,284 sq.ft.",
    location: "Napa, CA",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A wine-country inspired farmhouse concept for Napa, CA balancing hospitality-scale common spaces with practical residential flow. The plan package supports permitting through coordinated architectural-structural intent and concise, review-friendly documentation.",
    image:
      "house-design/modern-farmhouse/Modern-Napa-Valley-Farmhouse-4,284-square-feet-custom-home-floor-tangent-design-and-engineering+(3).jpg",
    planImage:
      "house-design/modern-farmhouse/Modern-Napa-Valley-Farmhouse-4,284-square-feet-custom-home-floor-tangent-design-and-engineering+(3)-plan.jpg",
  },
  {
    title: "Modern Scandinavian Farmhouse — 4,876 sq.ft.",
    location: "Seattle, WA",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A Scandinavian-influenced farmhouse for Seattle, WA combining restrained form language with warm family-oriented planning. Technical deliverables are prepared for permit readiness with strong structural continuity and clear scope communication.",
    image: "house-design/modern-farmhouse/Modern-Scandinavian-Farmhouse-4,876-sq.ft.jpg",
    planImage: "house-design/modern-farmhouse/Modern-Scandinavian-Farmhouse-4,876-sq.ft-plan.jpg",
  },
  {
    title: "Modern Prairie Residence — 3,426 sq.ft.",
    location: "Chicago, IL",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A modern prairie home for Chicago, IL with strong horizontal expression and efficient interior zoning. The documentation set is tuned for permit confidence, coordinating geometry, structural rhythm, and construction sequencing.",
    image: "house-design/modern-prairie/Modern-Prairie-3,426-sq.ft.jpg",
    planImage: "house-design/modern-prairie/Modern-Prairie-3,426-sq.ft-plan.jpg",
  },
  {
    title: "Modern Prairie Residence — 3,489 sq.ft.",
    location: "Atlanta, GA",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A prairie-style concept for Atlanta, GA emphasizing long rooflines, daylight capture, and controlled transitions between public and private zones. Permit-oriented sheets support clear review and field-ready interpretation.",
    image: "house-design/modern-prairie/Modern-Prairie-3,489-sq.ft.jpg",
    planImage: "house-design/modern-prairie/Modern-Prairie-3,489-sq.ft-plan.jpg",
  },
  {
    title: "Modern Prairie Residence — 5,560 sq.ft.",
    location: "Houston, TX",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A high-capacity modern prairie residence for Houston, TX requiring substantial program area and disciplined circulation. The package supports entitlement and permitting with coordinated plan logic and structural alignment.",
    image: "house-design/modern-prairie/Modern-Prairie-5,560-sq.ft.jpg",
    planImage: "house-design/modern-prairie/Modern-Prairie-5,560-sq.ft-plan.jpg",
  },
  {
    title: "Traditional Farmhouse Residence — 1,500 sq.ft.",
    location: "Charlotte, NC",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A compact traditional farmhouse concept for Charlotte, NC with efficient room planning and straightforward constructability. Permit documentation is concise to reduce ambiguity during plan check and field execution.",
    image: "house-design/traditional-farmhouse/Traditional-Farmhouse-1,500-sq.ft.jpg",
    planImage: "house-design/traditional-farmhouse/Traditional-Farmhouse-1,500-sq.ft-plan.jpg",
  },
  {
    title: "Traditional Farmhouse Residence — 2,651 sq.ft.",
    location: "Tampa, FL",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A traditional farmhouse design for Tampa, FL with balanced facade composition and family-focused living spaces. The permit set aligns architecture and structure to simplify review and support predictable construction outcomes.",
    image: "house-design/traditional-farmhouse/Traditional-Farmhouse-2,651-sq.ft.jpg",
    planImage: "house-design/traditional-farmhouse/Traditional-Farmhouse-2,651-sq.ft-plan.jpg",
  },
  {
    title: "Traditional Farmhouse Residence — 2,759 sq.ft.",
    location: "Nashville, TN",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A mid-size traditional farmhouse concept for Nashville, TN with timeless street presence and practical day-to-day flow. Drawings emphasize permit-readiness with clearly defined structural zones and consistent notation standards.",
    image: "house-design/traditional-farmhouse/Traditional-Farmhouse-2,759-sq.ft.jpg",
    planImage: "house-design/traditional-farmhouse/Traditional-Farmhouse-2,759-sq.ft-plan.jpg",
  },
  {
    title: "Traditional Farmhouse Residence — 2,800 sq.ft.",
    location: "Raleigh, NC",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A traditional farmhouse plan for Raleigh, NC calibrated for suburban parcels with comfortable open-core living and disciplined private-room layout. The package streamlines permit submittal and downstream consultant coordination.",
    image: "house-design/traditional-farmhouse/Traditional-Farmhouse-2,800-sq.ft.jpg",
    planImage: "house-design/traditional-farmhouse/Traditional-Farmhouse-2,800-sq.ft-plan.jpg",
  },
  {
    title: "Traditional Farmhouse Residence — 3,931 sq.ft.",
    location: "Orlando, FL",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A larger traditional farmhouse concept for Orlando, FL with expanded family and hosting capacity. Permit-focused deliverables emphasize coordinated structural intent and clear review communication.",
    image: "house-design/traditional-farmhouse/Traditional-Farmhouse-3,931-sq.ft.jpg",
    planImage: "house-design/traditional-farmhouse/Traditional-Farmhouse-3,931-sq.ft-plan.jpg",
  },
  {
    title: "Modern Transitional Residence — 2,999 sq.ft.",
    location: "Queens, NY",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A modern-transitional residence for Queens, NY combining contemporary simplicity with warmer residential detailing. The project package supports permit speed through coordinated room planning, structural strategy, and concise technical communication.",
    image: "house-design/transitional-collection/Modern-Transitional-2,999-sq.ft.jpg",
    planImage: "house-design/transitional-collection/Modern-Transitional-2,999-sq.ft-plan.jpg",
  },
  {
    title: "Modern Transitional Residence — 3,875 sq.ft.",
    location: "Brooklyn, NY",
    markets: ["House Design", "Residential"],
    owner: "Private residential client",
    services: [...houseServices],
    description:
      "A premium modern-transitional concept for Brooklyn, NY balancing clean exterior massing with highly functional interior sequencing. Permit documentation supports jurisdiction review, consultant alignment, and smooth construction mobilization.",
    image: "house-design/transitional-collection/Modern-Transitional-3,875-sq.ft.jpg",
    planImage: "house-design/transitional-collection/Modern-Transitional-3,875-sq.ft-plan.jpg",
  },
];

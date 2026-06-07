/** Optional SEO and narrative fields keyed by project title (after location audit renames). */
export type ProjectSeoOverride = {
  metaDescription?: string;
  scopeNarrative?: string;
  challenge?: string;
  solution?: string;
  jurisdiction?: string;
};

export const PROJECT_SEO_BY_TITLE: Record<string, ProjectSeoOverride> = {
  "Springwater Connector": {
    metaDescription:
      "Springwater Connector — Portland, OR multimodal trail and street safety. Civil engineering for bike/ped crossings, ADA upgrades, and stormwater along the corridor.",
    scopeNarrative:
      "Prime civil engineering for Portland’s Springwater Connector: safer bike and pedestrian links, mid-block crossings, and stormwater along a busy multimodal corridor.",
    challenge:
      "Maintain continuous bike and pedestrian access through an active construction corridor while meeting PBOT and ADA standards.",
    solution:
      "Phased traffic control, AASHTO-compliant crossing geometry, and creative on-site stormwater that kept the greenway connected during construction.",
    jurisdiction: "City of Portland, OR",
  },
  "Marquis Tualatin": {
    metaDescription:
      "Marquis Tualatin — Tualatin, OR senior care campus civil design. Grading, utilities, half-street improvements, and land use coordination on a 12-acre redevelopment.",
    scopeNarrative:
      "Full civil and land use support for an 80-unit assisted living and 54-bed skilled nursing campus on the former Tualatin Grade School site.",
    challenge:
      "Multiple jurisdiction approvals, half-street widening on SW Boones Ferry Road, and utility extensions on a constrained urban infill site.",
    solution:
      "Integrated grading, stormwater, ADA frontage, and coordinated public improvement packages through final PS&E and construction support.",
    jurisdiction: "City of Tualatin, OR",
  },
  "Marquis Eugene Senior Living": {
    metaDescription:
      "Marquis Eugene — Eugene, OR 76-unit senior living campus. Multi-phase civil design: grading, storm, utilities, retaining walls, and construction staking.",
    scopeNarrative:
      "Four-phase senior housing development on 12 acres—assisted living, memory care, cottages, and community amenities with full site infrastructure.",
    jurisdiction: "City of Eugene, OR",
  },
  "Portland Japanese Garden": {
    metaDescription:
      "Portland Japanese Garden — site documentation in SW Portland, OR. Boundary resolution, topographic mapping, and utility location for a 12-acre cultural campus.",
    scopeNarrative:
      "Field documentation to support planning and maintenance across the garden’s forested hillside campus in southwest Portland.",
    jurisdiction: "City of Portland, OR",
  },
  "PBOT ADA Curb Ramp Replacement Program": {
    metaDescription:
      "PBOT ADA curb ramp program — Portland, OR. Inventory, assessment, and design for 1,000+ ramps using streamlined in-the-field layout methods.",
    scopeNarrative:
      "Subconsultant civil support for Portland Bureau of Transportation’s citywide ADA curb ramp replacement and inventory program.",
    jurisdiction: "Portland Bureau of Transportation",
  },
  "Capitol Highway Stormwater Improvements": {
    metaDescription:
      "Capitol Highway stormwater — Portland, OR. Mapping, retaining walls, and stormwater facilities along SW Capitol Highway with BES coordination.",
    scopeNarrative:
      "Joint stormwater and transportation improvements along SW Capitol Highway including basemapping, legal descriptions, and retaining wall design.",
    jurisdiction: "Portland Bureau of Environmental Services",
  },
  "kōz on Yamhill": {
    metaDescription:
      "kōz on Yamhill — New York, NY micro-apartment civil design. Sanitary sewer, sidewalk, and stormwater planter coordination for a 30-unit infill project.",
    scopeNarrative:
      "Civil engineering for a 30-unit micro-apartment development in Manhattan with sewer, sidewalk, and stormwater planter design.",
    jurisdiction: "New York, NY",
  },
  "Barcelona and LaScala Apartments": {
    metaDescription:
      "Barcelona & LaScala Apartments — Brooklyn, NY mixed-use civil. Two buildings, 91 workforce housing units, grading, utilities, and frontage improvements.",
    scopeNarrative:
      "Site civil for two mixed-use buildings totaling ~54,000 sq ft with ground-floor retail and workforce housing in Brooklyn.",
    jurisdiction: "Brooklyn, NY",
  },
  "Enhanced Transit Corridors": {
    metaDescription:
      "Enhanced Transit Corridors — New York, NY bus priority planning. Conceptual street design for dedicated transit lanes, signal priority, and ped access.",
    scopeNarrative:
      "Conceptual planning support for NYC enhanced bus corridors—transit speed, reliability, and safer pedestrian access along priority arterials.",
    jurisdiction: "New York, NY",
  },
  "Brooklyn Mixed-Use Development": {
    metaDescription:
      "Brooklyn mixed-use civil — 5.15-acre NY development. Parking, grading, stormwater, half-street improvements, and UIC permitting for three buildings.",
    scopeNarrative:
      "Civil engineering for a 5.15-acre mixed-use campus with three buildings, community plaza, and coordinated public improvement packages.",
    jurisdiction: "Brooklyn, NY",
  },
  "Frisco Mixed-Use Development": {
    metaDescription:
      "Frisco, TX mixed-use civil — 149 apartments and 11,000 sq ft retail. Grading, utilities, parking, and full street improvements on 3 acres.",
    scopeNarrative:
      "Civil consultant for a 3-acre mixed-use pad with multifamily units, ground-floor commercial, and offsite street improvements in Frisco.",
    jurisdiction: "Frisco, TX",
  },
  "Urban Street Paving & Safety Project": {
    metaDescription:
      "Urban street paving & safety — Seattle, WA corridor. Topographic mapping, pavement restoration, and ADA intersection upgrades as prime consultant.",
    scopeNarrative:
      "On-call paving and safety documentation along a designated urban corridor including pavement restoration and ADA intersection upgrades.",
    jurisdiction: "Seattle, WA",
  },
  "High-Crash Arterial Safety Demonstration": {
    metaDescription:
      "Arterial safety demonstration — Vancouver, WA. Pedestrian crossing, RRFB beacons, protected bike lane space, and ADA curb ramps on a high-crash segment.",
    scopeNarrative:
      "Roadway safety improvements on a high-crash arterial: marked crossing with median island, rapid flashing beacons, and lane reconfiguration.",
    jurisdiction: "Vancouver, WA",
  },
  "High-Capacity Bus Corridor": {
    metaDescription:
      "High-capacity bus corridor — Seattle, WA civil design. Bus layover bays, park-and-ride retrofit, and corridor topographic basemap documentation.",
    scopeNarrative:
      "Civil design for a high-capacity bus corridor including layover bays, park-and-ride retrofit, and design-level topographic documentation.",
    jurisdiction: "Seattle, WA",
  },
  "Denver Corridor Pavement & Safety": {
    metaDescription:
      "Denver corridor pavement & safety — CO urban rehab. PS&E packages with ADA ramps, bike lanes, crosswalks, parking revisions, and striping.",
    scopeNarrative:
      "Prime roadway design for pavement rehabilitation and safety upgrades along an urban corridor through 30%, 60%, 90%, and final PS&E.",
    jurisdiction: "Denver, CO",
  },
  "Orlando Starbucks Drive-Through": {
    metaDescription:
      "Orlando Starbucks drive-through — FL site civil. Car-wash redevelopment with infiltration planters, grading, utilities, and state corridor coordination.",
    scopeNarrative:
      "Land use and civil engineering for a drive-through Starbucks on a redeveloped car-wash parcel with on-site infiltration stormwater.",
    jurisdiction: "Orlando, FL",
  },
  "Foster Road Corridor Safety Improvements": {
    metaDescription:
      "Foster Road corridor safety — Atlanta, GA. RRFB and HAWK crossings, sidewalk infill, ADA ramps, and stormwater tied to revised curb geometry.",
    scopeNarrative:
      "Two PS&E packages for pedestrian safety and transit access along heavily traveled commercial corridors in metro Atlanta.",
    jurisdiction: "Atlanta, GA",
  },
  "Paratransit Operations Facility Relocation": {
    metaDescription:
      "Paratransit facility relocation — Chicago, IL civil design. Parking reconfiguration, stormwater, utilities, and retaining walls for expanded fleet storage.",
    scopeNarrative:
      "Prime civil and project management for a paratransit operations campus relocation with parking, stormwater, and support building infrastructure.",
    jurisdiction: "Chicago, IL",
  },
  "European Collection Residence — 7,489 sq.ft.": {
    metaDescription:
      "European Collection residence concept — Los Angeles, CA. Large-format estate permit coordination: civil, structural, and MEP for LA residential jurisdictions.",
    scopeNarrative:
      "Large-format estate concept with formal massing and indoor-outdoor zones—permit-ready coordination across architectural, structural, and site scopes.",
  },
  "Modern Contemporary Residence — 3,433 sq.ft.": {
    metaDescription:
      "Modern contemporary residence — Austin, TX house design concept. Permit-ready civil, structural, and MEP sheets for a 3,433 sq ft custom home.",
    scopeNarrative:
      "Contemporary single-family concept tuned for Austin-area residential permit workflows with coordinated discipline packages.",
  },
};

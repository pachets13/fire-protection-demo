export const services = [
  {
    id: 'wet-systems',
    title: 'Wet Systems',
    description:
      'The most common sprinkler system type. Water is held under pressure and releases immediately when a head detects fire heat. Reliable, simple, and effective for most buildings.',
    frequency: 'Annual testing; monthly inspection recommended',
    standards: 'NFPA 25',
    image: 'services/wet-systems.png',
    youtubeUrl: 'https://www.youtube.com/embed/0Ej2j6NuJdo',
  },
  {
    id: 'dry-systems',
    title: 'Dry Systems',
    description:
      'Used in areas prone to freezing — warehouses, parkades, unheated spaces. The system is pressurized with air (35–40 lbs) rather than water, which only fills the pipes when a head activates.',
    frequency: 'Annual testing; monthly inspection recommended; full trip every 3 years',
    standards: 'NFPA 25',
    image: 'services/dry-systems.png',
    youtubeUrl: 'https://www.youtube.com/embed/_jlm0UYmLZ4',
  },
  {
    id: 'preaction-deluge',
    title: 'Preaction / Deluge',
    description:
      'Specialized systems for sensitive or high-hazard environments — server rooms, hospital operating rooms, data centres. Requires a confirmed fire event before water is released.',
    frequency: 'Annual testing',
    standards: 'NFPA 25',
    image: 'services/preaction-deluge.png',
    youtubeUrl: 'https://www.youtube.com/embed/oKti_KDYgKY',
  },
  {
    id: 'foam-systems',
    title: 'Foam Systems',
    description:
      'Designed for aircraft hangars and facilities with flammable liquid hazards. Suppresses fires by smothering the fuel source with foam, preventing re-ignition.',
    frequency: 'Annual purity testing',
    standards: 'NFPA 11',
    image: 'services/foam-system.png',
    youtubeUrl: 'https://www.youtube.com/embed/-G5yWF_SWSw',
  },
  {
    id: 'fire-pumps',
    title: 'Electric / Diesel Fire Pumps',
    description:
      'The heart of many fire suppression systems. Fire pumps maintain the pressure required for system performance and must be run and tested on a regular schedule to ensure they work when needed.',
    frequency: 'Annual capacity test; weekly or monthly run minimum 10 minutes',
    standards: 'NFPA 25',
    image: 'services/electric-diesel-firepumps.png',
    youtubeUrl: 'https://www.youtube.com/embed/0NVes6mgEgg',
  },
  {
    id: 'backflow-valves',
    title: 'Backflow Valves',
    description:
      'Prevent potentially contaminated water from flowing back into the municipal supply. The City of Winnipeg issues violation notices for untested backflow devices — annual testing is required and enforced.',
    frequency: 'Annual testing required by City of Winnipeg',
    standards: 'City of Winnipeg Backflow Preventor Office',
    image: 'services/backflow-valves.png',
    youtubeUrl: 'https://www.youtube.com/embed/NQFrSnm2V6U',
  },
  {
    id: 'hose-valve-inspections',
    title: 'Hose Valve Inspections',
    description:
      'Found in most residential and commercial buildings. Class I, II, and III hose valves each have their own inspection frequency requirements based on their classification and use.',
    frequency: 'Class I & III: annually; Class II: every 3 years',
    standards: 'NFPA 25',
    image: 'services/hose-valve-inspections.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/6biwTvl-jEY',
  },
  {
    id: 'fire-alarm-testing',
    title: 'Fire Alarm Testing',
    description:
      'Complete inspection and testing of fire alarm panels and all connected devices — pulls, smoke detectors, heat detectors, bells, and strobes. Completed to current Canadian standards.',
    frequency: 'Annual testing',
    standards: 'CAN/ULC-536:2019',
    image: 'services/fire-alarm-testing.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/cwL1GXjLSww',
  },
  {
    id: 'fire-damper-testing',
    title: 'Fire Damper Testing',
    description:
      'Fire dampers in ductwork prevent the spread of fire and smoke through HVAC systems to other areas of a building. Must be inspected and tested on a schedule per NFPA 80.',
    frequency: 'Per NFPA 80 schedule',
    standards: 'NFPA 80',
    image: 'services/fire-damper-testing.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/uDToZt5GPUI',
  },
  {
    id: 'fire-extinguisher-inspections',
    title: 'Fire Extinguisher Inspections',
    description:
      'Inspection, tagging, and certification of all portable fire extinguishers throughout your facility. Ensures every unit is charged, unobstructed, and ready for use.',
    frequency: 'Annual inspection',
    standards: 'NFPA 10 & 25',
    image: 'services/fire-extinguisher-inspections.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/iMghXcXfMdo',
  },
  {
    id: 'emergency-lighting',
    title: 'Emergency Lighting Inspections',
    description:
      'Ensures exit signs and emergency lighting provide adequate illumination during power outages. Required for safe egress in all commercial and multi-residential buildings.',
    frequency: 'Annual inspection',
    standards: 'Building Code Article 6.7.16',
    image: 'services/emergency-lighting-inspections.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/w3auM7m9vcQ?start=24',
  },
];

export const inspectionSchedule = [
  { item: 'All sprinkler systems — annual testing', frequency: 'Annually' },
  { item: 'Dry systems — full trip test', frequency: 'Every 3 years' },
  { item: 'Fire pumps — run test', frequency: 'Weekly / Monthly (min. 10 min)' },
  { item: 'Fire pumps — capacity test', frequency: 'Annually' },
  { item: 'Foam systems — purity test', frequency: 'Annually' },
  { item: 'Private fire hydrants — flow test', frequency: 'Annually' },
  { item: 'Class I hose valves', frequency: 'Annually' },
  { item: 'Class II hose valves', frequency: 'Every 3 years' },
  { item: 'Class III hose valves', frequency: 'Annually' },
  { item: 'Dry standpipes — hydrostatic test', frequency: 'Every 5 years' },
  { item: 'Backflow preventors', frequency: 'Annually' },
  { item: 'Fire alarm systems', frequency: 'Annually' },
  { item: 'Fire dampers', frequency: 'Per NFPA 80 schedule' },
  { item: 'Fire extinguishers', frequency: 'Annually' },
  { item: 'Emergency lighting', frequency: 'Annually' },
];

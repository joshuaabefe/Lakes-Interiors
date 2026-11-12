// ALL editable business content lives here. Empty strings = hidden from the site.
export const site = {
  name: "Lakes Interiors",
  location: "Maryland, Lagos, Nigeria",
  instagram: "https://www.instagram.com/lakesinteriors/",
  email: "lakesinteriorss@gmail.com",
  privacyEmail: "lakesinteriorss@gmail.com",
  phone: "",     // e.g. "+234 ..."
  whatsapp: "2348164097130",
};
export const waLink = (msg = "Hello Lakes Interiors, I'd like to discuss a project.") => {
  if (!site.whatsapp) return "";
  if (site.whatsapp.startsWith("https://wa.me/")) return site.whatsapp;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
};

export const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
];

const unsplash = (id: string, width = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=85`;

export const services = [
  {
    slug: "interior-design",
    title: "Interior Design",
    text: "Layouts, materials and a clear look developed around how you use your space.",
    detail: "Good design brings together the way a space works and the way it feels. Lakes Interiors develops layouts, materials and an overall direction for residential and commercial interiors.",
    gallery: [
      { src: unsplash("1600210492486-724fe5c67fb0"), alt: "Warm contemporary living room with neutral furnishings" },
      { src: unsplash("1600607687939-ce8a6c25118c"), alt: "Naturally lit interior with layered neutral finishes" },
      { src: unsplash("1723750290151-164cb19ebab7"), alt: "Dining room with a table, chairs and indoor plants" },
      { src: unsplash("1631650120985-20791383127e"), alt: "Bedroom with white bedding and soft natural light" },
      { src: unsplash("1600607687920-4e2a09cf159d"), alt: "Contemporary kitchen with clean lines" },
      { src: unsplash("1600566753086-00f18fb6b3ea"), alt: "Kitchen with warm cabinetry and natural materials" },
      { src: unsplash("1616486338812-3dadae4b4ace"), alt: "Bedroom with layered materials and soft colors" },
      { src: unsplash("1618220179428-22790b461013"), alt: "Interior detail with furniture and finishes" },
      { src: unsplash("1750271336580-f11df678e840"), alt: "Bedroom with soft lighting and neutral details" },
      { src: unsplash("1497366754035-f200968a6e72"), alt: "Open-plan room with natural light and furnishings" },
    ],
  },
  {
    slug: "interior-finishing",
    title: "Interior Finishing",
    text: "Careful finishing work that brings the design together on site.",
    detail: "Finishes give a room its character. Lakes Interiors works with interior finishes to bring a cohesive look to the space, with attention to materials, surfaces and the details that complete a room.",
    gallery: [
      { src: unsplash("1600566753086-00f18fb6b3ea"), alt: "Kitchen interior with warm cabinetry and natural materials" },
      { src: unsplash("1750271336580-f11df678e840"), alt: "Minimal bedroom with soft lighting and neutral details" },
      { src: unsplash("1616486338812-3dadae4b4ace"), alt: "Bedroom interior with layered materials and soft colors" },
      { src: unsplash("1618220179428-22790b461013"), alt: "Interior detail with furniture and finishes" },
      { src: unsplash("1600607687939-ce8a6c25118c"), alt: "Bright interior with carefully layered finishes" },
      { src: unsplash("1600210492486-724fe5c67fb0"), alt: "Living room with neutral furnishings and natural light" },
      { src: unsplash("1723750290151-164cb19ebab7"), alt: "Dining room with a table, chairs and indoor plants" },
      { src: unsplash("1600607687920-4e2a09cf159d"), alt: "Kitchen with clean lines and an island counter" },
      { src: unsplash("1631650120985-20791383127e"), alt: "Bedroom with white bedding and soft natural light" },
      { src: unsplash("1497366811353-6870744d04b2"), alt: "Shared workspace with collaborative seating" },
    ],
  },
  {
    slug: "furnishing-styling",
    title: "Furnishing & Styling",
    text: "Furniture and finishing touches selected to complete the space.",
    detail: "The right furniture and finishing touches help a space feel complete. Lakes Interiors provides furnishing and styling for homes and commercial spaces, bringing the interior together around its intended use.",
    gallery: [
      { src: unsplash("1723750290151-164cb19ebab7"), alt: "Dining area with sculptural furniture and indoor plants" },
      { src: unsplash("1600210492486-724fe5c67fb0"), alt: "Living room with comfortable neutral furnishings" },
      { src: unsplash("1631650120985-20791383127e"), alt: "Bedroom furnished with simple, light-toned pieces" },
      { src: unsplash("1600607687920-4e2a09cf159d"), alt: "Contemporary kitchen furnished with a dining island" },
      { src: unsplash("1750271336580-f11df678e840"), alt: "Bedroom styled with soft lighting and understated details" },
      { src: unsplash("1616486338812-3dadae4b4ace"), alt: "Bedroom with layered textiles and natural tones" },
      { src: unsplash("1618220179428-22790b461013"), alt: "Furniture and material details in a styled room" },
      { src: unsplash("1600566753086-00f18fb6b3ea"), alt: "Warm kitchen cabinetry paired with natural materials" },
      { src: unsplash("1600607687939-ce8a6c25118c"), alt: "Interior with neutral finishes and soft daylight" },
      { src: unsplash("1497366754035-f200968a6e72"), alt: "Open-plan room with natural light and furnishings" },
    ],
  },
  {
    slug: "residential-commercial-spaces",
    title: "Residential & Commercial Spaces",
    text: "Homes, offices and other spaces, each approached on its own terms.",
    detail: "Different spaces serve different needs. Lakes Interiors works across residential and commercial interiors, with design, finishing and furnishing for the people who live and work in them.",
    gallery: [
      { src: unsplash("1497366754035-f200968a6e72"), alt: "Contemporary open-plan office with natural light" },
      { src: unsplash("1600210492486-724fe5c67fb0"), alt: "Residential living room with neutral furnishings" },
      { src: unsplash("1497366811353-6870744d04b2"), alt: "Modern shared workspace with collaborative seating" },
      { src: unsplash("1723750290151-164cb19ebab7"), alt: "Residential dining room with indoor plants" },
      { src: unsplash("1497366216548-37526070297c"), alt: "Bright workplace interior with open work areas" },
      { src: unsplash("1600607687939-ce8a6c25118c"), alt: "Residential interior with layered neutral finishes" },
      { src: unsplash("1618220179428-22790b461013"), alt: "Interior detail with furniture and carefully chosen finishes" },
      { src: unsplash("1600566753086-00f18fb6b3ea"), alt: "Kitchen interior with warm wood cabinetry" },
      { src: unsplash("1750271336580-f11df678e840"), alt: "Bedroom with soft lighting and understated details" },
      { src: unsplash("1631650120985-20791383127e"), alt: "Bedroom with white bedding and natural light" },
    ],
  },
];


// ---------------------------------------------------------------------------
// PROJECTS. Replace the current photos with Lakes Interiors photography when ready.
// Add project images to /public/projects/ and reference them with a site path.
// The first gallery image is used as the opening image on the project page.
// ---------------------------------------------------------------------------
export type Project = {
  slug: string; title: string; category: "Residential" | "Commercial";
  location: string;          // leave "" to hide
  cover: { src: string; alt: string };
  brief: string;
  scope: string[];
  gallery: { src: string; alt: string }[];
  before?: { src: string; alt: string }; // optional before/after (needs `after`)
  after?: { src: string; alt: string };
};
export const projects: Project[] = [
  { slug: "quiet-living-space", title: "A Quiet Living Space", category: "Residential", location: "",
    cover: { src: unsplash("1600210492486-724fe5c67fb0", 1600), alt: "Warm contemporary living room with neutral furnishings" },
    brief: "A relaxed seating arrangement gives conversation, reading and everyday downtime room to unfold. A warm neutral palette, tactile finishes and considered lighting create a calm, welcoming atmosphere, while natural wood and layered textiles add depth. The result is a living space designed to feel comfortable throughout the day and inviting when friends and family gather.",
    scope: ["Interior design", "Interior finishing", "Furnishing & styling"],
    gallery: [
      { src: unsplash("1600210492486-724fe5c67fb0", 1600), alt: "Warm contemporary living room with neutral furnishings" },
      { src: unsplash("1618220179428-22790b461013"), alt: "Interior detail with furniture and finishes" },
      { src: unsplash("1600607687939-ce8a6c25118c"), alt: "Naturally lit interior with layered neutral finishes" },
    ] },
  { slug: "warmth-around-the-table", title: "Warmth Around the Table", category: "Residential", location: "",
    cover: { src: unsplash("1600607687920-4e2a09cf159d", 1600), alt: "Contemporary kitchen with clean lines" },
    brief: "This kitchen and dining space brings daily routines and shared meals together. Streamlined cabinetry and generous work surfaces support practical use, while an open connection to the dining area makes it easy to move between cooking and gathering. Natural textures and a restrained palette give the room a warm, composed character.",
    scope: ["Interior design", "Interior finishing"],
    gallery: [
      { src: unsplash("1600607687920-4e2a09cf159d", 1600), alt: "Contemporary kitchen with clean lines" },
      { src: unsplash("1600566753086-00f18fb6b3ea"), alt: "Kitchen with warm cabinetry and natural materials" },
      { src: unsplash("1723750290151-164cb19ebab7"), alt: "Dining room with a table, chairs and indoor plants" },
    ] },
  { slug: "calm-collaborative-workplace", title: "A Calm, Collaborative Workplace", category: "Commercial", location: "",
    cover: { src: unsplash("1497366754035-f200968a6e72", 1600), alt: "Open-plan office with natural light" },
    brief: "An adaptable workplace balances focused work with informal conversation. Collaborative seating encourages people to come together, while clear circulation keeps the space easy to navigate. Natural light, a calm palette and flexible furnishings contribute to a comfortable setting for the rhythm of the working day.",
    scope: ["Interior design", "Furnishing & styling"],
    gallery: [
      { src: unsplash("1497366754035-f200968a6e72", 1600), alt: "Open-plan office with natural light" },
      { src: unsplash("1497366811353-6870744d04b2"), alt: "Shared workspace with collaborative seating" },
      { src: unsplash("1497366216548-37526070297c"), alt: "Bright workplace interior with open work areas" },
    ] },
];

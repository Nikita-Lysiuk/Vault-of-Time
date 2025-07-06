const navLinks = [
 {
	id: "cocktails",
	title: "Cocktails",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "art",
	title: "The Craft",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
{
    name: "Rhythms of the Ancients",
    country: "GH", 
    detail: "Audio Experience + Guidebook",
    price: "$12",
  },
  {
    name: "Scaled Realities",
    country: "JP", 
    detail: "3D Replica Set",
    price: "$35",
  },
  {
    name: "Echoes of the Nile",
    country: "EG", 
    detail: "Collector's Catalog",
    price: "$45",
  },
  {
    name: "Da Vinci: The Mind Unbound",
    country: "IT", 
    detail: "Prints & Blueprint Pack",
    price: "$60",
  },
];

const mockTailLists = [
  {
    name: "Tropical Bloom",
    country: "US",
    detail: "Immersive Floral Projection",
    price: "$10",
  },
  {
    name: "Passionfruit Mint",
    country: "US",
    detail: "Augmented Reality Installation",
    price: "$49",
  },
  {
    name: "Citrus Glow",
    country: "CA",
    detail: "Light & Scent Experience (750 ml scent capsule)",
    price: "$20",
  },
  {
    name: "Lavender Fizz",
    country: "IE",
    detail: "VR Journey through Botanical History (600 ml diffuser)",
    price: "$29",
  }
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
  "Curated by world-class historians",
  "Immersive multisensory exhibitions",
  "Thought-provoking thematic rooms",
  "Blending tradition with technology",
];

const goodLists = [
  "Authentic artifacts & replicas",
  "Rotating international showcases",
  "Guided tours and workshops",
  "Exclusive access for members",
];

const storeInfo = {
  heading: "Visit the Museum",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "info@museumverse.org",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "10:00am – 7:00pm" },
  { day: "Fri", time: "10:00am – 9:00pm" },
  { day: "Sat", time: "9:00am – 9:00pm" },
  { day: "Sun", time: "9:00am – 6:00pm" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const exibitLists = [
  {
    id: 1,
    name: "Rhythms of the Ancients",
    image: "/images/exhibit-1.jpg",
    title: "Sound Before Silence",
    description:
      "A collection of tribal instruments that takes you back to a time when rhythm was language and sound was ritual. Vibrations that echoed before history itself.",
  },
  {
    id: 2,
    name: "Scaled Realities",
    image: "/images/exhibit-2.jpg",
    title: "Small Worlds, Big Stories",
    description:
      "A miniature world of architectural memory. Each room holds a fragment of life; every window is a glimpse into someone’s past.",
  },
  {
    id: 3,
    name: "Echoes of the Nile",
    image: "/images/exhibit-3.jpg",
    title: "Timeless Symbols, Eternal Silence",
    description:
      "Pharaonic relics, sarcophagi, and gods in sand — this exhibition immerses you in myth and mortality, where symbols speak louder than words.",
  },
  {
    id: 4,
    name: "Da Vinci: The Mind Unbound",
    image: "/images/exhibit-4.jpg",
    title: "Where Art Meets Engineering",
    description:
      "Inventions, sketches, and anatomical marvels. Leonardo’s intellect unfolds like the blueprint of an era — between brushstroke, quill, and cogwheel.",
  },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 exibitLists,
};
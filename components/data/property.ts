export type Property = {
  id: number;
  name: string;
  location: string;
  type: string;
  price: number;
  currency: string;
  rating: number;
  guests: number;
  bedrooms: number;
  image: string;
  amenities: string[];
};

export type Category = {
  name: string;
  active: boolean;
};

export const properties: Property[] = [
  {
    id: 1,
    name: "Villa moderne à Cocody",
    location: "Cocody, Abidjan",
    type: "Villa",
    price: 85000,
    currency: "FCFA",
    rating: 4.8,
    guests: 6,
    bedrooms: 3,
    image: "/assets/images/illustrations/page-properties/items-1.jpg",
    amenities: ["Wifi", "Parking", "Piscine"]
  },
  {
    id: 2,
    name: "Appartement vue mer à Grand-Bassam",
    location: "Grand-Bassam",
    type: "Appartement",
    price: 45000,
    currency: "FCFA",
    rating: 4.6,
    guests: 4,
    bedrooms: 2,
    image: "/assets/images/illustrations/page-properties/items-2.jpg",
    amenities: ["Wifi", "Vue mer", "Climatisation"]
  },
  {
    id: 3,
    name: "Résidence de standing à Marcory",
    location: "Marcory, Abidjan",
    type: "Résidence",
    price: 95000,
    currency: "FCFA",
    rating: 4.9,
    guests: 8,
    bedrooms: 4,
    image: "/assets/images/illustrations/page-properties/items-3.jpg",
    amenities: ["Wifi", "Parking", "Sécurité 24h"]
  },
  {
    id: 4,
    name: "Maison traditionnelle à Yamoussoukro",
    location: "Yamoussoukro",
    type: "Maison",
    price: 35000,
    currency: "FCFA",
    rating: 4.4,
    guests: 5,
    bedrooms: 3,
    image: "/assets/images/illustrations/page-properties/items-4.jpg",
    amenities: ["Wifi", "Jardin", "Parking"]
  },
  {
    id: 5,
    name: "Studio luxueux à Plateau",
    location: "Plateau, Abidjan",
    type: "Studio",
    price: 25000,
    currency: "FCFA",
    rating: 4.3,
    guests: 2,
    bedrooms: 1,
    image: "/assets/images/illustrations/page-properties/items-5.jpg",
    amenities: ["Wifi", "Climatisation", "Centre ville"]
  },
  {
    id: 6,
    name: "Villa avec piscine à Bouaké",
    location: "Bouaké",
    type: "Villa",
    price: 65000,
    currency: "FCFA",
    rating: 4.7,
    guests: 7,
    bedrooms: 4,
    image: "/assets/images/illustrations/page-properties/items-6.jpg",
    amenities: ["Wifi", "Piscine", "Jardin"]
  }
]

export const categories: Category[] = [
  { name: "Tout", active: true },
  { name: "Villas", active: false },
  { name: "Appartements", active: false },
  { name: "Maisons", active: false },
  { name: "Studios", active: false }
]
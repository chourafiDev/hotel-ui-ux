import {
  Buildings2Icon,
  BuildingsIcon,
  GarageIcon,
  HomeIcon,
  image1,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image2,
  image3,
  image4,
  image8,
  image9,
} from "./assets";

export const navLinks = [
  {
    title: "Hotel",
    link: "/",
  },
  {
    title: "Flight",
    link: "/",
  },
  {
    title: "Travel",
    link: "/",
  },
  {
    title: "Train",
    link: "/",
  },
  {
    title: "Car Rental",
    link: "/",
  },
];

export const destinations = [
  {
    id: 1,
    city: "Villas",
    available: "12,235 available",
    image: image3,
    Icon: HomeIcon,
  },
  {
    id: 2,
    city: "Apartments",
    available: "11,190 available",
    image: image1,
    Icon: BuildingsIcon,
  },
  {
    id: 3,
    city: "Resorts",
    available: "10,098 available",
    image: image2,
    Icon: Buildings2Icon,
  },
  {
    id: 4,
    city: "Cottages",
    available: "19,657 available",
    image: image4,
    Icon: GarageIcon,
  },
];

export const trendingHotel = [
  {
    id: 1,
    title: "Montmartre Majesty Hotel",
    city: "Marseille",
    review: "4.7 (2,564 Reviews)",
    price: 160,
    oldPrice: 180,
    image: image8,
    favorite: false,
  },
  {
    id: 2,
    title: "Elysée Retreat",
    city: "Paris",
    review: "4.8 (3,789 Reviews)",
    price: 150,
    oldPrice: 240,
    image: image9,
    favorite: true,
  },
  {
    id: 3,
    title: "Versailles Vista Inn",
    city: "Strasbourg",
    review: " 4.7 (1,634 Reviews)",
    price: 220,
    image: image10,
    favorite: true,
  },
  {
    id: 4,
    title: "Loire Luxury Lodge",
    city: "Cannes",
    review: "4.9 (2,163 Reviews)",
    price: 350,
    oldPrice: 425,
    image: image11,
    favorite: false,
  },
  {
    id: 5,
    title: "Bella Vista",
    city: "Amalfi Coast, Italy",
    review: "4.4 (1,867 Reviews)",
    price: 267,
    oldPrice: 280,
    image: image12,
    favorite: false,
  },
];

export const mostVisitedHotel = [
  {
    id: 1,
    title: "Azure Oasis",
    city: "Maldives, Maldives",
    review: "4.9 (564 Reviews)",
    price: 500,
    image: image13,
    favorite: false,
  },
  {
    id: 2,
    title: "Opulent Heights",
    city: "Dubai, UAE",
    review: "4.4 (789 Reviews)",
    price: 270,
    oldPrice: 299,
    image: image14,
    favorite: true,
  },
  {
    id: 3,
    title: "Majestic Serenity Palace",
    city: "Kyoto, Japan",
    review: " 4.7 (1,996 Reviews)",
    price: 220,
    image: image15,
    favorite: true,
  },
  {
    id: 4,
    title: "Bella Vista",
    city: "Amalfi Coast, Italy",
    review: "4.9 (2,365 Reviews)",
    price: 350,
    oldPrice: 425,
    image: image16,
    favorite: false,
  },
];
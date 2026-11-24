import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Rental in Tamil Nadu | Discovery Odyssey Travel Group",
  description:
    "Book Sedan, SUVs, Tempo Travellers, Force Urbania and tourist coaches with Discovery Odyssey Travel Group. Comfortable vehicle rentals for family trips, tours and group travel across Tamil Nadu and India.",
  keywords: [
    "Car rental Tamil Nadu",
    "Tempo Traveller rental Tamil Nadu",
    "Force Urbania rental",
    "Tourist coach rental",
    "Outstation vehicle rental",
    "Group travel vehicles",
    "Discovery Odyssey Travel Group",
  ],
};

export default function CarRentalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
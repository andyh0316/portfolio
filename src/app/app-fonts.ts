import { Kanit, Orbitron } from "next/font/google";

// better to read
export const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // All weights available
  display: "swap",
  variable: "--font-kanit",
});

// hard to read but very cool: use for headings
export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Orbitron has all these weights
  display: "swap",
  variable: "--font-orbitron",
});

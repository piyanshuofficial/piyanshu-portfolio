import { DM_Serif_Display, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Piyanshu Agrawal — Senior Product Manager",
  description:
    "Senior Product Manager with ~10 years in B2B product. Rs.24 Cr+ ARR across 800+ enterprise deployments. Builder of platforms, writer of specs, occasional backend engineer.",
  openGraph: {
    title: "Piyanshu Agrawal — Senior Product Manager",
    description:
      "Senior PM with ~10 years in B2B product. Built SpectraOne: 13,144-line FRD, 40+ APIs, 87,982-line React frontend.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

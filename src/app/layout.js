import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "Room Homepage",
  description: "room home page xyz furnitures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>{children}</body>
    </html>
  );
}

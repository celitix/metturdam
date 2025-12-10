import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mettur Dam | Dams In India | Tourist Places In Tamil Nadu | Famous Dams",
  description: "Among various tourist places in Tamil Nadu, is the huge Mettur Dam which is one of the largest Dams in India and being listed in famous dams.",
   icons: {
    icon: [
      { url: '/metturdam-32x32.png', sizes: '16x16', type: 'image/png' },
      { url: '/metturdam-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/metturdam-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

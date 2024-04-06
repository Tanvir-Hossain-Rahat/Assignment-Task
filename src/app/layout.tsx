import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({weight: ['100', "300", '400','500','700','900'], style: ['normal', 'italic'], subsets: ['latin'], display: 'swap'})
const popsins = Poppins({weight: ['100', '200', "300", '400','500','600', '700', '800','900'], style: ['normal', 'italic'], subsets: ['latin'], display: 'swap'})

export const metadata: Metadata = {
  title: "Assessment",
  description: "Learn it, do it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body>{children}</body>
      
    </html>
  );
}

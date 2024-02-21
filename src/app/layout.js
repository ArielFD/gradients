import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gradient Collection",
  description: "Collection of gradients",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/gradientCollection.png",
        href: "/assets/gradientCollection.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/gradientCollection.png",
        href: "/assets/gradientCollection.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
      </body>
    </html>
  );
}

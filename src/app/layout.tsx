import type { Metadata } from "next";
import { Kantumruy_Pro } from "next/font/google";

import "./globals.css";

const kantumruy = Kantumruy_Pro({
  subsets: ["latin"],
  weight: ["400", "700"], // choose what you need
  variable: "--font-kantumruy",
});


export const metadata: Metadata = {
  title: "Qiskit Fall Fest 2025 @ UCLA",
  description: "Join us for the Qiskit Fall Fest at UCLA in 2025! A three-day event filled with workshops, a hackathon, and exciting talks on quantum computing. Whether you're a beginner or an experienced enthusiast, there's something for everyone. Don't miss out on this opportunity to learn, network, and innovate in the world of quantum technology.",
  icons: {
    // Use the vercel.svg you mentioned (placed in public/vercel.svg)
    icon: '/vercel.svg',
    shortcut: '/vercel.svg',
    apple: '/vercel.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            .skip-link {
              position: absolute;
              top: -40px;
              left: 6px;
              background: #000;
              color: #fff;
              padding: 8px;
              text-decoration: none;
              z-index: 1000;
            }
            .skip-link:focus {
              top: 6px;
            }
          `
        }} />
      </head>
      <body
        className={kantumruy.variable}
      >
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <a href="#footer" className="skip-link">Skip to footer</a>
        {children}
      </body>
    </html>
  );
}

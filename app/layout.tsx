import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "./context/ContactModalContext";
import ContactModalWrapper from "./homecomponents/ContactModalWrapper";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Compell Solutions",
  description: "We Build, Scale, and Sell Apps — and Create Powerful Software & Digital Products for Companies That Need Efficiency, Growth, and Innovation.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} antialiased`}>
        <ContactModalProvider>
          {children}
          <ContactModalWrapper />
        </ContactModalProvider>
      </body>
    </html>
  );
}

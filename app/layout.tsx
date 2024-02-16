import { BeforeConferencePage } from "@/components/beforeConference/BeforeConference";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmudTech 2024 | En konferanse av SpareBank 1 Utvikling",
  description: "SmudTech 2024 er en konferanse av SpareBank 1 Utvikling",
};

export const isBeforeConference = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {isBeforeConference && <BeforeConferencePage />}
        {!isBeforeConference && (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}

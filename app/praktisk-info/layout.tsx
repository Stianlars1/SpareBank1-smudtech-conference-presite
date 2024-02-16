import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmudTech 2024 | Praktisk info",
  description: "SmudTech 2024 er en konferanse av SpareBank 1 Utvikling",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

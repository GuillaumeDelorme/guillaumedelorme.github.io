import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guillaume Delorme resume",
  description: "Guillaume Delorme resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 antialiased">{children}</body>
    </html>
  );
}

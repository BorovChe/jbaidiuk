import "./globals.css";
import { Raleway } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JBaidiuk",
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}

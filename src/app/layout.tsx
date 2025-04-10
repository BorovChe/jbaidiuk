import "./globals.css";
import { Raleway } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/main-layout/header";
import Footer from "@/components/main-layout/footer";

export const metadata: Metadata = {
  title: "JBaidiuk | Виглядай так, як відчуваєш",
  description:
    "JBaidiuk — професійний барбер у стилі old school. Класичні чоловічі стрижки з характером. Мінімум слів — максимум стилю.",
  keywords: [
    "барбер",
    "JBaidiuk",
    "стрижки",
    "чоловічі стрижки",
    "барбершоп",
    "старої школи",
    "класичні стрижки",
    "стиль",
  ],
  openGraph: {
    title: "JBaidiuk | Only Quality Haircut",
    description: "Професійний барбер. Якість. Традиція. Стиль.",
    url: "https://jbaidiuk.vercel.app",
    // siteName: "JBaidiuk",
    type: "website",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "JBaidiuk Barber",
      },
    ],
  },
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
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

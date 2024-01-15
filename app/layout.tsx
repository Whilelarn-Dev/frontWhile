import QueryProvider from "@/components/provider/QueryProvider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Eczar } from "next/font/google";
import FirstHeaders from "./components/headers/FirstHeaders";
import "./globals.css";

const inter = Eczar({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "whilelearn",
  description: "",
  keywords: [""],
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "whilelearn",
  abstract: "",
  publisher: "",
  robots: "index, follow",
  openGraph: {
    title: "whilelearawsdcsdcsdcsdn",
    description: "hoijp jpok,plp mkljlih jkjkjh jljhknj fdtrsres rsrse",
    url: "https://www.whilelearn.com/",
    type: "website",
    images: [
      {
        url: "/WhileLearn Logo.png",
        alt: "whilelearn,lkhbjk,knjbn",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scrollbar scrollbar-w-2  scrollbar-track-whileWhhite
     scrollbar-thumb-slate-400/20 scrollbar-thumb-rounded-xl "
    >
      <QueryProvider>
        <body className={inter.className}>
          <FirstHeaders></FirstHeaders>
          {children}
          <Toaster />
        </body>
      </QueryProvider>
    </html>
  );
}

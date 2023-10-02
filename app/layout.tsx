import "./globals.css";
import type { Metadata } from "next";
import { Eczar } from "next/font/google";
import QueryProvider from "@/components/provider/QueryProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Eczar({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "whilelearn",
  description: "",
  keywords: [""],
  applicationName: "whilelearn",
  abstract: "",
  publisher: "",
  robots: "index, follow",
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
     scrollbar-thumb-slate-400/20 scrollbar-thumb-rounded-xl bg-whileWhite"
    >
          <QueryProvider>
      <body className={inter.className}>{children}
      <Toaster />
      </body>
      </QueryProvider>


    </html>
  );
}

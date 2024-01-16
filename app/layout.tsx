import QueryProvider from "@/components/provider/QueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Eczar } from "next/font/google";
import FirstHeaders from "./components/headers/FirstHeaders";
import "./globals.css";

const inter = Eczar({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "whilelearn",
  description:
    "Enhance user satisfaction on your website with ChatGPT integration. Affordable pricing, seamless embedding, regular updates, and tech support. Connect any data and enjoy Arabic language support. Boost customer care effortlessly! نحن نقوم بربط معلومات الموقع وزي معلومات من الملفات مع عقل ChatGPT الذي يتيح لزوار الموقع الدردشة مع ChatGPT والإجابة تكون من الموقع نفسه",
  keywords: [
    "خدمة رعاية العملاء",
    "أسئلة الزوار",
    "رضا المستخدم",
    "تحسين الموقع",
    "تكامل التكلفة المعقولة",
    "الغاء في أي وقت",
    "تضمين ChatGPT",
    "تحديثات البوت",
    "الدعم التقني",
    "تكامل البيانات",
    "دعم اللغة العربية",
    "whilelearn",
    "ربط موقعك الشخصي مع شات جي بي تي",
    "أربط موقعك الشخص مع ChatGPT",
    "ChatGPT integration",
    "Customer Care Service",
    "Visitor Questions",
    "User Satisfaction",
    "Website Enhancement",
    "Affordable Pricing",
    "Cancel Any Time",
    "Embed ChatGPT",
    "Bot Updates",
    "Tech Support",
    "Data Integration",
    "Arabic Language Support",
    "whilelearn",
    "الذكاء الإصطناعي في المواقع",
    "تحسين خدمة العملاد بإستخدام الذكاء الإصطناعي",
    "أربط موقعك مع ChatGPT",
    "ربط البيانات الخاصة مع ChatGPT",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "whilelearn",
  abstract:
    "Elevate your website experience with ChatGPT integration. Boost user satisfaction, provide seamless customer care, and connect with visitors effortlessly.",
  publisher: "Whilelearn",
  robots: {
    index: true,
    follow: true,
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
          <Analytics />
          <Toaster />
        </body>
      </QueryProvider>
    </html>
  );
}

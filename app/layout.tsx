import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/core/footer";
import { ThemeProvider } from "@/providers/theme-provider";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotel Booking",
  description:
    "Hotel Booking simplifies reserving accommodations for your travel needs, offering options to compare prices, amenities, and availability. It ensures a smooth process for securing your ideal stay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-white dark:bg-slate-950`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

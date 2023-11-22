import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "Илья Киселев",
  description: "Портфолио Илья Киселев разработка сайта",
  icons: {
    icon: {
      url: "/favicon.svg",
      type: "image/svg+xml",
    },
  },
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen relative">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

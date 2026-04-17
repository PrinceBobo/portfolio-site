import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import DigitalTwinChat from "@/components/DigitalTwinChat";

export const metadata: Metadata = {
  title: "Muhammad Usman | Portfolio",
  description: "Enterprise meets edgy - Professional portfolio showcasing expertise in AI, development, and innovation.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-full flex flex-col text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <DigitalTwinChat />
        <footer className="border-t border-white/10 mt-20 py-8 bg-black/30">
          <div className="container-custom">
            <div className="text-center text-gray-400">
              <p>© 2026 Muhammad Usman. Crafted with precision and innovation.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

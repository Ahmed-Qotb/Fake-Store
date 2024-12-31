import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar/navBar";
import Footer from "@/components/footer/footer";
import HeadingTitle from "@/components/Header title/headerTitle";
const mainFont = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FakeStore",
  description: "Products gallary using fake store api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <NavBar />
        <HeadingTitle/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

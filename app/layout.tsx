import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/nav/NavBar";
import Footer from "./components/footer/Footer";
import { Poppins } from "next/font/google";
import CartProvider from "@/providers/CartProvider";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Diva Shop",
  description: "E-commerce Diva Shop",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-700`}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          }}
        />
        <CartProvider>
          <div className=" flex flex-col min-h-screen">
            <Navbar />
            <main className=" flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

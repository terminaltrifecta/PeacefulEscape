import "app/globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

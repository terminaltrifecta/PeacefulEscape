import Image from "next/image";
import Stock from "app/assets/stockhome.jpg";
import Card from "@/app/components/card/card";
import Hero from "@/app/components/hero/hero";

export default function Home() {
  return (
    <>
      
      {/* Hero */}
      <Hero/>

      {/* Cards */}
      <div className="p-10 grid gap-10 justify-center md:grid-cols-2">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      
    </>
  );
}

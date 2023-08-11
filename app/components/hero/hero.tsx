import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="justify-center text-center items-center -translate-y-16 lg:justify-start lg:text-left lg: lg:items-start lg:-translate-y-0 flex h-screen text-accent-content">
      <div className="lg:pl-16 lg:pt-24 min-w-fit min-h-fit h-fit flex card z-10">
        <div className="grid gap-4">
          <div className="grid">
            <div className="font-sans text-2xl lg:text-7xl font-extrabold text-neutral stroke">
              Peaceful Escapes
            </div>
            <div className="font-sans text-2xl lg:text-7xl font-extrabold text-neutral stroke">
              Accomodation
            </div>
          </div>
          <div className="text-sm lg:text-2xl tracking-widest font-sans font-light text-neutral">
            Making people feel at home.
          </div>
          <Link href="/about">
            <button className="w-full btn btn-primary text-primary-content">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      <Image
        src="/assets/home2.jpg"
        fill={true}
        alt=""
        className="w-fit mix-blend-multiply object-cover"
      />
    </div>
  );
}

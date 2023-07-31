import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero h-96 text-accent-content">
      <div className="hero-content text-center z-10">
        <div className="grid max-w-md gap-10">
          <h1 className="text-2xl lg:text-5xl break-words font-bold">
            Peaceful Accomodations LLC
          </h1>
          <Link href="/about">
            <button className="btn btn-primary btn-wide">Learn More</button>
          </Link>
        </div>
      </div>

        <Image
          src="/assets/ocean.webp"
          fill={true}
          alt=""
          className="w-fit mix-blend-multiply"
        />

    </div>
  );
}

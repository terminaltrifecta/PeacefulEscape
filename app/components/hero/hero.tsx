import React from "react";
import Link from "next/link";
import Image from "next/image";
import landscape from "public/assets/landscape.jpg";

export default function Hero() {
  return (
    <div className="hero min-h-screen text-accent-content">
      <div className="hero-content text-center z-10">
        <div className="max-w-md -translate-y-20">
          <h1 className="text-3xl lg:text-5xl break-words font-bold">Peaceful Accomodations LLC</h1>
          <p className="py-6">
            Here at Peaceful Accomodations LLC, we offer the best prices for the
            highest quality properties you can find!
          </p>
          <Link href="/about">
            <button className="btn btn-outline btn-primary btn-wide">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <Image
        src={landscape}
        alt=""
        className="w-full h-full mix-blend-multiply"
      />
    </div>
  );
}

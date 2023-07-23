import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl lg:text-5xl break-words font-bold">Peaceful Accomodations LLC</h1>
          <p className="py-6">
            Here at Peaceful Accomodations LLC, we offer the best prices for the
            highest quality properties you can find!
          </p>
          <Link href="/about">
            <button className="btn btn-primary btn-wide">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

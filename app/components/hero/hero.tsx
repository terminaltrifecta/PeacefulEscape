import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Peaceful Accomodations LLC</h1>
          <p className="py-6">
            Here at Peaceful Accomodations LLC, we offer the best prices for the
            highest quality properties you can find!
          </p>
          <button className="btn btn-primary btn-wide">
            <Link href="/about">Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

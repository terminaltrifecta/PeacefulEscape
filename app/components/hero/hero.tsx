import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero h-screen text-accent-content">
      <div className="bg-secondary min-w-fit w-3/4 min-h-fit h-1/4 flex items-center justify-center card bg-opacity-30 -translate-y-10 z-10">
        <div className="grid gap-4 text-center">
          <h1 className="text-2xl lg:text-5xl break-words font-bold text-base-100">
            Peaceful Escape Accomodations
          </h1>
          <Link href="/about">
            <button className="btn btn-primary btn-wide">Learn More</button>
          </Link>
        </div>
      </div>

      <Image
        src="/assets/home.jpg"
        fill={true}
        alt=""
        className="w-fit mix-blend-multiply object-cover"
      />
    </div>
  );
}

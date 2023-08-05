import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero h-screen text-accent-content">
      <div className="min-w-fit w-3/4 min-h-fit h-fit p-4 flex items-center justify-center card -translate-y-10 z-10">
        <div className="grid gap-4 text-center ">
          <div className="text-7xl font-extrabold text-neutral stroke">
            Peaceful Escapes
          </div>
          <div className="text-7xl font-extrabold text-neutral stroke">
            Accomodation
          </div>
          <br />
          <Link href="/about">
            <button className="btn btn-primary btn-wide text-primary-content">
              Learn More
            </button>
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

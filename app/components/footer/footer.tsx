import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <p>
          Peaceful Escapes Accomodation LLC.
          <br />
          Making People Feel At Home
        </p>
      </div>
      <div>
        <span className="footer-title">Locations</span>
        <Link href="/rosevilleaprt" className="link link-hover">
          Roseville Apartment
        </Link>
        <Link href="/roseville" className="link link-hover">
          Roseville Loft
        </Link>
        <Link href="/southfield" className="link link-hover">
          Southfield Home
        </Link>
        <Link href="/warreneast" className="link link-hover">
          Warren Home
        </Link>
        <Link href="/warrenwest" className="link link-hover">
          Warren Bedroom
        </Link>
      </div>
      <div>
        <span className="footer-title">Who am I?</span>
        <Link href="/about" className="link link-hover">
          About Raf
        </Link>
        <br />
        <div className="font-light">Designed by Terminal Trifecta</div>
        <div className="font-light">Reach at (586) 907-6261</div>
        <div className="font-light">or terminaltrifecta@gmail.com</div>
      </div>
    </footer>
  );
}

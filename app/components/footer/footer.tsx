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
        <Link href="/roseville" className="link link-hover">
          Roseville Loft
        </Link>
        <Link href="/southfield" className="link link-hover">
          Southfield Home
        </Link>
        <Link href="/warreneast" className="link link-hover">
          Warren Home (East)
        </Link>
        <Link href="/warrenwest" className="link link-hover">
          Warren Home (West)
        </Link>
      </div>
      <div>
        <span className="footer-title">Who are we?</span>
        <Link href="/about" className="link link-hover">
          About us
        </Link>
      </div>
    </footer>
  );
}

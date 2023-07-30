import React from "react";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <p>
          Peaceful Accomodations LLC.
          <br />
          Making People Feel At Home
        </p>
      </div>
      <div>
        <span className="footer-title">Locations</span>
        <a href="/roseville" className="link link-hover">Roseville Loft</a>
        <a href="/southfield" className="link link-hover">Southfield Home</a>
        <a href="/warreneast" className="link link-hover">Warren Home (East)</a>
        <a href="/warrenwest" className="link link-hover">Warren Home (West)</a>
      </div>
      <div>
        <span className="footer-title">Who are we?</span>
        <a href="/about" className="link link-hover">About us</a>
      </div>
      
    </footer>
  );
}

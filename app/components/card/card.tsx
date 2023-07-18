import Image from "next/image";
import Stock from "app/assets/stockhome.jpg";
import React from "react";

export default function Card() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <Image className="h-full" src={Stock} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
}

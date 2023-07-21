import Image from "next/image";
import Stock from "app/assets/stockhome.jpg";
import React from "react";
import Link from "next/link";

export default function Card({
  headerText,
  paragraphText,
  buttonText,
  buttonPath,
  imageName,
}: any) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <Image className="h-full" src={Stock} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{headerText}</h2>
        <p>{paragraphText}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary w-full">
            <Link className="break-words" href={`${buttonPath}`}>{buttonText}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

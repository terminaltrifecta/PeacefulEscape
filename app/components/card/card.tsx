import Image from "next/image";
import Stock from "public/assets/stockhome.jpg";
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
    <div className="card 2xl:card-side bg-base-100 shadow-2xl">
      <figure className="2xl:w-1/2">
        <Image className="w-full h-full" src={Stock} alt="Album" />
      </figure>
      <div className="card-body 2xl:w-1/2">
        <h2 className="card-title">{headerText}</h2>
        <p className="break-words">{paragraphText}</p>
        <div className="card-actions justify-start">
          <Link className="break-words" href={`${buttonPath}`}>
            <button className="btn btn-primary w-full text-white">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

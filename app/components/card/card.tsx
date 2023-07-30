import Image from "next/image";
import Stock from "public/assets/stockhome.jpg";
import React from "react";
import Link from "next/link";

export default function Card({
  headerText,
  paragraphText,
  buttonText,
  buttonPath,
  imagePath,
  hasButton,
  hasImage,
  hasTwoLines
}: any) {
  return (
    <div className="join-item card 2xl:card-side bg-base-100 shadow-2xl">

    {hasImage === "true" ? (
      <figure className="2xl:w-1/2">
        <Image width={512} height={512} className="w-full h-full" src={imagePath} alt="Album" />
      </figure>
    ) : (
      <div></div>
    )}

      <div className="card-body 2xl:w-1/2">
        <h2 className="card-title">{headerText}</h2>
        <p className="break-words">{paragraphText}</p>
        <div className="card-actions justify-start">

        {hasButton === "true" ? (
          <Link className="break-words" href={`${buttonPath}`}>
            <button className="btn btn-primary w-full text-white">{buttonText}</button>
          </Link>
        ) : (
          <div></div>
        )}
        </div>
      </div>
    </div>
  );
}

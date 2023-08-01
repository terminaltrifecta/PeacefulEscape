import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function SearchResult({ result }: any) {
  return (
    <Link href={result.href}>
      <div className="sm:grid sm:grid-cols-3 gap-x-2 w-full join-item hover:bg-primary-focus hover:text-base-content">
        <div className="">
          <Image
            src={result.image}
            width={256}
            height={256}
            alt=""
            className="h-fit w-full sm:h-full object-fill"
          />
        </div>
        <div className="grid grid-rows sm:col-span-2 p-2">
          <div className="font-bold">{result.name}</div>
          <div className="font-light text-xs text-gray-500">
            {result.location}
          </div>
        </div>
        <hr className="border-secondary"/>
      </div>
    </Link>
  );
}

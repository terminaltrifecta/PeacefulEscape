import Link from "next/link";
import React from "react";

export default function SearchResult({ result }: any) {
  return (
    <Link href={result.href}>
      <div className="p-2 join-item bg-primary hover:bg-base-300 hover:text-base-content">
        {result.name}
      </div>
    </Link>
  );
}

import Link from "next/link";
import React from "react";

export default function SearchResult({ result }: any) {
  return (
    <div className="p-2 join-item bg-primary hover:bg-base-300 hover:text-base-content">      
      <Link href={result.href}>
      {result.name}
      </Link>
    </div>
  );
}

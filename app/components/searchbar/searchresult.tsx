import React from "react";

export default function SearchResult({ result }: any) {
  return (
    <div className="p-2 join-item bg-primary hover:bg-base-300 hover:text-base-content"
    onClick={(e) => {alert(result.name)}}>
      {result.name}
    </div>
  );
}

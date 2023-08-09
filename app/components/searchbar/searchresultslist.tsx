import React from "react";
import SearchResult from "./searchresult";

export default function SearchResultsList({ results }: any) {
  return (
    <div className="gap-1 bg-primary join join-vertical absolute translate-y-16 grid max-h-80 overflow-y-scroll">
      {results.map((result: any) => (
        <SearchResult key={result.id} result={result} />
      ))}
    </div>
  );
}

import React from "react";
import SearchResult from "./searchresult";

export default function Searchresultslist({ results }: any) {
  return (
    <div className="w-1/3 lg:w-1/6 join join-vertical absolute translate-y-16 grid max-h-80 overflow-y-scroll">
      {results.map((result: any, id: any) => {
        return (
          <SearchResult result={result}/>
        );
      })}
    </div>
  );
}

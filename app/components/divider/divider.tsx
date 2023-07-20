import React from "react";

export default function Divider({ ContentLeft, ContentRight }: any) {
  return (
    <div className="flex w-full">
      <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
        {ContentLeft}
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
        {ContentRight}
      </div>
    </div>
  );
}

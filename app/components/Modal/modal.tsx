import React from "react";
import { HomeIcon, WifiIcon } from "@heroicons/react/24/solid";

export default function Modal(id: any) {
  
  const handleChange = () => {
    console.log("my_modal_" + id.id);
    if (document && id.id) {
      (
        document.getElementById("my_modal_" + id.id) as HTMLFormElement
      ).showModal();
    }
  };

  return (
    <div className="">
      <button className="w-full btn btn-primary" onClick={handleChange}>
        Show Ameneties
      </button>
    </div>
  );
}

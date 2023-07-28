import React from "react";
import { HomeIcon, WifiIcon } from "@heroicons/react/24/solid";


export default function Modal({
    amenIcon1,
    amenText1,
    amenIcon2,
    amenText2,
    amenIcon3,
    amenText3,
    amenIcon4,
    amenText4,
    amenIcon5,
    amenText5,
    amenIcon6,
    amenText6
}: any) {
    return(
<>

<button
  className="btn-primary p-4 gap-5 card bg-purple-500"
  onClick={() => {
    if (document) {
      (document.getElementById('my_modal_2') as HTMLFormElement).showModal();
    }
  }}  
>

    <div className="text-3xl font-extrabold text-center">
        Amenities
        </div>
        <hr className="border-base-200" />
        <div className="inline-grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="flex gap-x-3">
                <HomeIcon className="h-6" />
                <p>{amenText1}</p>
            </div>
            <div className="flex gap-x-3">
                <HomeIcon className="h-6" />
                <p>{amenText2}</p>
            </div>
            <div className="flex gap-x-3">
                <HomeIcon className="h-6" />
                <p>{amenText3}</p>
            </div>
            <div className="flex gap-x-3">
                <HomeIcon className="h-6" />
                <p>{amenText4}</p>
            </div>
            <div className="flex gap-x-3">
                <HomeIcon className="h-6" />
                <p>{amenText5}</p>
            </div>
            <div className="flex gap-x-3">
                <HomeIcon className="h-6" />
                <p>{amenText6}</p>
            </div>
        </div>

</button>


<dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

</>     

    );
}
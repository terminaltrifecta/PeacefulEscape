import Layout from "@/app/components/layout";
import Proplayout from "@/app/components/proplayout/proplayout";
import Slideshow from "@/app/components/slideshow/slideshow";
import { HomeIcon, WifiIcon } from "@heroicons/react/24/solid";
import Modal from "@/app/components/Modal/modal";

export default function WarrenWest() {
  return (
    <div className="justify-center flex">
      <div className="propertylayout justify-center grid p-8 gap-8">
        <div className="text-2xl font-bold text-white text-center justify-center">
        Cheerful Bedroom in a Cozy Home (West Warren)
        </div>
        <div className="slideshow p-4 bg-primary w-full join grid gap-2">
          <Slideshow
            slide2="/assets/warrenWestLocation/warrenWest1.webp"
            slide1="/assets/warrenWestLocation/warrenWest2.webp"
            slide3="/assets/warrenWestLocation/warrenWest3.webp"
            slide4="/assets/warrenWestLocation/warrenWest4.webp"
            slide6="/assets/warrenWestLocation/warrenWest5.webp"
            slide5="/assets/warrenWestLocation/warrenWest6.webp"
          />
        </div>
        <hr className="border-base-200" />


        <div className="p-4 h-36 card bg-primary text-white flex items-center flex-row">
          <b>About this place</b>
          <div className="divider divider-horizontal rounded-full bg-purple-500"></div>
          <p>
          Enjoy a private room. in a quiet neighborhood. The house is centrally located and close to shopping malls and major freeways.
          </p>
        </div>
        <hr className="border-base-200" />
        <div className="p-4 h-36 xl:h-80 card bg-primary text-white">Hai</div>
        <hr className="border-base-200" />

        <div className="p-4 gap-5 card bg-primary text-white">
          <div className="text-3xl font-extrabold text-center">
            Things to Know
          </div>
          <hr className="border-base-200" />
          <div className="inline-grid grid-cols-2">
            <div className="">
              <div className="font-bold">Guest Access</div>
              <div>Driveway and street parking are allowed.</div>
            </div>
            <div className="col">
              <div className="font-bold">During your stay</div>
              <div>I can be home to interact with guests if they want to.</div>
            </div>
          </div>
        </div>
        <hr className="border-base-200" />


      <Modal
      amenText1="one"
      amenText2="too"
      amenText3="free"
      amenText4="fowr"
      amenText5="fiyve"
      amenText6="secks"
      />

      
      </div>
    </div>
  );
}

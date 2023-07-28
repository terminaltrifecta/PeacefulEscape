import Layout from "@/app/components/layout";
import Proplayout from "@/app/components/proplayout/proplayout";
import Slideshow from "@/app/components/slideshow/slideshow";
import { HomeIcon, WifiIcon } from "@heroicons/react/24/solid";
import Modal from "@/app/components/Modal/modal";

export default function Southfield() {
  return (
    <div className="justify-center flex">
      <div className="propertylayout justify-center grid p-8 gap-8">
        <div className="text-2xl font-bold text-white text-center justify-center">
          Exotic Mediterranean Oasis
        </div>
        <div className="slideshow p-4 bg-primary w-full join grid gap-2">
          <Slideshow
            slide1="/assets/southfieldLocation/southfield1.jpg"
            slide2="/assets/southfieldLocation/southfield2.jpg"
            slide3="/assets/southfieldLocation/southfield3.jpg"
            slide4="/assets/southfieldLocation/southfield4.jpg"
            slide5="/assets/southfieldLocation/southfield5.jpg"
            slide6="/assets/southfieldLocation/southfield6.jpg"
          />
        </div>
        <hr className="border-base-200" />

        <div className="p-4 h-36 card bg-primary text-white flex items-center flex-row">
          <b>Enjoy a beautiful Mediterranean styled home.</b>
          <div className="divider divider-horizontal rounded-full bg-purple-500"></div>
          <p>
            In a peaceful neighborhood. The house is situated close to shopping
            malls and major freeways, allowing for easy transportation to all
            your favorite locations.
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
              <div className="font-bold">Guest access</div>
              <div>My guests have excess to kitchen .living room, Moroccan room, and the patio. You also get free parking.</div>
            </div>
            <div className="col">
              <div className="font-bold">Other things to note</div>
              <div>As a precautionary measure, security cameras are installed outside of the house. The house has a keyless pad lock for the convenience of my guests. No need to carry a key around or worry about losing it.</div>
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

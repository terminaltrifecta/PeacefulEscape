import Layout from "@/app/components/layout";
import Proplayout from "@/app/components/proplayout/proplayout";
import Slideshow from "@/app/components/slideshow/slideshow";
import { HomeIcon, WifiIcon } from "@heroicons/react/24/solid";

export default function WarrenWest() {
  return (
    <div className="justify-center flex">
      <div className="propertylayout justify-center grid p-8 gap-8">
        <div className="text-2xl font-bold text-white text-center justify-center">
        Cheerful Bedroom in a Cozy Home (West Warren)
        </div>
        <div className="slideshow p-4 bg-primary w-full join grid gap-2">
          <Slideshow
            slide2="/assets/warrenWestLocation/warrenWest1.jpg"
            slide1="/assets/warrenWestLocation/warrenWest2.jpg"
            slide3="/assets/warrenWestLocation/warrenWest3.jpg"
            slide4="/assets/warrenWestLocation/warrenWest4.jpg"
            slide6="/assets/warrenWestLocation/warrenWest5.jpg"
            slide5="/assets/warrenWestLocation/warrenWest6.jpg"
          />
        </div>
        <hr className="border-base-200" />

        <div className="p-4 h-36 card bg-primary text-white flex items-center flex-row">
          <b>About this place</b>
          <div className="divider divider-horizontal rounded-full bg-purple-500"></div>
          <p>
          warren west about
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
          <div className="inline-grid grid-cols-3">
            <div className="">
              <div className="font-bold">House rules</div>
              <div>House rules</div>
            </div>
            <div className="col">
              <div className="font-bold">Safety & property</div>
              <div>Safety & property</div>
            </div>
            <div className="col">
              <div className="font-bold">Cancellation policy</div>
              <div>Cancellation policy</div>
            </div>
          </div>
        </div>
        <hr className="border-base-200" />

        <div className="p-4 card bg-purple-500">
          <div className="inline-grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="flex gap-x-3">
              <HomeIcon className="h-6" />
              <p>Four Bedrooms</p>
            </div>
            <div className="flex gap-x-3">
              <WifiIcon className="h-6" />
              <p>Chimeny</p>
            </div>
            <div className="flex gap-x-3">
              <HomeIcon className="h-6" />
              <p>Four Bedrooms</p>
            </div>
            <div className="flex gap-x-3">
              <HomeIcon className="h-6" />
              <p>Four Bedrooms</p>
            </div>
            <div className="flex gap-x-3">
              <HomeIcon className="h-6" />
              <p>Four Bedrooms</p>
            </div>
            <div className="flex gap-x-3">
              <HomeIcon className="h-6" />
              <p>Four Bedrooms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

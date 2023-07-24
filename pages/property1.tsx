import Layout from "@/app/components/layout";
import Proplayout from "@/app/components/proplayout/proplayout";
import Slideshow from "@/app/components/slideshow/slideshow";
import { HomeIcon, WifiIcon } from "@heroicons/react/24/solid";

export default function Property1() {
  return (
    <div className="justify-center flex">
      <div className="propertylayout justify-center grid p-8 gap-8 text-accent-content">
        <div className="text-xl font-bold text-center justify-center">
          Cheerful bedroom in a Cozy home
        </div>
        <div className="slideshow w-full join grid gap-2">
          <Slideshow />
        </div>
        <hr className="border-base-200" />

        <div className="p-4 h-36 card bg-primary">
          <b>The space Enjoy a private room.</b> in a quiet neighborhood. The
          house is centrally located and close to shopping malls and major
          freeways.
        </div>
        <hr className="border-base-200" />
        <div className="p-4 h-36 xl:h-80 card bg-primary">Hai</div>
        <hr className="border-base-200" />

        <div className="p-4 gap-5 card bg-primary">
          <div className="text-2xl">Things to Know</div>
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

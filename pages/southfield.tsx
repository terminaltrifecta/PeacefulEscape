import Layout from "@/app/components/layout";
import Proplayout from "@/app/components/proplayout/proplayout";
import Slideshow from "@/app/components/slideshow/slideshow";
import { HomeIcon, WifiIcon } from "@heroicons/react/24/solid";

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
        <div className="p-4 card bg-primary text-white flex">
          <b>Check out Customer Reviews!</b>
          <div className="reviewBody flex">
            <div className="items-start p-2 w-1/2">
              <p>
                "We enjoyed our stayed. Ralf was very attentive and always made
                sure we didn't have any questions or needed anything. GREAT
                HOST!" - Yaleb, a past customer
              </p>
            </div>
            <div className="divider divider-horizontal rounded-full bg-purple-500 w-2"></div>
            <div className="items-end p-2 w-1/2">
              <p>
                "Mr. Raf responded quickly. He made my family feel comfortable
                in his home. He is extremely kind and welcoming! Nice clean
                home, we didn’t have any issues! This home was perfect for our
                family trip to Michigan." - Dominque, another past customer
              </p>
            </div>
          </div>
        </div>
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

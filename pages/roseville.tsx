import Layout from "@/app/components/layout";
import Proplayout from "@/app/components/proplayout/proplayout";
import Slideshow from "@/app/components/slideshow/slideshow";
import { HomeIcon, WifiIcon } from "@heroicons/react/24/solid";
import Modal from "@/app/components/Modal/modal";

export default function Roseville() {
  return (
    <div className="justify-center flex">
      <div className="bgpattern bg-base-100 propertylayout justify-center grid p-8 gap-8">
        <div className="text-2xl font-bold text-accent-content text-center justify-center">
          Modern Spacious Loft
        </div>
        <div className="shadow-2xl slideshow p-4 bg-primary w-full join grid gap-2">
          <Slideshow
            slide2="/assets/rosevilleLocation/roseville2.webp"
            slide1="/assets/rosevilleLocation/roseville1.webp"
            slide3="/assets/rosevilleLocation/roseville3.webp"
            slide4="/assets/rosevilleLocation/roseville4.webp"
            slide5="/assets/rosevilleLocation/roseville5.webp"
            slide6="/assets/rosevilleLocation/roseville6.webp"
          />
        </div>
        <hr className="border-base-200" />

        <div className="p-4 card bg-primary text-white flex flex-row">
          <b>About this place</b>
          <div className="divider divider-horizontal rounded-full bg-purple-500"></div>
          <div className="">
            When you rent this beautiful space, you’ll experience the modern
            loft lifestyle living. With over 1200 sq feet of space, two large
            bedrooms, a huge kitchen with brand new appliances, tons of living
            space, a stunning remodeled bathroom, and private access to the
            apartment. This apartment is conveniently located in the heart of
            the city, within walking distance to grocery stores and major city
            freeways.
          </div>
        </div>
        <hr className="border-base-200" />
        <div className="p-4 gap-5 card bg-primary text-white flex">
          <div className="text-3xl font-extrabold text-center">
            Customer Reviews
          </div>
          <hr className="border-yellow" />
          <div className="reviewBody flex">
            <div className="items-start p-2 w-1/2">
              <p>
                "We enjoyed our stayed. Ralf was very attentive and always made
                sure we didn't have any questions or needed anything. GREAT
                HOST!" - Yaleb, a past customer
              </p>
            </div>
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

        <div className="p-4 gap-5 card shadow-2xl bg-primary text-white">
          <div className="text-3xl font-extrabold text-center">
            Things to Know
          </div>
          <hr className="border-yellow" />
          <div className="inline-grid grid-cols-2">
            <div className="p-2">
              <div className="font-bold">Guest access</div>
              <div>
                My guests have access to the kitchen, living room, Moroccan
                room, and the patio. You also get free parking.
              </div>
            </div>
            <div className="p-2">
              <div className="font-bold">Other things to note</div>
              <div>
                As a precautionary measure, security cameras are installed
                outside of the house. The house has a keyless padlock for the
                convenience of my guests, so there's no need to carry a key
                around or worry about losing it.
              </div>
            </div>
          </div>
        </div>
        <hr className="border-base-200" />

        <Modal id="3" />

        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box">
            <div className="grid w-full">
              <div className="p-4">
                <h3 className="font-bold text-lg">Bathroom</h3>

                <li>Hair dryer</li>
                <li>Shampoo</li>
                <li>Hot water</li>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Bedroom and laundry</h3>

                <li>Free washer - In unit</li>
                <li>Free dryer - In unit</li>
                <li>Essentials (Towels, bed sheets, soap, toilet paper)</li>
                <li>Hangers</li>
                <li>Iron</li>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Entertainment</h3>

                <li>
                  <li>TV</li>
                  <li>Exercise equipment</li>
                </li>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Family</h3>

                <li>Crib</li>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Heating and cooling</h3>

                <li>Security cameras on property (outside of property)</li>
                <li>Smoke alarm</li>
                <li>Carbon monoxide alarm</li>
                <li>Fire extinguisher</li>
                <li>First aid kit</li>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg">Internet and office</h3>

                <li>Wifi</li>
                <li>Dedicated workspace</li>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Kitchen and dining</h3>

                <li>Kitchen</li>
                <li>Refrigerator</li>
                <li>Microwave</li>
                <li>Cooking basics (Pots and pans, oil, salt, pepper)</li>
                <li>
                  Dishes and silverware (Bowls, chopsticks, plates, cups, etc.)
                </li>
                <li>Stove</li>
                <li>Oven</li>
                <li>Coffee maker</li>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Outdoor</h3>

                <li>Backyard</li>
                <li>Outdoor furniture</li>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Parking and facilities</h3>

                <li>Free parking on premises</li>
                <li>Free street parking</li>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Services</h3>

                <li>Pets allowed</li>
                <li>Self check-in</li>
                <li>Keypad</li>
              </div>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}

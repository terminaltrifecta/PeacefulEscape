import Layout from "@/app/components/layout";
import Proplayout from "@/app/components/proplayout/proplayout";
import Slideshow from "@/app/components/slideshow/slideshow";
import { HomeIcon, WifiIcon } from "@heroicons/react/24/solid";
import Modal from "@/app/components/Modal/modal";

export default function Roseville() {
  return (
    <div className="justify-center flex">
      <div className="propertylayout justify-center grid p-8 gap-8">
        <div className="text-2xl font-bold text-white text-center justify-center">
        Modern Spacious Loft (Roseville) 
        </div>
        <div className="slideshow p-4 bg-primary w-full join grid gap-2">
          <Slideshow
            slide1="/assets/rosevilleLocation/roseville1.webp"
            slide2="/assets/rosevilleLocation/roseville2.webp"
            slide3="/assets/rosevilleLocation/roseville3.webp"
            slide4="/assets/rosevilleLocation/roseville4.webp"
            slide5="/assets/rosevilleLocation/roseville5.webp"
            slide6="/assets/rosevilleLocation/roseville6.webp"
          />
        </div>
        <hr className="border-base-200" />

        <div className="p-4 h-36 card bg-primary text-white flex items-center flex-row">
          <b>About this place</b>
          <div className="divider divider-horizontal rounded-full bg-purple-500"></div>
          <p>
            When you rent this beautiful space, you’ll experience the modern loft lifestyle living. With over 1200 sq feet of space, two large bedrooms, a huge kitchen with brand new appliances, tons of living space, a stunning remodeled bathroom, and private access to the apartment. This apartment is conveniently located in the heart of the city, within walking distance to grocery stores and major city freeways.
          </p>
        </div>
        <hr className="border-base-200" />

        <div className="p-4 gap-5 card bg-primary text-white">
          <div className="text-3xl font-extrabold text-center">
            Things to Know
          </div>
          <hr className="border-base-200" />
          <div className="inline-grid grid-cols-2">
            <div className="">
              <div className="font-bold">Guest access</div>
              <div>Guests have access to the whole apartment.</div>
            </div>
            <div className="col">
              <div className="font-bold">The space</div>
              <div>For the safety and comfort of all our guests, this apartment is following CDC guidance to ensure every guest has a clean place to stay. Some of the steps we are taking include:

Thoroughly disinfecting the entire apartment, including countertops, doorknobs, faucets, light switches, remote control units, and all appliances. We have also stocked up on extra supplies such as soaps and cleaning products in case you need them (yes, including toilet paper).
Minimizing in-person contact with our guests whenever possible. You will enjoy this sunny and peaceful private loft.</div>
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

      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <div className="grid w-full">


            <div className="p-4">
              <h3 className="font-bold text-lg">Bathroom</h3>

                <li>
                  Hair dryer
                </li>
                <li>
                  Shampoo
                </li>
                <li>
                  Hot water
                </li>

            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Bedroom and laundry</h3>

                <li>
                  Free washer - In unit
                </li>
                <li>
                  Free dryer - In unit
                </li>
                <li>
                  Essentials (Towels, bed sheets, soap, toilet paper)
                </li>
                <li>
                  Hangers
                </li>
                <li>
                  Iron
                </li>

            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Entertainment</h3>

                <li>
                  <li>
                    TV
                  </li>
                  <li>
                    Exercise equipment
                  </li>
                </li>

            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Family</h3>

                <li>
                  Crib
                </li>

            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Heating and cooling</h3>

                <li>
                  Security cameras on property (outside of property)
                </li>
                <li>
                  Smoke alarm
                </li>
                <li>
                  Carbon monoxide alarm
                </li>
                <li>
                  Fire extinguisher
                </li>
                <li>
                  First aid kit
                </li>

            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg">Internet and office</h3>

                <li>
                  Wifi
                </li>
                <li>
                  Dedicated workspace
                </li>

            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Kitchen and dining</h3>

                <li>
                  Kitchen
                </li>
                <li>
                  Refrigerator
                </li>
                <li>
                  Microwave
                </li>
                <li>
                  Cooking basics (Pots and pans, oil, salt, pepper)
                </li>
                <li>
                  Dishes and silverware (Bowls, chopsticks, plates, cups, etc.)
                </li>
                <li>
                  Stove
                </li>
                <li>
                  Oven
                </li>
                <li>
                  Coffee maker
                </li>

            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Outdoor</h3>

                <li>
                  Backyard
                </li>
                <li>
                  Outdoor furniture
                </li>

            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Parking and facilities</h3>

                <li>
                  Free parking on premises
                </li>
                <li>
                  Free street parking
                </li>

            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Services</h3>

                <li>
                  Pets allowed
                </li>
                <li>
                  Self check-in
                </li>
                <li>
                  Keypad
                </li>

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

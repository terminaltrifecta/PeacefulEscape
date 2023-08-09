import Layout from "@/app/components/layout";
import Proplayout from "@/app/components/proplayout/proplayout";
import Slideshow from "@/app/components/slideshow/slideshow";
import { HomeIcon, WifiIcon } from "@heroicons/react/24/solid";
import Modal from "@/app/components/Modal/modal";
import Card from "@/app/components/card/card";
import Calendar from "@/app/components/calendar/calendar";
import Priceblock from "@/app/components/searchbar/priceblock/priceblock";

export default function Southfield() {
  return (
    <div className="justify-center flex">
      <div className="bgpattern bg-base-100 grid p-9 gap-9 justify-between">
        <div className="text-5xl font-bold  text-center justify-center">
          Modern Spacious Loft
        </div>

        <div className="text-2xl font-bold  text-center justify-center">
          8 guests · 2 bedrooms · 3 beds · 1 bath
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 justify-center gap-5">
          <div className="col-span-1 md:col-span-3 grid gap-5">
            <div className="shadow-2xl slideshow p-4 bg-neutral w-full join grid gap-2">
              <Slideshow
                slide2="/assets/rosevilleLocation/roseville2.jpg"
                slide1="/assets/rosevilleLocation/roseville1.jpg"
                slide3="/assets/rosevilleLocation/roseville3.jpg"
                slide4="/assets/rosevilleLocation/roseville4.jpg"
                slide5="/assets/rosevilleLocation/roseville5.jpg"
                slide6="/assets/rosevilleLocation/roseville6.jpg"
              />
            </div>
            <hr className="border-secondary" />

            <div className="p-4 gap-5 card bg-neutral text-accent-content flex md:flex-row">
              <div className="font-bold">About this place</div>
              <div>
                When you rent this beautiful space, you’ll experience the modern
                loft lifestyle living. With over 1200 sq feet of space, two
                large bedrooms, a huge kitchen with brand new appliances, tons
                of living space, a stunning remodeled bathroom, and private
                access to the apartment. This apartment is conveniently located
                in the heart of the city, within walking distance to grocery
                stores and major city freeways.
              </div>
            </div>
            <hr className="border-secondary" />
            <div className="p-4 gap-5 card bg-neutral text-accent-content flex">
              <div className="text-3xl font-extrabold text-center">
                Customer Reviews
              </div>
              <hr className="border-yellow" />
              <div className="reviewBody grid gap-5 md:grid-cols-2">
                <p>
                  "We enjoyed our stayed. Ralf was very attentive and always
                  made sure we didn't have any questions or needed anything.
                  GREAT HOST!" - Yaleb, a past customer
                </p>
                <p>
                  "Mr. Raf responded quickly. He made my family feel comfortable
                  in his home. He is extremely kind and welcoming! Nice clean
                  home, we didn’t have any issues! This home was perfect for our
                  family trip to Michigan." - Dominque, another past customer
                </p>
              </div>
            </div>
            <hr className="border-secondary" />

            <div className="p-4 gap-5 card shadow-2xl bg-neutral text-accent-content">
              <div className="text-3xl font-extrabold text-center">
                Things to Know
              </div>
              <hr className="border-yellow" />
              <div className="grid gap-5 md:grid-cols-2">
                <div className="p-2">
                  <div className="font-bold">House rules</div>
                  <li className="list-inside">Check-in after 5:00 PM</li>
                  <li className="list-inside">Checkout before 11:00 AM</li>
                  <li className="list-inside">Self check-in with keypad</li>
                  <li className="list-inside">Pets allowed</li>
                  <li className="list-inside">No parties or events</li>
                  <li className="list-inside">No smoking</li>
                </div>
                <div className="p-2">
                  <div className="font-bold">Safety & Property</div>
                  <li className="list-inside">
                    Security camera outside of property
                  </li>
                  <li className="list-inside">
                    Carbon monoxide alarm installed
                  </li>
                  <li className="list-inside">Smoke alarm installed</li>
                  <li className="list-inside">
                    Potential noise during the day
                  </li>
                  <li className="list-inside">
                    Apartment is on the second floor, guests must climb stairs.
                  </li>
                </div>
              </div>
            </div>
            <hr className="border-secondary" />

            <Modal id="3" />

            <dialog id="my_modal_3" className="modal">
              <form method="dialog" className="modal-box">
                <div className="grid w-full">
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Bathroom</h3>

                    <li className="list-inside">Hair dryer</li>
                    <li className="list-inside">Shampoo</li>
                    <li className="list-inside">Hot water</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Bedroom and laundry</h3>

                    <li className="list-inside">Free washer - In unit</li>
                    <li className="list-inside">Free dryer - In unit</li>
                    <li className="list-inside">
                      Essentials (Towels, bed sheets, soap, toilet paper)
                    </li>
                    <li className="list-inside">Hangers</li>
                    <li className="list-inside">Iron</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Entertainment</h3>

                    <li className="list-inside">TV</li>
                    <li className="list-inside">Exercise equipment</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Family</h3>

                    <li className="list-inside">Crib</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Heating and cooling</h3>

                    <li className="list-inside">
                      Security cameras on property (outside of property)
                    </li>
                    <li className="list-inside">Smoke alarm</li>
                    <li className="list-inside">Carbon monoxide alarm</li>
                    <li className="list-inside">Fire extinguisher</li>
                    <li className="list-inside">First aid kit</li>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-lg">Internet and office</h3>

                    <li className="list-inside">Wifi</li>
                    <li className="list-inside">Dedicated workspace</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Kitchen and dining</h3>

                    <li className="list-inside">Kitchen</li>
                    <li className="list-inside">Refrigerator</li>
                    <li className="list-inside">Microwave</li>
                    <li className="list-inside">
                      Cooking basics (Pots and pans, oil, salt, pepper)
                    </li>
                    <li className="list-inside">
                      Dishes and silverware (Bowls, chopsticks, plates, cups,
                      etc.)
                    </li>
                    <li className="list-inside">Stove</li>
                    <li className="list-inside">Oven</li>
                    <li className="list-inside">Coffee maker</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Outdoor</h3>

                    <li className="list-inside">Backyard</li>
                    <li className="list-inside">Outdoor furniture</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">
                      Parking and facilities
                    </h3>

                    <li className="list-inside">Free parking on premises</li>
                    <li className="list-inside">Free street parking</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Services</h3>

                    <li className="list-inside">Pets allowed</li>
                    <li className="list-inside">Self check-in</li>
                    <li className="list-inside">Keypad</li>
                  </div>
                </div>
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
          <div className="md:col-start-4 md:col-span-2">
            <div className="grid sticky top-20 gap-5">
              <div className="card shadow-2xl bg-neutral">
                <Calendar />
              </div>

              <Priceblock
                minGuests={1}
                maxGuests={8}
                minNights={4}
                maxNights={30}
                basePricePerNight={136}
                extraGuestChargePerNight={15}
                guestThresholdForExtraCharge={6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

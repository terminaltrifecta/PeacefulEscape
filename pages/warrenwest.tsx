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
          Cheerful Bedroom in a Cozy Home
        </div>
        <div className="text-lg lg:text-2xl font-thin  text-center justify-center">
          Warren, Michigan
        </div>
        <div className="text-2xl font-bold  text-center justify-center">
          2 guests · 1 bedrooms · 1 bed · Shared bathroom
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 justify-center gap-5">
          <div className="col-span-1 md:col-span-3 grid gap-5">
            <div className="shadow-2xl slideshow p-4 bg-neutral w-full join grid gap-2">
              <Slideshow
                slide1="/assets/warrenWestLocation/warrenwest1.webp"
                slide2="/assets/warrenWestLocation/warrenwest2.webp"
                slide3="/assets/warrenWestLocation/warrenwest3.webp"
                slide4="/assets/warrenWestLocation/warrenwest4.webp"
                slide6="/assets/warrenWestLocation/warrenwest5.webp"
                slide5="/assets/warrenWestLocation/warrenwest6.webp"
              />
            </div>
            <hr className="border-secondary" />

            <div className="p-4 gap-5 card bg-neutral text-accent-content flex md:flex-row">
              <div className="font-bold">About this place</div>
              <div>
                Enjoy a private room in a quiet neighborhood. The house is
                centrally located and close to shopping malls and major
                freeways.
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
                  &quot;We enjoyed our stayed. Ralf was very attentive and
                  always made sure we didn&apos;t have any questions or needed
                  anything. GREAT HOST!&quot; - Yaleb, a past customer
                </p>
                <p>
                  &quot;Mr. Raf responded quickly. He made my family feel
                  comfortable in his home. He is extremely kind and welcoming!
                  Nice clean home, we didn&apos;t have any issues! This home was
                  perfect for our family trip to Michigan.&quot; - Dominque,
                  another past customer
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
                  <div className="font-bold">Guest access</div>
                  <li className="list-inside">Check-in after 5:00 PM</li>
                  <li className="list-inside">Checkout before 11:00 AM</li>
                  <li className="list-inside">Self check-in with keypad</li>
                  <li className="list-inside">2 guests maximum</li>
                  <li className="list-inside">Pets allowed</li>
                  <li className="list-inside">
                    Quiet hours: 9:00 PM - 8:00 AM
                  </li>
                  <li className="list-inside">No parties or events</li>
                  <li className="list-inside">
                    Commercial photography allowed
                  </li>
                  <li className="list-inside">No smoking</li>
                </div>
                <div className="p-2">
                  <div className="font-bold">Safety & Property</div>
                  <li className="list-inside">
                    Carbon monoxide alarm installed
                  </li>
                  <li className="list-inside">Smoke alarm installed</li>
                  <li className="list-inside">
                    Some spaces are shared: Kitchen, living room, backyard, and
                    the bathroom are all shared with the host.
                  </li>
                </div>
              </div>
            </div>
            <hr className="border-secondary" />

            <Modal id="5" />
            <dialog id="my_modal_5" className="modal">
              <form method="dialog" className="modal-box">
                <div className="grid w-full">
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Scenic Views</h3>
                    <li className="list-inside">Garden View</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Bathroom</h3>
                    <li className="list-inside">Hair dryer</li>
                    <li className="list-inside">Cleaning products</li>
                    <li className="list-inside">Shampoo</li>
                    <li className="list-inside">Dove conditioner</li>
                    <li className="list-inside">Dove body soap</li>
                    <li className="list-inside">Hot water</li>
                  </div>
                  <div className="p-4 grid-row-1">
                    <h3 className="font-bold text-lg">Bedroom and laundry</h3>
                    <li className="list-inside">Free washer - In unit</li>
                    <li className="list-inside">Free dryer - In unit</li>
                    <li className="list-inside">
                      Essentials (Towels, bed sheets, soap, toilet paper)
                    </li>
                    <li className="list-inside">Hangers</li>
                    <li className="list-inside">Bed linens</li>
                    <li className="list-inside">Extra pillows and blankets</li>
                    <li className="list-inside">Room-darkening shades</li>
                    <li className="list-inside">Iron</li>
                    <li className="list-inside">Clothing storage (closet)</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Entertainment</h3>
                    <li className="list-inside">
                      43&quot; TV with Hulu, Roku, Amazon Prime Video, Netflix,
                      Apple TV
                    </li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Family</h3>
                    <li className="list-inside">Crib</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Heating and cooling</h3>
                    <li className="list-inside">Central air conditioning</li>
                    <li className="list-inside">Ceiling fan</li>
                    <li className="list-inside">Heating</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Privacy and safety</h3>
                    <li className="list-inside">Lock on bedroom door</li>
                    <li className="list-inside">Smoke alarm</li>
                    <li className="list-inside">Carbon monoxide alarm</li>
                    <li className="list-inside">Fire extinguisher</li>
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
                      Cooking basics (Pots, pans, oil, salt, pepper)
                    </li>
                    <li className="list-inside">
                      Dishes and silverware (Bowls, chopsticks, plates, cups,
                      etc.)
                    </li>
                    <li className="list-inside">Freezer</li>
                    <li className="list-inside">Dishwasher</li>
                    <li className="list-inside">
                      Frigidaire stainless steel gas stove
                    </li>
                    <li className="list-inside">Coffee maker</li>
                    <li className="list-inside">Wine glasses</li>
                    <li className="list-inside">Dining table</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Location features</h3>
                    <li className="list-inside">Private entrance</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Outdoor</h3>
                    <li className="list-inside">Shared patio or balcony</li>
                    <li className="list-inside">
                      Fully fenced private backyard
                    </li>
                    <li className="list-inside">Outdoor furniture</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">
                      Parking and facilities
                    </h3>
                    <li className="list-inside">Free marking on premises</li>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-lg">Services</h3>
                    <li className="list-inside">Pets allowed</li>
                    <li className="list-inside">Luggage dropoff allowed</li>
                    <li className="list-inside">Self check-in</li>
                    <li className="list-inside">Keypad</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Not included</h3>
                    <li className="list-inside">
                      Security cameras on property
                    </li>
                    <li className="list-inside">Private entrance</li>
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
                maxGuests={15}
                minNights={1}
                maxNights={30}
                basePricePerNight={148}
                extraGuestChargePerNight={15}
                guestThresholdForExtraCharge={1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

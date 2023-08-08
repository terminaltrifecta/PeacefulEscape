import Layout from "@/app/components/layout";
import Proplayout from "@/app/components/proplayout/proplayout";
import Slideshow from "@/app/components/slideshow/slideshow";
import { HomeIcon, WifiIcon } from "@heroicons/react/24/solid";
import Modal from "@/app/components/Modal/modal";
import Card from "@/app/components/card/card";
import Priceblock from "@/app/components/searchbar/priceblock/priceblock";
import Calendar from "@/app/components/calendar/calendar";

export default function Southfield() {
  return (
    <div className="justify-center flex font-poppins">
      <div className="bgpattern bg-base-100 grid p-9 gap-9 justify-between">
        <div className="text-2xl lg:text-5xl font-bold  text-center justify-center">
          Exotic Mediterranian Oasis
        </div>

        <div className="text-lg lg:text-2xl font-thin  text-center justify-center">
          14 guests · 5 bedrooms · 5 beds · 2.5 baths
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 justify-center gap-5">
          <div className="col-span-1 md:col-span-3 grid gap-5">
            <div className="shadow-2xl slideshow p-4 bg-neutral w-full join grid gap-2">
              <Slideshow
                slide1="/assets/southfieldLocation/southfield1.jpg"
                slide2="/assets/southfieldLocation/southfield2.jpg"
                slide3="/assets/southfieldLocation/southfield3.jpg"
                slide4="/assets/southfieldLocation/southfield4.jpg"
                slide5="/assets/southfieldLocation/southfield5.jpg"
                slide6="/assets/southfieldLocation/southfield6.jpg"
              />
            </div>
            <hr className="border-secondary" />

            <div className="p-4 gap-5 card bg-neutral text-accent-content flex md:flex-row">
              <div className="font-bold">
                Enjoy a beautiful Mediterranean styled home.
              </div>
              <div>
                Located in a peaceful neighborhood, the house is situated close
                to shopping malls and major freeways, allowing for easy
                transportation to all your favorite locations.
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
                    outside of the house. The house has a keyless padlock for
                    the convenience of my guests, so there's no need to carry a
                    key around or worry about losing it.
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-secondary" />

            <Modal id="2" />

            <dialog id="my_modal_2" className="modal">
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
                    <li className="list-inside">Essentials (Towels, bed sheets, soap, toilet paper)</li>
                    <li className="list-inside">Hangers</li>
                    <li className="list-inside">Bed linens</li>
                    <li className="list-inside">Extra pillows and blankets</li>
                    <li className="list-inside">Iron</li>
                    <li className="list-inside">Clothing storage (closet)</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Entertainment</h3>
                    <li className="list-inside">65" TV</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Family</h3>
                    <li className="list-inside">Standard crib (52 inches long x 28 inches wide)</li>
                    <li className="list-inside">Children's dinnerware</li>
                    <li className="list-inside">Baby safety gates</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Heating and cooling</h3>
                    <li className="list-inside">Central air conditioning</li>
                    <li className="list-inside">Ceiling fan</li>
                    <li className="list-inside">Heating</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Home safety</h3>
                    <li className="list-inside">Security cameras on property</li>
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
                    <li className="list-inside">Cooking basics (Pots, pans, oil, salt, pepper)</li>
                    <li className="list-inside">
                      Dishes and silverware (Bowls, chopsticks, plates, cups,
                      etc.)
                    </li>
                    <li className="list-inside">Mini fridge</li>
                    <li className="list-inside">Freezer</li>
                    <li className="list-inside">Dishwasher</li>
                    <li className="list-inside">Stove</li>
                    <li className="list-inside">Oven</li>
                    <li className="list-inside">Hot water kettle</li>
                    <li className="list-inside">Coffee maker</li>
                    <li className="list-inside">Wine glasses</li>
                    <li className="list-inside">Toaster</li>
                    <li className="list-inside">Dining table</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Location features</h3>
                    <li className="list-inside">Private entrance</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Outdoor</h3>
                    <li className="list-inside">Private patio or balcony</li>
                    <li className="list-inside">Fully fenced private backyard</li>
                    <li className="list-inside">Outdoor furniture</li>
                    <li className="list-inside">Outdoor dining area</li>
                    <li className="list-inside">BBQ grill</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">
                      Parking and facilities
                    </h3>
                    <li className="list-inside">Free marking on premises</li>
                    <li className="list-inside">Free street parking</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Services</h3>
                    <li className="list-inside">Pets allowed</li>
                    <li className="list-inside">Luggage dropoff allowed</li>
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
                <Calendar/>
              </div>
              
              <Priceblock
              minGuests={1}
              maxGuests={14}
              minNights={1}
              maxNights={30}
              basePricePerNight={230}
              extraGuestChargePerNight={15}
              guestThresholdForExtraCharge={5} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

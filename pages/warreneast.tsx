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
        <div className="grid gap-4">
          <div className="text-3xl lg:text-5xl font-bold  text-center justify-center">
            Comfortable Home in a Quiet Neighborhood
          </div>
          <div className="text-lg lg:text-2xl font-thin text-center justify-center">
            Warren, Michigan
          </div>
          <div className="text-lg lg:text-2xl font-thin text-center justify-center">
            15 guests · 3 bedrooms · 3 beds · 2.5 baths
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 justify-center gap-5">
          <div className="col-span-1 md:col-span-3 grid gap-5">
            <div className="shadow-2xl slideshow p-4 bg-neutral w-full join grid gap-2">
              <Slideshow
                slide2="/assets/warrenEastLocation/warreneast1.webp"
                slide1="/assets/warrenEastLocation/warreneast2.webp"
                slide3="/assets/warrenEastLocation/warreneast3.webp"
                slide4="/assets/warrenEastLocation/warreneast4.webp"
                slide5="/assets/warrenEastLocation/warreneast5.webp"
                slide6="/assets/warrenEastLocation/warreneast6.webp"
              />
            </div>
            <hr className="border-secondary" />

            <div className="p-4 gap-5 card bg-neutral text-accent-content flex md:flex-row">
              <div className="font-bold">About this place</div>
              <div>
                Enjoy this spacious newly remodeled house in the heart of Warren
                city. Residents will enjoy an abundance of attractions near the
                house while relaxing in a quiet neighborhood. The property is
                within proximity to the local hospital as well as shopping
                malls. Washer and dryer in unit, Clean fresh towels, 65&quot;
                Smart TV, and a fully equipped kitchen to enjoy. This home is
                owned by a super host, so expect an exceptional stay.
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
                  <div className="font-bold">House rules</div>
                  <li className="list-inside">Check-in after 5:00 PM</li>
                  <li className="list-inside">Checkout before 11:00 AM</li>
                  <li className="list-inside">Self check-in with keypad</li>
                  <li className="list-inside">15 guests maximum</li>
                  <li className="list-inside">Pets allowed</li>
                  <li className="list-inside">No smoking</li>
                </div>
                <div className="p-2">
                  <div className="font-bold">Safety & property</div>
                  <li className="list-inside">
                    Carbon monoxide alarm installed
                  </li>
                  <li className="list-inside">Smoke alarm installed</li>
                </div>
              </div>
            </div>
            <hr className="border-secondary" />

            <Modal id="4" />

            <dialog id="my_modal_4" className="modal">
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
                    <li className="list-inside">Body soap</li>
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
                    <li className="list-inside">Iron</li>
                    <li className="list-inside">Clothing storage (closet)</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Entertainment</h3>
                    <li className="list-inside">TV with Hulu, Netflix, Roku</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Family</h3>
                    <li className="list-inside">Crib</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Heating and cooling</h3>
                    <li className="list-inside">Central air conditioning</li>
                    <li className="list-inside">Indoor fireplace</li>
                    <li className="list-inside">Portable fans</li>
                    <li className="list-inside">Heating</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Home safety</h3>
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
                      Cooking basics (Pots, pans, oil, salt, pepper)
                    </li>
                    <li className="list-inside">
                      Dishes and silverware (Bowls, chopsticks, plates, cups,
                      etc.)
                    </li>
                    <li className="list-inside">Freezer</li>
                    <li className="list-inside">Dishwasher</li>
                    <li className="list-inside">Stainless steel stove</li>
                    <li className="list-inside">Stainless steel oven</li>
                    <li className="list-inside">Coffee maker</li>
                    <li className="list-inside">Wine glasses</li>
                    <li className="list-inside">Baking sheet</li>
                    <li className="list-inside">Blender</li>
                    <li className="list-inside">Dining table</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Location features</h3>
                    <li className="list-inside">Private entrance</li>
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
                    <li className="list-inside">
                      Long term stays allowed (28 days or more)
                    </li>
                    <li className="list-inside">Self check-in</li>
                    <li className="list-inside">Keypad</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Not included</h3>
                    <li className="list-inside">
                      Security cameras on property
                    </li>
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
                maxGuests={14}
                minNights={4}
                maxNights={30}
                basePricePerNight={53}
                extraGuestChargePerNight={15}
                guestThresholdForExtraCharge={5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

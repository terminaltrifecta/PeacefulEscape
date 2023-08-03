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
          Comfortable Home in a Quiet Neighborhood
        </div>

        <div className="text-2xl font-bold  text-center justify-center">
        8 guests · 2 bedrooms · 3 beds · 1 bath
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 justify-center gap-5">
          <div className="col-span-1 md:col-span-3 grid gap-5">
            <div className="shadow-2xl slideshow p-4 bg-neutral w-full join grid gap-2">
              <Slideshow
                slide2="/assets/warrenEastLocation/warrenEast1.webp"
                slide1="/assets/warrenEastLocation/warrenEast2.webp"
                slide3="/assets/warrenEastLocation/warrenEast3.webp"
                slide4="/assets/warrenEastLocation/warrenEast4.webp"
                slide5="/assets/warrenEastLocation/warrenEast5.webp"
                slide6="/assets/warrenEastLocation/warrenEast6.webp"
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
                malls. Washer and dryer in unit, Clean fresh towels, 65" Smart
                TV, and a fully equipped kitchen to enjoy. This home is owned by
                a super host, so expect an exceptional stay.
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
                  <div>edit</div>
                </div>
                <div className="p-2">
                  <div className="font-bold">Other things to note</div>
                  <div>edit</div>
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
                    <li>Garden View</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Bathroom</h3>
                    <li>Hair dryer</li>
                    <li>Cleaning products</li>
                    <li>Shampoo</li>
                    <li>Dove conditioner</li>
                    <li>Body soap</li>
                    <li>Hot water</li>
                  </div>
                  <div className="p-4 grid-row-1">
                    <h3 className="font-bold text-lg">Bedroom and laundry</h3>
                    <li>Free washer - In unit</li>
                    <li>Free dryer - In unit</li>
                    <li>Essentials (Towels, bed sheets, soap, toilet paper)</li>
                    <li>Hangers</li>
                    <li>Bed linens</li>
                    <li>Extra pillows and blankets</li>
                    <li>Iron</li>
                    <li>Clothing storage (closet)</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Entertainment</h3>
                    <li>TV with Hulu, Netflix, Roku</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Family</h3>
                    <li>Crib</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Heating and cooling</h3>
                    <li>Central air conditioning</li>
                    <li>Indoor fireplace</li>
                    <li>Portable fans</li>
                    <li>Heating</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Home safety</h3>
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
                    <li>Cooking basics (Pots, pans, oil, salt, pepper)</li>
                    <li>
                      Dishes and silverware (Bowls, chopsticks, plates, cups,
                      etc.)
                    </li>
                    <li>Freezer</li>
                    <li>Dishwasher</li>
                    <li>Stainless steel stove</li>
                    <li>Stainless steel oven</li>
                    <li>Coffee maker</li>
                    <li>Wine glasses</li>
                    <li>Baking sheet</li>
                    <li>Blender</li>
                    <li>Dining table</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Location features</h3>
                    <li>Private entrance</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Location features</h3>
                    <li>Private entrance</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Outdoor</h3>
                    <li>Shared patio or balcony</li>
                    <li>Fully fenced private backyard</li>
                    <li>BBQ grill</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">
                      Parking and facilities
                    </h3>
                    <li>Free marking on premises</li>
                    <li>Free street parking</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Services</h3>
                    <li>Pets allowed</li>
                    <li>Luggage dropoff allowed</li>
                    <li>Long term stays allowed (28 days or more)</li>
                    <li>Self check-in</li>
                    <li>Keypad</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Not included</h3>
                    <li>Security cameras on property</li>
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
                minNights={1}
                maxNights={30}
                basePricePerNight={230}
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

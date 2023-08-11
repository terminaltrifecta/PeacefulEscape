import Slideshow from "@/app/components/slideshow/slideshow";
import Modal from "@/app/components/Modal/modal";
import Calendar from "@/app/components/calendar/calendar";
import Priceblock from "@/app/components/searchbar/priceblock/priceblock";

export default function Southfield() {
  return (
    <div className="justify-center flex">
      <div className="bgpattern bg-base-100 grid p-9 gap-9 justify-between">
        <div className="text-5xl font-bold  text-center justify-center">
          Sunny, stylish, private apartment in the city
        </div>
        <div className="text-lg lg:text-2xl font-thin  text-center justify-center">
          Roseville, Michigan
        </div>
        <div className="text-2xl font-bold  text-center justify-center">
          6 guests · 1 bedroom · 2 beds · 1 bath
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 justify-center gap-5">
          <div className="col-span-1 md:col-span-3 grid gap-5">
            <div className="shadow-2xl slideshow p-4 bg-neutral w-full join grid gap-2">
              <Slideshow
                slide2="/assets/rosevilleAprtLocation/rosevilleAprt2.jpg"
                slide1="/assets/rosevilleAprtLocation/rosevilleAprt1.jpg"
                slide3="/assets/rosevilleAprtLocation/rosevilleAprt3.jpg"
                slide4="/assets/rosevilleAprtLocation/rosevilleAprt4.jpg"
                slide5="/assets/rosevilleAprtLocation/rosevilleAprt5.jpg"
                slide6="/assets/rosevilleAprtLocation/rosevilleAprt6.jpg"
              />
            </div>
            <hr className="border-secondary" />

            <div className="p-4 gap-5 card bg-neutral text-accent-content flex md:flex-row">
              <div className="font-bold">About this place</div>
              <div>
                This apartment is safe, private, and recently remodeled,
                situated on the second level with its own private entrance. The
                apartment features an open concept design and is fully equipped
                with brand new appliances, an iron, new furniture, a 50&quot; TV, a
                washer & dryer, and plenty of comfortable bedding. It is
                conveniently located in the heart of the city, within walking
                distance to shops and restaurants.
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

            <Modal id="5" />

            <dialog id="my_modal_5" className="modal">
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

                    <li className="list-inside">TV with Roku</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Family</h3>

                    <li className="list-inside">Crib</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Heating and cooling</h3>
                        <li className="list-inside">Central air conditioning</li>
                        <li className="list-inside">Heating</li>
                      </div>
                      <div className="p-4">
                    <h3 className="font-bold text-lg">Home safety</h3>
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
                    <li className="list-inside">Freezer</li>
                    <li className="list-inside">Electric Stove</li>
                    <li className="list-inside">Oven</li>
                    <li className="list-inside">Dishwasher</li>
                    <li className="list-inside">Oven</li>
                    <li className="list-inside">Keurig Coffee Machine</li>
                    <li className="list-inside">Wine Glasses</li>
                    <li className="list-inside">Coffee</li>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-lg">
                      Parking and facilities
                    </h3>

                    <li className="list-inside">Free parking on premises</li>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Services</h3>

                    <li className="list-inside">Pets allowed</li>
                    <li className="list-inside">Self check-in</li>
                    <li className="list-inside">Smart Lock</li>
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
                maxGuests={6}
                minNights={1}
                maxNights={30}
                basePricePerNight={118}
                extraGuestChargePerNight={30}
                guestThresholdForExtraCharge={5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

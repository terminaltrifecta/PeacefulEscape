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
          When you rent this beautiful space, you’ll experience the modern loft lifestyle living. Over 1200 sq feet of space, two large bedrooms, a huge kitchen with brand new appliances ,tons of living space, a stunning remodeled bathroom, and a private access to the apartment. This apartment is conveniently located in the heart of the city with a walking distance to grocery stores and major city Freeways.
          </p>
        </div>
        <hr className="border-base-200" />
        <div className="p-4 h-36 xl:h-80 card bg-primary text-white">Hai</div>
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
- Thoroughly disinfecting the whole apartment including countertops, doorknobs, faucets, light switches, remote control units, and all the appliances. We have also stocked up extra supplies such as soaps and cleaning products in case you need it (yes, including toilet paper)
- Minimizing in-person contact with our guests whenever possible. You will enjoy this sunny and peaceful private loft</div>
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
          <div className="inline-grid grid-rows-6 md:grid-rows-6 grid-cols-2 md:grid-cols-2 w-full">

            <div className="col gap-x-3 justify-self-stretch p-1 h-fit">
              <h3 className="font-bold text-lg">Scenic Views</h3>
              <div>
                <li>

                </li>
              </div>
            </div>
            <div className="col gap-x-3 justify-self-stretch p-1 h-fit">
              <h3 className="font-bold text-lg">Bathroom</h3>
              <div>
                <li>
                  
                </li>
              </div>
            </div>
            <div className="col gap-x-3 justify-self-stretch p-1 h-fit grid-row-1">
              <h3 className="font-bold text-lg">Bedroom and laundry</h3>
              <div>
                <li>
                  
                </li>
              </div>
            </div>
            <div className="col gap-x-3 justify-self-stretch p-1 h-fit">
              <h3 className="font-bold text-lg">Entertainment</h3>
              <div>
                <li>

                </li>
              </div>
            </div>
            <div className="col gap-x-3 justify-self-stretch p-1 h-fit">
              <h3 className="font-bold text-lg">Family</h3>
              <div>
                <li>
                  
                </li>
              </div>
            </div>
            <div className="col gap-x-3 justify-self-stretch p-1 h-fit">
              <h3 className="font-bold text-lg">Heating and cooling</h3>
              <div>
                <li>
                  
                </li>
              </div>
            </div>
            <div className="col gap-x-3 justify-self-stretch p-1 h-fit">
              <h3 className="font-bold text-lg">Home safety</h3>
              <div>
                <li>
                  
                </li>
              </div>
            </div>
            <div className="col gap-x-3 justify-self-stretch p-1 h-fit">
              <h3 className="font-bold text-lg">Internet and office</h3>
              <div>
                <li>
                  
                </li>
              </div>
            </div>
            <div className="col gap-x-3 justify-self-stretch p-1 h-fit">
              <h3 className="font-bold text-lg">Kitchen and dining</h3>
              <div>
                <li>
                  
                </li>
              </div>
            </div>
            <div className="col gap-x-3 justify-self-stretch p-1 h-fit">
              <h3 className="font-bold text-lg">Outdoor</h3>
              <div>
                <li>
                  
                </li>
              </div>
            </div>
            <div className="col gap-x-3 justify-self-stretch p-1 h-fit">
              <h3 className="font-bold text-lg">Parking and facilities</h3>
              <div>
                <li>
                  
                </li>
              </div>
            </div>
            <div className="col gap-x-3 justify-self-stretch p-1 h-fit">
              <h3 className="font-bold text-lg">Services</h3>
              <div>
                <li>

                </li>
              </div>
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

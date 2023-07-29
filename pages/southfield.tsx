import Layout from "@/app/components/layout";
import Proplayout from "@/app/components/proplayout/proplayout";
import Slideshow from "@/app/components/slideshow/slideshow";
import { HomeIcon, WifiIcon } from "@heroicons/react/24/solid";
import Modal from "@/app/components/Modal/modal";

export default function Southfield() {
  return (
    <div className="justify-center flex">
      <div className="bgpattern propertylayout justify-center grid p-8 gap-8">
        <div className="text-2xl font-bold text-accent-content text-center justify-center">
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

        <div className="p-4 card bg-primary text-white flex items-center flex-row">
          <b>Enjoy a beautiful Mediterranean styled home.</b>
          <div className="divider divider-horizontal rounded-full bg-purple-500"></div>
          <p>
            In a peaceful neighborhood. The house is situated close to shopping
            malls and major freeways, allowing for easy transportation to all
            your favorite locations.
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
            <div className="p-2">
              <div className="font-bold">Guest access</div>
              <div>
                My guests have excess to kitchen .living room, Moroccan room,
                and the patio. You also get free parking.
              </div>
            </div>
            <div className="p-2">
              <div className="font-bold">Other things to note</div>
              <div>
                As a precautionary measure, security cameras are installed
                outside of the house. The house has a keyless pad lock for the
                convenience of my guests. No need to carry a key around or worry
                about losing it.
              </div>
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
                <h3 className="font-bold text-lg">Scenic Views</h3>
                <li>Garden View</li>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Bathroom</h3>
                <li>Hair dryer</li>
                <li>Cleaning products</li>
                <li>Shampoo</li>
                <li>Dove conditioner</li>
                <li>Dove body soap</li>
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
                  <li>65" TV</li>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Family</h3>
                  <li>Standard crib (52 inches long x 28 inches wide)</li>
                  <li>Children's dinnerware</li>
                  <li>Baby safety gates</li>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Heating and cooling</h3>
                  <li>Central air conditioning</li>
                  <li>Ceiling fan</li>
                  <li>Heating</li>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Home safety</h3>
                  <li>Security cameras on property</li>
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
                  <li>Mini fridge</li>
                  <li>Freezer</li>
                  <li>Dishwasher</li>
                  <li>Stove</li>
                  <li>Oven</li>
                  <li>Hot water kettle</li>
                  <li>Coffee maker</li>
                  <li>Wine glasses</li>
                  <li>Toaster</li>
                  <li>Dining table</li>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Location features</h3>
                  <li>Private entrance</li>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Outdoor</h3>
                  <li>Private patio or balcony</li>
                  <li>Fully fenced private backyard</li>
                  <li>Outdoor furniture</li>
                  <li>Outdoor dining area</li>
                  <li>BBQ grill</li>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Parking and facilities</h3>
                  <li>Free marking on premises</li>
                  <li>Free street parking</li>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Services</h3>
                  <li>Pets allowed</li>
                  <li>Luggage dropoff allowed</li>
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

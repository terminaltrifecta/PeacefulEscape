import Layout from "@/app/components/layout";
import Proplayout from "@/app/components/proplayout/proplayout";
import Slideshow from "@/app/components/slideshow/slideshow";
import { HomeIcon, WifiIcon } from "@heroicons/react/24/solid";
import Modal from "@/app/components/Modal/modal";

export default function WarrenEast() {
  return (
    <div className="justify-center flex">
      <div className="propertylayout justify-center grid p-8 gap-8">
        <div className="text-2xl font-bold text-white text-center justify-center">
        Comfortable Home in a Quiet Neighborhood (East Warren) 
        </div>
        <div className="slideshow p-4 bg-primary w-full join grid gap-2">
          <Slideshow
            slide1="/assets/warrenEastLocation/warrenEast1.webp"
            slide2="/assets/warrenEastLocation/warrenEast2.webp"
            slide3="/assets/warrenEastLocation/warrenEast3.webp"
            slide4="/assets/warrenEastLocation/warrenEast4.webp"
            slide5="/assets/warrenEastLocation/warrenEast5.webp"
            slide6="/assets/warrenEastLocation/warrenEast6.webp"
            slide7="/assets/warrenEastLocation/warrenEast7.webp"
            slide8="/assets/warrenEastLocation/warrenEast8.webp"
            slide9="/assets/warrenEastLocation/warrenEast9.webp"
            slide10="/assets/warrenEastLocation/warrenEast10.webp"
            slide11="/assets/warrenEastLocation/warrenEast11.webp"
          />
        </div>
        <hr className="border-base-200" />

        <div className="p-4 h-36 card bg-primary text-white flex items-center flex-row">
          <b>About this place</b>
          <div className="divider divider-horizontal rounded-full bg-purple-500"></div>
          <p>
          Enjoy this spacious newly remodeled house in the heart of Warren city. Residents will enjoy an abundance of attractions near the house while relaxing in a quiet neighborhood. The property is within proximity to the local hospital as well as shopping malls. Washer and dryer in unit, Clean fresh towels, 65" Smart TV, and a fully equipped kitchen to enjoy. This home is owned by a super host, so expect an exceptional stay.
          </p>
        </div>
        <hr className="border-base-200" />

        <div className="p-4 gap-5 card bg-primary text-white">
          <div className="text-3xl font-extrabold text-center">
            Things to Know
          </div>
          <hr className="border-base-200" />
          <div className="inline-grid grid-cols-3">
            <div className="">
              <div className="font-bold">House rules</div>
              <div>House rules</div>
            </div>
            <div className="col">
              <div className="font-bold">Safety & property</div>
              <div>Safety & property</div>
            </div>
            <div className="col">
              <div className="font-bold">Cancellation policy</div>
              <div>Cancellation policy</div>
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
                <h3 className="font-bold text-lg">Parking and facilities</h3>
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
    </div>
  );
}

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
          warren east about
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

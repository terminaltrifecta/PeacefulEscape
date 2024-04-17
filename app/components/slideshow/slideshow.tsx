import React, { useEffect } from "react";
import { KeenSliderPlugin, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import home from "public/assets/stockhome.jpg";

function ThumbnailPlugin(mainRef: any): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main: any) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function App({ property }: any) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        number: propertyImages[property].length,
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider row-span-3 flex w-full">
        {propertyImages[property].map((route: any) => (
          <div className="keen-slider__slide number-slide1" key={route}>
            <Image src={route} fill={true} alt="" className="object-cover" />
          </div>
        ))}
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail flex w-full">
        {propertyImages[property].map((route: any) => (
          <div className="keen-slider__slide number-slide1" key={route}>
            <Image src={route} fill={true} alt="" className="object-cover" />
          </div>
        ))}
      </div>
    </>
  );
}

//roseville 0
// rosevilleloft 1
//southfield 2
// warreneast 3
// warrenwest 4

const propertyImages = [
  [
    "/assets/newPropertyImages/rosevilleApartment/roseville (1).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (2).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (3).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (4).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (5).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (6).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (7).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (8).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (9).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (10).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (11).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (12).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (13).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (14).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (15).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (16).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (17).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (18).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (19).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (20).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (21).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (22).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (23).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (24).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (25).jpg",
    "/assets/newPropertyImages/rosevilleApartment/roseville (26).jpg"
  ],
  [
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (16).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (17).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (18).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (19).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (20).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (21).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (22).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (23).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (24).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (25).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (26).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (27).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (32).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (1).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (2).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (3).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (4).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (5).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (6).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (7).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (8).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (9).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (10).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (11).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (12).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (13).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (14).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (15).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (28).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (29).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (30).jpg",
    "/assets/newPropertyImages/rosevilleLoft/rosevilleLoft (31).jpg",
  ],
  [
    "/assets/newPropertyImages/southfield/southfield (1).jpg",
    "/assets/newPropertyImages/southfield/southfield (2).jpg",
    "/assets/newPropertyImages/southfield/southfield (3).jpg",
    "/assets/newPropertyImages/southfield/southfield (4).jpg",
    "/assets/newPropertyImages/southfield/southfield (5).jpg",
    "/assets/newPropertyImages/southfield/southfield (6).jpg",
    "/assets/newPropertyImages/southfield/southfield (7).jpg",
    "/assets/newPropertyImages/southfield/southfield (8).jpg",
    "/assets/newPropertyImages/southfield/southfield (9).jpg",
    "/assets/newPropertyImages/southfield/southfield (10).jpg",
    "/assets/newPropertyImages/southfield/southfield (11).jpg",
    "/assets/newPropertyImages/southfield/southfield (12).jpg",
    "/assets/newPropertyImages/southfield/southfield (13).jpg",
    "/assets/newPropertyImages/southfield/southfield (14).jpg",
    "/assets/newPropertyImages/southfield/southfield (15).jpg",
    "/assets/newPropertyImages/southfield/southfield (16).jpg",
    "/assets/newPropertyImages/southfield/southfield (17).jpg",
    "/assets/newPropertyImages/southfield/southfield (18).jpg",
    "/assets/newPropertyImages/southfield/southfield (19).jpg",
    "/assets/newPropertyImages/southfield/southfield (20).jpg",
    "/assets/newPropertyImages/southfield/southfield (21).jpg",
    "/assets/newPropertyImages/southfield/southfield (22).jpg",
    "/assets/newPropertyImages/southfield/southfield (23).jpg",
    "/assets/newPropertyImages/southfield/southfield (24).jpg",
    "/assets/newPropertyImages/southfield/southfield (25).jpg",
    "/assets/newPropertyImages/southfield/southfield (26).jpg",
    "/assets/newPropertyImages/southfield/southfield (27).jpg",
    "/assets/newPropertyImages/southfield/southfield (28).jpg",
    "/assets/newPropertyImages/southfield/southfield (29).jpg",
    "/assets/newPropertyImages/southfield/southfield (30).jpg",
    "/assets/newPropertyImages/southfield/southfield (31).jpg",
    "/assets/newPropertyImages/southfield/southfield (32).jpg",
    "/assets/newPropertyImages/southfield/southfield (33).jpg",
    "/assets/newPropertyImages/southfield/southfield (34).jpg",
    "/assets/newPropertyImages/southfield/southfield (35).jpg",
    "/assets/newPropertyImages/southfield/southfield (36).jpg",
    "/assets/newPropertyImages/southfield/southfield (37).jpg",
    "/assets/newPropertyImages/southfield/southfield (38).jpg",
    "/assets/newPropertyImages/southfield/southfield (39).jpg",
    "/assets/newPropertyImages/southfield/southfield (40).jpg",
    "/assets/newPropertyImages/southfield/southfield (41).jpg",
    "/assets/newPropertyImages/southfield/southfield (42).jpg",
    "/assets/newPropertyImages/southfield/southfield (43).jpg",
    "/assets/newPropertyImages/southfield/southfield (44).jpg",
    "/assets/newPropertyImages/southfield/southfield (45).jpg",
    "/assets/newPropertyImages/southfield/southfield (46).jpg",
    "/assets/newPropertyImages/southfield/southfield (47).jpg",
    "/assets/newPropertyImages/southfield/southfield (48).jpg",
    "/assets/newPropertyImages/southfield/southfield (49).jpg",
    "/assets/newPropertyImages/southfield/southfield (50).jpg",
  ],
  [
    "/assets/newPropertyImages/warrenEast/warrenEast (1).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (2).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (3).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (4).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (5).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (6).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (7).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (8).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (9).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (10).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (11).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (12).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (13).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (14).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (15).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (16).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (17).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (18).jpg",
    "/assets/newPropertyImages/warrenEast/warrenEast (19).jpg",
  ],
  [
    "/assets/newPropertyImages/warrenWest/warrenWest (11).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (12).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (13).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (15).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (18).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (1).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (2).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (3).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (4).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (6).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (7).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (8).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (9).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (10).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (16).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (17).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (5).webp",
    "/assets/newPropertyImages/warrenWest/warrenWest (14).webp",
  ],
];

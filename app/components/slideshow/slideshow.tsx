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

export default function App({
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
}: any) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        number: 6,
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider row-span-3 flex w-full">
        <div className="keen-slider__slide number-slide1">
          <Image src={slide1} fill={true} alt="" className="object-cover" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <Image src={slide2} fill={true} alt="" className="object-cover" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src={slide3} fill={true} alt="" className="object-cover" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image src={slide4} fill={true} alt="" className="object-cover" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image src={slide5} fill={true} alt="" className="object-cover" />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Image src={slide6} fill={true} alt="" className="object-cover" />
        </div>
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail w-full">
        <div className="keen-slider__slide number-slide1">
          <Image src={slide1} fill={true} alt="" className="object-cover" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <Image src={slide2} fill={true} alt="" className="object-cover" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src={slide3} fill={true} alt="" className="object-cover" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image src={slide4} fill={true} alt="" className="object-cover" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image src={slide5} fill={true} alt="" className="object-cover" />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Image src={slide6} fill={true} alt="" className="object-cover" />
        </div>
      </div>
    </>
  );
}

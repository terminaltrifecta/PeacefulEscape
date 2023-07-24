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

export default function App({slide1, slide2}:any) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider row-span-3">
        <div className="keen-slider__slide number-slide1">
          <Image src={slide1} fill={true} alt="" className="w-full" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <Image src={slide2} fill={true} alt="" className="w-full" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src={home} alt="" className="w-full" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image src={home} alt="" className="w-full" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image src={home} alt="" className="w-full" />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Image src={home} alt="" className="w-full" />
        </div>
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
      <div className="keen-slider__slide number-slide1">
          <Image src={slide1} fill={true} alt="" className="w-full" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <Image src={slide2} fill={true} alt="" className="w-full" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src={home} alt="" className="w-full" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image src={home} alt="" className="w-full" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image src={home} alt="" className="w-full" />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Image src={home} alt="" className="w-full" />
        </div>
      </div>
    </>
  );
}

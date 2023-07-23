import Image from "next/image";
import Stock from "app/assets/stockhome.jpg";
import Slideshow from "../slideshow/slideshow";

export default function Proplayout({ box1, box2, box3, box4, box5 }: any) {
  return (
    <div className="propertylayout grid p-8 gap-8 grid-cols-1">
      <div className="text-xl font-bold text-center justify-center">{box1}</div>
      <div className="slideshow w-full join grid gap-2">
        <Slideshow />
      </div>
      <hr className="" />
      <div className="h-36 card bg-primary">{box3}</div>
      <hr />
      <div className="h-36 xl:h-80 card bg-primary">{box3}</div>
      <hr />
      <div className="h-36 card bg-primary">{box4}</div>
      <hr />
      <div className="h-36 card bg-purple-500">{box5}</div>
    </div>
  );
}

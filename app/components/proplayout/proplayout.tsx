import Image from "next/image";
import Stock from "app/assets/stockhome.jpg";
import Slideshow from "../slideshow/slideshow";

export default function Proplayout({ box1, box2, box3, box4, box5 }: any) {
  return (
    <div className="grid p-8 gap-8 grid-cols-1 xl:grid-cols-2">
      <div className="h-80 w-full join join-vertical xl:row-span-2">
        <div className="h-1/6 w-full bg-purple-500 card text-xl font-bold text-center justify-center join-item">{box1}</div>
        <div className="card h-5/6 w-full join-item">
          <Slideshow/>
        </div>
      </div>
      <div className="h-36 card bg-primary">{box3}</div>
      <div className="h-36 xl:h-80 xl:row-span-2 card bg-primary">{box3}</div>
      <div className="h-36 card bg-primary">{box4}</div>
      <div className="h-36 card bg-purple-500 col-span-1 xl:col-span-2">{box5}</div>
    </div>
  );
}

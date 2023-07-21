import Image from "next/image";
import Stock from "app/assets/stockhome.jpg";

export default function Proplayout({ box1, box2, box3, box4, box5 }: any) {
  return (
    <div className="grid md:grid-cols-2">
      <div className="grid p-8 gap-8">
        <div className="text-center h-10 lg:h-40 card bg-primary">
          {box1}
        </div>

      <div className="h-40 lg:h-40 card bg-primary object-cover">


      <div className="carousel w-full object-cover">
  <div id="slide1" className="carousel-item relative w-full">
    <Image width={0} height={0} src={Stock} alt={""} style={{objectFit:"cover"}} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <Image width={0} height={0} src={Stock} alt={""} style={{objectFit:"cover"}} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <Image width={0} height={0} src={Stock} alt={""} style={{objectFit:"cover"}} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <Image width={0} height={0} src={Stock} alt={""} style={{objectFit:"cover"}} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>

      <div className="text-center h-60 lg:h-40 card bg-primary">
          {box3}
        </div>
      </div>

      <div className="grid p-8 gap-8">
        <div className="h-48 lg:h-40 card bg-primary">
          {box4}
        </div>

        <div className="text-center h-32 lg:h-96 card bg-primary">
          {box5}
        </div>
      </div>

    </div>
  );
}

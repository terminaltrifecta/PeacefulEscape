import Image from "next/image";
import Stock from "app/assets/stockhome.jpg";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Error 404</h1>
            <p className="py-6">
              Sorry this page DOESN'T exist. Maybe some other time!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

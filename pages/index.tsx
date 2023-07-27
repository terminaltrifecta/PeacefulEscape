import Image from "next/image";
import Stock from "app/assets/stockhome.jpg";
import Card from "@/app/components/card/card";
import Hero from "@/app/components/hero/hero";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Cards */}
      <div className="p-10 grid gap-10 justify-center md:grid-cols-2">
        <div className="grid gap-10">
          <Card
            headerText="Southfield Home"
            paragraphText="Beautifully decorated spacious house in a Mediterranean style with 5 bedrooms, two dining areas and an inviting living room with a newly remodeled bathroom .This house also offers you a comfortable unique style TV room in a Moroccan style sectional seating .Free WiFi and Free parking.
"
            buttonText="Check It Out!"
            imageName="app/assets/stockhome.jpg"
            buttonPath="/property1"
            hasButton="true"
            hasImage="true"
          />
          <Card
            headerText="Warren Home (West)"
            paragraphText="Enjoy this spacious newly remodeled house in the heart of Warren city. Residents will enjoy an abundance of attractions near the house while relaxing in a quiet neighborhood. The property is within proximity to the local hospital as well as shopping malls. Washer and dryer in unit, Clean fresh towels, 65 inch Smart TV, and a fully equipped kitchen to enjoy. This home is owned by a super host, so expect an exceptional stay. This location is further west on 12 mile road."
            buttonText="Check It Out!"
            imageName="app/assets/stockhome.jpg"
            buttonPath="/property2"
            hasButton="true"
            hasImage="true"
          />
        </div>
        <div className="grid gap-10">
          <Card
            headerText="Roseville Loft"
            paragraphText="When you rent this beautiful space, you’ll experience the modern loft lifestyle living. Over 1200 sq feet of space, two large bedrooms, a huge kitchen with brand new appliances ,tons of living space, a stunning remodeled bathroom, and a private access to the apartment. This apartment is conveniently located in the heart of the city with a walking distance to grocery stores and major city Freeways."
            buttonText="Check It Out!"
            imageName="app/assets/stockhome.jpg"
            buttonPath="/property3"
            hasButton="true"
            hasImage="true"
          />

          <Card
            headerText="Warren Home (East)"
            paragraphText="Enjoy this cozy home in a modern style with light and awe-inspiring coloring. (complicated as he lives here Idk how this will work)."
            buttonText="Check It Out!"
            imageName="app/assets/stockhome.jpg"
            buttonPath="/property4"
            hasButton="true"
            hasImage="true"
          />
        </div>
      </div>
    </>
  );
}

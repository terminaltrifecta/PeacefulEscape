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
        <Card
          headerText="Roseville Loft"
          paragraphText="When you rent this beautiful space, you’ll experience the modern loft lifestyle living. Over 1200 sq feet of space, two large bedrooms, a huge kitchen with brand new appliances ,tons of living space, a stunning remodeled bathroom, and a private access to the apartment. This apartment is conveniently located in the heart of the city with a walking distance to grocery stores and major city Freeways."
          buttonText="Check It Out!"
          imageName="app/assets/stockhome.jpg"
          buttonPath="/property1"
          /*
        the "imageName" parameter isnt yet functional.
        the idea of it is to allow you to input an image's source where ever
        you use a card, so it can change. whenever i try n make the "src" equal to the "imageName" argument,
        i get prompted with some stupid silly error about the width not being specified and im not too sure
        how to fix it. you can give it a shot though
        -casey
        */
        />
        <Card
          headerText="Warren Home (West)"
          paragraphText="Enjoy this spacious newly remodeled house in the heart of Warren city. Residents will enjoy an abundance of attractions near the house while relaxing in a quiet neighborhood. The property is within proximity to the local hospital as well as shopping malls. Washer and dryer in unit, Clean fresh towels, 65 inch Smart TV, and a fully equipped kitchen to enjoy. This home is owned by a super host, so expect an exceptional stay. This location is further west on 12 mile road."
          buttonText="Check It Out!"
          imageName="app/assets/stockhome.jpg"
          buttonPath="/property2"
        />
        <Card
          headerText="Southfield Home"
          paragraphText="Beautifully decorated spacious house in a Mediterranean style with 5 bedrooms, two dining areas and an inviting living room with a newly remodeled bathroom .This house also offers you a comfortable unique style TV room in a Moroccan style sectional seating .Free WiFi and Free parking.
"
          buttonText="Check It Out!"
          imageName="app/assets/stockhome.jpg"
          buttonPath="/property3"
        />
        <Card
          headerText="Warren Home (East)"
          paragraphText="Enjoy this cozy home in a modern style with light and awe-inspiring coloring. (complicated as he lives here Idk how this will work)."
          buttonText="Check It Out!"
          imageName="app/assets/stockhome.jpg"
          buttonPath="/property4"
        />
      </div>
    </>
  );
}

import Image from "next/image";
import Stock from "app/assets/stockhome.jpg";
import Card from "@/app/components/card/card";
import Hero from "@/app/components/hero/hero";
import Calendar from "@/app/components/calendar/calendar";

export default function Home() {
  return (
    <div className="bg-base-100 font-poppins">
      {/* Hero */}
      <Hero />

      {/* Cards */}
      <div id="listings" className="bgpattern p-10 grid gap-10 justify-center md:grid-cols-2">
        <Card
          headerText="Traveler's Mediterranean Retreat (Southfield)"
          paragraphText="Beautifully decorated, spacious house in Mediterranean style with 5 bedrooms, two dining areas, and an inviting living room with a newly remodeled bathroom. This house also offers you a comfortable, unique-style TV room with Moroccan-style sectional seating. Free WiFi and free parking are provided."
          buttonText="Check It Out!"
          imagePath="/assets/coverimages/southfield.jpg"
          buttonPath="/southfield"
          hasButton="true"
          hasImage="true"
        />
        <Card
          headerText="Cheerful Bedroom in a Cozy Home (Warren)"
          paragraphText="Enjoy this spacious, newly remodeled house in the heart of Warren City. Residents will appreciate an abundance of attractions near the house while enjoying the tranquility of a quiet neighborhood. The property is close to the local hospital, as well as shopping malls. Washer and dryer are available in the unit, along with clean, fresh towels, a 65-inch Smart TV, and a fully equipped kitchen for your enjoyment. This home is owned by a super host, so you can expect an exceptional stay. The location is further west on 12 Mile Road."
          buttonText="Check It Out!"
          imagePath="/assets/coverimages/warrenwest.webp"
          buttonPath="/warrenwest"
          hasButton="true"
          hasImage="true"
        />

        <Card
          headerText="Modern Spacious Loft (Roseville)"
          paragraphText="When you rent this beautiful space, you’ll experience the modern loft lifestyle living. Over 1200 sq feet of space, two large bedrooms, a huge kitchen with brand-new appliances, tons of living space, a stunning remodeled bathroom, and private access to the apartment. This apartment is conveniently located in the heart of the city, within walking distance to grocery stores and major city freeways."
          buttonText="Check It Out!"
          imagePath="/assets/coverimages/rosevilleloft.webp"
          buttonPath="/roseville"
          hasButton="true"
          hasImage="true"
        />

        <Card
          headerText="Comfortable Home in a Quiet Neighborhood (Warren)"
          paragraphText="Enjoy this spacious, newly remodeled house in the heart of Warren City. Residents will enjoy an abundance of attractions near the house while relaxing in a quiet neighborhood. The property is within proximity to the local hospital as well as shopping malls. Washer and dryer are in the unit, along with clean, fresh towels, a 65 inch Smart TV, and a fully equipped kitchen to enjoy. This home is owned by a super host, so expect an exceptional stay."
          buttonText="Check It Out!"
          imagePath="/assets/coverimages/warreneast.webp"
          buttonPath="/warreneast"
          hasButton="true"
          hasImage="true"
        />
        <Card
          headerText="Sunny, Stylish, Private Apartment in the City (Roseville)"
          paragraphText="Safe, private, and newly remodeled apartment on the second level with its private entrance. This open concept design apartment is fully equipped with brand new appliances, iron, brand new furniture, 50” T.V, washer & dryer, and plenty of comfortable bedding. It is located in the middle of the city with a walking distance to shops and restaurants."
          buttonText="Check It Out!"
          hasImage="true"
          hasButton="true"
          buttonPath="/rosevilleaprt"
          imagePath="/assets/coverimages/rosevilleaprt.webp"
        />
      </div>
    </div>
  );
}

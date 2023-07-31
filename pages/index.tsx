import Image from "next/image";
import Stock from "app/assets/stockhome.jpg";
import Card from "@/app/components/card/card";
import Hero from "@/app/components/hero/hero";
import Calendar from "@/app/components/calendar/calendar";

export default function Home() {
  return (
    <div className="bg-base-100 bgpattern">
      {/* Hero */}
      <Hero />

      {/* Cards */}
      <div className="p-10 grid gap-10 justify-center md:grid-cols-2">
        <div className="grid gap-10">
          <Card
            headerText="Exotic Mediterranean Oasis (Southfield)"
            paragraphText="Beautifully decorated, spacious house in Mediterranean style with 5 bedrooms, two dining areas, and an inviting living room with a newly remodeled bathroom. This house also offers you a comfortable, unique-style TV room with Moroccan-style sectional seating. Free WiFi and free parking are provided."
            buttonText="Check It Out!"
            imagePath="/assets/realhome/southfield.webp"
            buttonPath="/southfield"
            hasButton="true"
            hasImage="true"
          />
          <Card
            headerText="Cheerful Bedroom in a Cozy Home (West Warren)"
            paragraphText="Enjoy this spacious, newly remodeled house in the heart of Warren City. Residents will appreciate an abundance of attractions near the house while enjoying the tranquility of a quiet neighborhood. The property is close to the local hospital, as well as shopping malls. Washer and dryer are available in the unit, along with clean, fresh towels, a 65-inch Smart TV, and a fully equipped kitchen for your enjoyment. This home is owned by a super host, so you can expect an exceptional stay. The location is further west on 12 Mile Road."
            buttonText="Check It Out!"
            imagePath="/assets/warrenWestLocation/warrenWest1.webp"
            buttonPath="/warrenwest"
            hasButton="true"
            hasImage="true"
          />
        </div>
        <div className="grid gap-10">
          <Card
            headerText="Modern Spacious Loft (Roseville)"
            paragraphText="When you rent this beautiful space, you’ll experience the modern loft lifestyle living. Over 1200 sq feet of space, two large bedrooms, a huge kitchen with brand-new appliances, tons of living space, a stunning remodeled bathroom, and private access to the apartment. This apartment is conveniently located in the heart of the city, within walking distance to grocery stores and major city freeways."
            buttonText="Check It Out!"
            imagePath="/assets/rosevilleLocation/roseville1.webp"
            buttonPath="/roseville"
            hasButton="true"
            hasImage="true"
          />

          <Card
            headerText="Comfortable Home in a Quiet Neighborhood (East Warren)"
            paragraphText="Enjoy this spacious, newly remodeled house in the heart of Warren City. Residents will enjoy an abundance of attractions near the house while relaxing in a quiet neighborhood. The property is within proximity to the local hospital as well as shopping malls. Washer and dryer are in the unit, along with clean, fresh towels, a 65 inch Smart TV, and a fully equipped kitchen to enjoy. This home is owned by a super host, so expect an exceptional stay."
            buttonText="Check It Out!"
            imagePath="/assets/warrenEastLocation/warrenEast1.webp"
            buttonPath="/warreneast"
            hasButton="true"
            hasImage="true"
          />
        </div>
      </div>
    </div>
  );
}

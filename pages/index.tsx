import Image from "next/image";
import Stock from "app/assets/stockhome.jpg";
import Card from "@/app/components/card/card";
import Hero from "@/app/components/hero/hero";

export default function Home() {
  return (
    <>
      
      {/* Hero */}
      <Hero/>

      {/* Cards */}
      <div className="p-10 grid gap-10 justify-center md:grid-cols-2">
        <Card
        headerText="booty"
        paragraphText="paragraph one meow"
        buttonText="TAKE MEEEE PLEASSE"
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
        headerText="different header"
        paragraphText="anotha paragwaf"
        buttonText="or... here..?"
        imageName="app/assets/stockhome.jpg"
        buttonPath="/property2"
        />
        <Card
        headerText="gio is a cutie"
        paragraphText="lorem ipsum"
        buttonText="uwu"
        imageName="app/assets/stockhome.jpg"
        buttonPath="/property3"
        />
        <Card
        headerText="so is aiden :3"
        paragraphText="AAGHGHGB"
        buttonText="book"
        imageName="app/assets/stockhome.jpg"
        buttonPath="/property4"
        />
      </div>
      
    </>
  );
}

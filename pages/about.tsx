import Card from "@/app/components/card/card"

export default function About() {
    return (
      <>
      <div className="p-10 grid gap-10 justify-center md:grid-cols-2">
        <Card
        headerText="About Raf"
        paragraphText="I am a man who enjoys traveling and attending cultural events while visiting new spots. I was born In the middle east and lived in Sydney, Detroit, and San Diego. I love many beautiful things the world offers-color, gardens, books, music, travel, culture, good vegetarian food, and the joy of being around people. I have made it to 32 countries so far. While traveling, I like to explore museums and converse with the locals. Some of my favorite cities are Barcelona, Marrakesh, and Bangkok. I love making new friends and having intimate conversations about the world—a professional jewelry designer by trade and a tour guide at the national museum on my fun times. I  enjoy reading non-fiction books and magazines. I  do not watch TV much, but I enjoy watching foreign movies. I like meeting the hosts or the guests and getting to know them in their town."
        hasButton="false"
         />
      </div>
      </>
    )
  }
import LanguageIcon from "@mui/icons-material/Language";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublicIcon from "@mui/icons-material/Public";
import Contact from "@/app/components/Contact/contact";
import Image from "next/image";

export default function About() {
  return (
    <div className="grid p-10 bgpattern bg-base-100 gap-10">
      <div className="grid gap-10 justify-center md:grid-cols-2">
        <div className="card bg-base-100 shadow-2xl p-10 gap-5">
          <div className="font-bold text-5xl">About Raf</div>
          <hr className="border-yellow" />
          <div>
            I am a man who enjoys traveling and attending cultural events while visiting new spots. I was born In the middle east and lived in Sydney, Detroit, and San Diego. I love many beautiful things the world offers-color, gardens, books, music, travel, culture, good vegetarian food, and the joy of being around people. I have made it to 32 countries so far. While traveling, I like to explore museums and converse with the locals. Some of my favorite cities are Barcelona, Marrakesh, and Bangkok. I love making new friends and having intimate conversations about the world—a professional jewelry designer by trade and a tour guide at the national museum on my fun times. I  enjoy reading non-fiction books and magazines. I  do not watch TV much, but I enjoy watching foreign movies. I like meeting the hosts or the guests and getting to know them in their town.
          </div>
        </div>
        <div className="grid gap-4">
          <div className="h-fit p-8 rounded-xl flex flex-col gap-6 lg:flex-row bg-primary shadow-2xl text-primary-content">
            <div className="avatar justify-center p-4 col-span-2">
              <div className="rounded-full ring ring-primary-content ring-offset-2">
                <Image src="/assets/raf.jpg" alt="" />
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-1">
              <div className="font-bold">416</div>
              <div className="text-sm">Reviews</div>
              <hr/>
              <div className="font-bold">4.87</div>
              <div className="text-sm">Rating</div>
              <hr />
              <div className="font-bold">8</div>
              <div className="text-sm">Years Hosting</div>
              <hr />
            </div>
          </div>
          <div className="p-8 h-full card bg-base-100 shadow-2xl">
            <div className="grid gap-4">
              <div className="flex gap-x-3">
                <LanguageIcon className="h-6" />
                <div>I speak Arabic and English.</div>
              </div>
              <div className="flex gap-x-3">
                <WorkIcon />
                <div>I work at a national museum.</div>
              </div>
              <div className="flex gap-x-3">
                <SchoolIcon />
                <div>I went to school at Wayne State University.</div>
              </div>

              <div className="flex gap-x-3">
                <FavoriteIcon />
                <div>Im obsessed with art!</div>
              </div>
              <div className="flex gap-x-3">
                <PublicIcon />
                <div>I live in Warren, Michigan.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

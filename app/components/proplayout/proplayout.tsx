import Artboard from "../Artboard/artboard";

export default function Proplayout({ box1, box2, box3, box4, box5 }: any) {
  return (
    <div className="grid p-8 gap-8 md:grid-cols-2">
      <div className="grid gap-8">
        <div className="h-20 lg:h-40 card bg-primary place-items-center"></div>
        <div className="h-20 lg:h-40 card bg-primary"></div>
        <div className="h-20 lg:h-40 card bg-primary"></div>
      </div>
      <div className="grid gap-8">
        <div className="h-20 lg:h-40 card bg-primary"></div>
        <div className="h-48 lg:h-96 card bg-primary"></div>
      </div>

    </div>
  );
}

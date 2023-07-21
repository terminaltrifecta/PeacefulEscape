export default function Proplayout({ box1, box2, box3, box4, box5 }: any) {
  return (
    <div className="grid md:grid-cols-2">
      <div className="grid p-8 gap-8">
        <div className="h-20 lg:h-40 card bg-primary">{box1}</div>
        <div className="h-20 lg:h-40 card bg-primary">{box2}</div>
        <div className="h-20 lg:h-40 card bg-primary">{box3}</div>
      </div>
      <div className="grid p-8 gap-8">
        <div className="h-20 lg:h-40 card bg-primary">{box1}</div>
        <div className="h-48 lg:h-96 card bg-primary">{box2}</div>
      </div>
    </div>
  );
}

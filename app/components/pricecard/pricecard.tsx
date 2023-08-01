export default function Pricecard() {
  return (
    <div>
      <div className="join-item card 2xl:card-side shadow-2xl bg-primary">
        <div className="card-body w-full">
          <div className="text-3xl font-extrabold text-center">$230 / night</div>
          <div className="join join-horizontal w-full justify-center">
            <button className="btn join-item">more guests</button>
            <button className="btn join-item disabled">guests</button>
            <button className="btn join-item">less guests</button>
          </div>
        </div>
      </div>
    </div>
  );
}

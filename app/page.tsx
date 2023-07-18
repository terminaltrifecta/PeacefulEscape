import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary btn-wide">Get Started</button>
          </div>
        </div>
      </div>

      <div className="p-5 justify-around grid gap-10 lg:flex">
        <div className="mockup-phone m-0">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">Hello</div>
          </div>
        </div>
        <div className="mockup-phone m-0">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">World!</div>
          </div>
        </div>
        <div className="mockup-phone m-0">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">World!</div>
          </div>
        </div>
      </div>

      <div className="p-10 grid gap-10 justify-center xl:flex">
        <div className="stats w-30 bg-primary text-primary-content">
          <div className="stat">
            <div className="stat-title">Account balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-success">Add funds</button>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Current balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm">Withdrawal</button>
              <button className="btn btn-sm">deposit</button>
            </div>
          </div>
        </div>
        <div className="stats bg-secondary text-primary-content">
          <div className="stat">
            <div className="stat-title">Account balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-success">Add funds</button>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Current balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm">Withdrawal</button>
              <button className="btn btn-sm">deposit</button>
            </div>
          </div>
        </div>
        <div className="stats bg-primary text-primary-content">
          <div className="stat">
            <div className="stat-title">Account balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-success">Add funds</button>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Current balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm">Withdrawal</button>
              <button className="btn btn-sm">deposit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

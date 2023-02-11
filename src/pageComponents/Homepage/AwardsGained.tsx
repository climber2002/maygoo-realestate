
export default function AwardsGained() {
  return (

    <section className="relative py-24 bg-no-repeat bg-center bg-fixed" style={{ backgroundImage: "url('/styles/images/bg/01.jpg')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container">
        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-left text-center justify-center">
          <div className="lg:col-start-2 lg:col-span-10">
            <div className="grid md:grid-cols-3 grid-cols-1 items-center">

              <div className="counter-box text-center">
                <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2">
                  <span className="counter-value" data-target="1548">1010</span>+</h1>
                <h5 className="counter-head text-white text-lg font-medium">Properties Sell</h5>
              </div>


              <div className="counter-box text-center">
                <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2"><span className="counter-value" data-target="25">2</span>+</h1>
                <h5 className="counter-head text-white text-lg font-medium">Award Gained</h5>
              </div>


              <div className="counter-box text-center">
                <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2"><span className="counter-value" data-target="9">0</span>+</h1>
                <h5 className="counter-head text-white text-lg font-medium">Years Experience</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
}
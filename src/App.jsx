import "./App.css";

function App() {
  return (
    <main className="w-screen min-h-screen px-4 py-10 bg-darkBlueCardBG grid place-content-center">
      {/* Card */}
      <section className="p-7 bg-darkBlueLine rounded-xl grid gap-2 classOfShadow xxs:w-[23rem]">
        {/* imagen */}
        <div className="rounded-xl relative">
          <img
            className="rounded-xl"
            src="images\image-equilibrium.jpg"
            alt=""
          />
          <div className=" hover:bg-cyanB/40 w-full h-full absolute top-0 rounded-xl">
            <div className="iconH absolute inset-0 flex items-center justify-center ">
              <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h48v48H0z" />
                  <path
                    d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                    fill="#FFF"
                    fill-rule="nonzero"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        {/* titulo y parrafo */}
        <h1 className="text-white2 font-bold text-xl pt-3 hover:text-cyanB">
          Equilibrium #3429
        </h1>
        <p className="text-softBlue text-left pr-10 py-1">
          Our Equilibrium collection promotes blance and calm.
        </p>

        {/* price */}
        <div className="flex justify-between items-center">
          <span className="flex justify-center items-center gap-2 text-cyanB font-bold">
            <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>{" "}
            0.041 ETH
          </span>
          <span className="flex gap-2 justify-center items-center text-softBlue">
            <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                fill="#8BACD9"
              />
            </svg>{" "}
            3 days left
          </span>
        </div>

        {/* LINE */}
        <div className="border-b-[1px] border-softBlue py-1"></div>

        {/* footer */}
        <div className="flex items-center gap-3 pt-2">
          <div className="border-[1px] rounded-full">
            <img className="w-10 h-10 " src="images\image-avatar.png" alt="" />
          </div>
          <h3 className="text-softBlue">
            Creation of <span className="text-white2 hover:text-cyanB">Jules Wyvern</span>
          </h3>
        </div>
      </section>
    </main>
  );
}

export default App;

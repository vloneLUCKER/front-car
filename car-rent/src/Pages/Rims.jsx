import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header/Header";

export default function Rims() {
  const [hidden, setHidden] = useState(true);
  //   const [brandHidden, setBrandHidden] = useState(true);
  //   const [modelHidden, setModelHidden] = useState(true);

  const cards = [
    { image: "/rim1.webp", title: "4C for Porsche" },
    { image: "/rim2.webp", title: "BY. 5" },
    { image: "/rim1.webp", title: "4C for Porsche" },
    { image: "/rim2.webp", title: "BY. 5" },
    { image: "/rim1.webp", title: "4C for Porsche" },
    { image: "/rim2.webp", title: "BY. 5" },
    { image: "/rim1.webp", title: "4C for Porsche" },
    { image: "/rim2.webp", title: "BY. 5" },
    { image: "/rim1.webp", title: "4C for Porsche" },
    { image: "/rim2.webp", title: "BY. 5" },
    { image: "/rim1.webp", title: "4C for Porsche" },
    { image: "/rim2.webp", title: "BY. 5" },
    { image: "/rim1.webp", title: "4C for Porsche" },
    { image: "/rim2.webp", title: "BY. 5" },
  ];

  return (
    <>
      <Header></Header>
      <div className="mx-20 mb-20 mt-60">
        <div className="flex justify-between">
          <button
            onClick={() => {
              setHidden(!hidden);
            }}
            className="min-w-20 py-5 px-8 bg-[#829fb0] rounded-lg tracking-wider font-medium hover:bg-[#829fb090] transition-all transform "
          >
            {hidden ? "SHOW FILTERS" : "HIDE FILTERS"}
          </button>
          <button
            onClick={() => setHidden(true)}
            className="border px-12 py-6 rounded-md hover:bg-[#ffffff20] transition-all transform ease-in-out hover:scale-110"
          >
            RESET
          </button>
        </div>
        <div className="mt-10 flex flex-wrap justify-between my-5">
          {/* <div
            className={`${
              hidden ? "hidden" : ""
            } w-1/4 flex flex-col items-start gap-10`}
          >
            <input
              type="search"
              placeholder="Search"
              className="border-1 border-[#ffffff30] px-3 py-4 rounded-md w-full"
            />
            <button
              onClick={() => {
                setBrandHidden(!brandHidden);
              }}
              className={`${
                !brandHidden
                  ? "text-white border-b-white"
                  : "text-[#ffffff60] border-b-[#ffffff30]"
              } py-5 border-b-1 w-full text-left text-2xl`}
            >
              Brand
              <div className="mt-4 space-y-3 h-60 overflow-hidden">
                {cars.map((car) => (
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      //   checked={selectedOptions.includes(option.id)}
                      //   onChange={() => handleCheckboxChange(option.id)}
                      className="h-6 w-6 rounded border-white bg-none"
                    />
                    <label
                      //   htmlFor={option.id}
                      className="ml-3 mb-3 block text-sm font-medium text-white "
                    >
                      {Object.keys(car)[0].toUpperCase()}
                    </label>
                  </div>
                ))}
              </div>
            </button>
            <button
              onClick={() => {
                !brandHidden
                  ? setModelHidden(!modelHidden)
                  : setModelHidden(true);
              }}
              className={`${
                !modelHidden
                  ? "text-white border-b-white"
                  : "text-[#ffffff60] border-b-[#ffffff30]"
              } py-5 border-b-1 w-full text-left text-2xl`}
            >
              Model
            </button> */}
          {/* </div> */}
          {cards.map(({ image, title }) => {
            return (
              <a
                className={`h-[60vh] w-[48%] flex flex-col items-center mb-10 overflow-hidden bg-white rounded-md p-10 gap-5`}
              >
                <img src={image} alt={title} className="" />
                <h1 className=" text-2xl text-black">{title}</h1>
              </a>
            );
          })}
          <div className="flex justify-center gap-28 w-full">
            <button
              // onClick={() => setHidden(true)}
              className="border px-12 py-6 rounded-md hover:bg-[#ffffff20] transition-all transform ease-in-out hover:scale-110 border-[#ffffff30] hover:border-[#ffffff80]"
            >
              PREV
            </button>
            <button
              // onClick={() => setHidden(true)}
              className="border px-12 py-6 rounded-md hover:bg-[#ffffff20] transition-all transform ease-in-out hover:scale-110 border-[#ffffff30] hover:border-[#ffffff80]"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./App.css";
import Header from "../Components/Header/Header";
import Button from "../Components/Button";
import Select from "../Components/Select/Select";
import GallerySlider from "../Components/Swiper";
import Footer from "../Components/Footer";

export function App() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { image: "/audi.jpg", title: "Audi A5 2023 Sportback Quattro" },
    { image: "/ferrari.jpg", title: "Ferrari 488 Spider" },
    { image: "bugatti.jpg", title: "Bugatti Chiron Super Sport" },
    { image: "/audi.jpg", title: "Audi A5 2023 Sportback Quattro" },
    { image: "/ferrari.jpg", title: "Ferrari 488 Spider" },
    { image: "bugatti.jpg", title: "Bugatti Chiron Super Sport" },
    { image: "/audi.jpg", title: "Audi A5 2023 Sportback Quattro" },
    { image: "/ferrari.jpg", title: "Ferrari 488 Spider" },
    { image: "bugatti.jpg", title: "Bugatti Chiron Super Sport" },
  ];

  return (
    <div>
      <div className="relative h-screen w-screen overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-50 bg-gradient-to-t from-black to-transparent z-5"></div>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full h-full"
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {cards.map(({ image, title }, index) => (
            <SwiperSlide key={index}>
              <div className="bg"></div>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="z-30 absolute top-[40vh] left-[5vw] text-left">
                <h1 className="font-medium w-[30vw] text-left text-6xl mb-8 text-white">
                  {title}
                </h1>
                <Button isAbsolute={true}>Discover Now</Button>
              </div>
            </SwiperSlide>
          ))}

          <div
            slot="container-end"
            className="absolute bottom-12 left-0 right-0 z-10 flex justify-center gap-2"
          >
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.swiper.slideTo(index)}
                className={`h-1 transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-white w-8"
                    : "bg-gray-500 w-4 hover:bg-gray-500/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Swiper>

        <Header />
      </div>

      <article className="w-full bg-black py-30 px-32">
        <div className="w-full h-130 bg-[#25282a80] rounded-lg flex flex-col justify-around px-14">
          <div className="flex flex-col justify-between">
            <h1 className="text-5xl mb-5">Rent Your Dream Model</h1>
            <p className="text-[#b6b6b6]">
              Choose options from below and find yours
            </p>
          </div>
          <div className="flex justify-around gap-15">
            <Select text={"Brand"}></Select>
            <Select text={"Model"}></Select>
            <Button full={true}>Search</Button>
          </div>
        </div>
      </article>
      <GallerySlider cars={cards}></GallerySlider>
      <article className="bg-[#829fb0] py-24 px-22">
        <div className="flex flex-col ">
          <div className="h-32 flex justify-between align-middle items-center">
            <h1 className="text-5xl text-center">News & Events</h1>
            <a
              href="#"
              className="border px-12 py-6 rounded-md hover:bg-[#ffffff20] transition-all transform ease-in-out hover:scale-110"
            >
              SEE ALL
            </a>
          </div>
          <a href="#" className="mt-10 h-100 flex items-center">
            <img
              src="/yacht.webp"
              alt=""
              className="h-full w-140 backdrop-blur-xl mr-20"
            />
            <div className="flex flex-col gap-12">
              <div className="flex items-center gap-12">
                <div className="text-black bg-[#ffffff99] rounded-4xl px-3 py-1 text-xs">
                  NEWS
                </div>
                <h2 className="text-left">July 20, 2025</h2>
              </div>
              <h1 className="text-left text-3xl">Moscow Yacht Show</h1>
              <h2 className="text-left">24.-27. September 2025</h2>
            </div>
          </a>
          <a href="#" className="mt-14 h-100 flex items-center">
            <img
              src="/yacht.webp"
              alt=""
              className="h-full w-140 backdrop-blur-xl mr-20"
            />
            <div className="flex flex-col gap-12">
              <div className="flex items-center gap-12">
                <div className="text-black bg-[#ffffff99] rounded-4xl px-3 py-1 text-xs">
                  NEWS
                </div>
                <h2 className="text-left">July 20, 2025</h2>
              </div>
              <h1 className="text-left text-3xl">Moscow Yacht Show</h1>
              <h2 className="text-left">24.-27. September 2025</h2>
            </div>
          </a>
        </div>
      </article>
      <article className="bg-white py-24 px-22 flex flex-col w-full gap-14 items-center">
        <h1 className="text-5xl text-black">Cars For Rent</h1>
        <div className="flex gap-30 h-[60vh]">
          <div className="max-w-[30%] bg-[#f5f5f5] flex flex-col">
            <img
              src="/audi.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div className="mx-3 my-5 flex flex-col items-center gap-6">
              <h1 className="text-3xl text-black">
                Very fast car you never afford one
              </h1>
              <a
                href="#"
                className=" border text-center border-black text-black px-10 py-6 rounded-md hover:bg-[#ffffff20] transition-all transform ease-in-out hover:scale-110 mx-10"
              >
                DETAILS
              </a>
            </div>
          </div>
          <div className="max-w-[30%] bg-[#f5f5f5] flex flex-col">
            <img
              src="/bugatti.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div className="mx-3 my-5 flex flex-col items-center gap-6">
              <h1 className="text-3xl text-black">
                Very fast car you never afford one
              </h1>
              <a
                href="#"
                className=" border text-center border-black text-black px-10 py-6 rounded-md hover:bg-[#ffffff20] transition-all transform ease-in-out hover:scale-110 mx-10"
              >
                DETAILS
              </a>
            </div>
          </div>
          <div className="max-w-[30%] h-full  bg-[#f5f5f5] flex flex-col">
            <img
              src="/ferrari.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="mx-3 my-5 flex flex-col items-center gap-6">
              <h1 className="text-3xl text-black">
                Very fast car you never afford one
              </h1>
              <a
                href="#"
                className=" border text-center border-black text-black px-10 py-6 rounded-md hover:bg-[#ffffff20] transition-all transform ease-in-out hover:scale-110 mx-10"
              >
                DETAILS
              </a>
            </div>
          </div>
        </div>
        <a href="#">
          <Button full={false}>VIEW CARS FOR RENT</Button>
        </a>
      </article>
      <div
        className="relative h-screen w-full bg-cover bg-center group"
        style={{ backgroundImage: "url('/boutique.jpg')" }}
      >
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-none border-1 text-black rounded-lg transition-all duration-600 group-hover:bg-[#ffffff50] text-[#ffffff00] group-hover:text-white group-hover:scale-110">
          Boutique
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
}

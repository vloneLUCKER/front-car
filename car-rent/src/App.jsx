import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./App.css";
import Header from "./Components/Header/Header";
import Button from "./Components/Button";
import Select from "./Components/Select/Select";
import GallerySlider from "./Components/Swiper";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-5"></div>
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
                <h1 className="font-medium w-[30vw] text-left text-6xl mb-6 text-white">
                  {title}
                </h1>
                <Button isAbsolute={true}>Discover Now</Button>
              </div>
            </SwiperSlide>
          ))}

          <div
            slot="container-end"
            className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2"
          >
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.swiper.slideTo(index)}
                className={`h-1 transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-white w-8"
                    : "bg-gray-500/50 w-4 hover:bg-gray-500/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Swiper>

        <Header scrolled={isScrolled} />
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
      <div className="h-[1000px]"></div>
    </>
  );
}

export default App;

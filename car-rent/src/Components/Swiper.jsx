import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const GallerySlider = ({ cars }) => {
  const cards = cars;

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-white pt-20">
      <div className="relative h-full w-full">
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-1/3 left-0 right-0 z-20 container mx-auto px-6">
          <div className="flex justify-between items-start absolute bottom-25 pl-15">
            <h1 className="text-5xl font-bold text-black max-w-xl ">
              Season Beast
            </h1>

            <div className="flex gap-6 absolute -right-[70vw]">
              <button className="custom-prev bg-white/20 hover:bg-white/30 p-4 rounded-full backdrop-blur-md transition-all transform hover:scale-110 border-1 border-black">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="custom-next bg-white/20 hover:bg-white/30 p-4 rounded-full backdrop-blur-md transition-all transform hover:scale-110 border-1 border-black">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={3.5}
          spaceBetween={100}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="h-[40%] w-full absolute top-40"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="h-full w-full flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 z-30">
        <div className="h-full bg-white w-1/3 transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default GallerySlider;

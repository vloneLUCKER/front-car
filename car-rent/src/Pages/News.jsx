import Footer from "../Components/Footer";
import Header from "../Components/Header/Header";

export default function News() {
  const news = [
    {
      image: "/yacht.webp",
      title: "YACHT SHOW MOSCOW",
      date: "august 15, 2025",
    },
    {
      image: "/yacht.webp",
      title: "YACHT SHOW MOSCOW",
      date: "august 15, 2025",
    },
    {
      image: "/yacht.webp",
      title: "YACHT SHOW MOSCOW",
      date: "august 15, 2025",
    },
    {
      image: "/yacht.webp",
      title: "YACHT SHOW MOSCOW",
      date: "august 15, 2025",
    },
    {
      image: "/yacht.webp",
      title: "YACHT SHOW MOSCOW",
      date: "august 15, 2025",
    },
    {
      image: "/yacht.webp",
      title: "YACHT SHOW MOSCOW",
      date: "august 15, 2025",
    },
    {
      image: "/yacht.webp",
      title: "YACHT SHOW MOSCOW",
      date: "august 15, 2025",
    },
    {
      image: "/yacht.webp",
      title: "YACHT SHOW MOSCOW",
      date: "august 15, 2025",
    },
    {
      image: "/yacht.webp",
      title: "YACHT SHOW MOSCOW",
      date: "august 15, 2025",
    },
    {
      image: "/yacht.webp",
      title: "YACHT SHOW MOSCOW",
      date: "august 15, 2025",
    },
    {
      image: "/yacht.webp",
      title: "YACHT SHOW MOSCOW",
      date: "august 15, 2025",
    },
    {
      image: "/yacht.webp",
      title: "YACHT SHOW MOSCOW",
      date: "august 15, 2025",
    },
    {
      image: "/yacht.webp",
      title: "YACHT SHOW MOSCOW",
      date: "august 15, 2025",
    },
    {
      image: "/yacht.webp",
      title: "YACHT SHOW MOSCOW",
      date: "august 15, 2025",
    },
  ];
  return (
    <>
      <Header></Header>
      <div className="bg-gradient-to-b from-gray-800 to-black w-full h-[90vh] flex items-center justify-center">
        <div>
          <h1 className="text-6xl">NEWS & EVENTS</h1>
          <h2 className="text-3xl text-[#00000080]">
            Check out the newest updates and information about events
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap px-28 py-18 bg-black justify-between">
        {news.map(({ image, title, date }) => {
          return (
            <div className="w-[49%] h-[100vh] flex flex-col bg-white mb-6">
              <img
                src={image}
                alt={title}
                className="w-full h-[41%] content-center contain-content"
              />
              <div className="flex flex-col justify-center h-full gap-5">
                <h2 className="text-xl text-[#00000080]">{date}</h2>
                <h1 className="text-4xl text-black">{title}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </>
  );
}

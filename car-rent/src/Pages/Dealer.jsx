import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header/Header";

export default function Dealer() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center gap-4 h-[95vh] justify-center bg-gradient-to-b from-gray-800 to-black w-full">
        <h1 className="text-6xl">Official services</h1>
        <h2 className="text-2xl text-[#ffffff80]">
          Locate the nearest dealership for your convenience
        </h2>
      </div>
      <div className="h-[80vh] flex">
        <div className="w-1/2 relative flex flex-col justify-center gap-5 items-center">
          <img
            src="/boutique.jpg"
            alt=""
            className="absolute -z-1 blur-[3px]  transition-all transform "
          />
          <h1 className="text-4xl">DREAM RENT HOLDING GMBH</h1>
          <h2 className="text-2xl">
            Pokrovskay street 1, 977710 Brand, Russia
          </h2>
          <button className="border-1 rounded-md transition-all transform hover:scale-110 py-5 px-8">
            SEE DETAILS
          </button>
        </div>
        <div className="w-1/2 relative flex flex-col justify-center gap-5 items-center">
          <img
            src="/boutique.jpg"
            alt=""
            className="absolute -z-1 blur-[3px]  transition-all transform "
          />
          <h1 className="text-4xl">DREAM RENT HOLDING GMBH</h1>
          <h2 className="text-2xl">
            Pokrovskay street 1, 977710 Brand, Russia
          </h2>
          <button className="border-1 rounded-md transition-all transform hover:scale-110 py-5 px-8">
            SEE DETAILS
          </button>
        </div>
      </div>
      <div className="h-100 bg-black flex items-center justify-center pb-20">
        <h1 className="text-6xl">Dream Rent Dealer</h1>
      </div>
      <article className="w-full h-[100vh] relative flex flex-col justify-center items-center gap-7">
        <img
          src="/ferrari.jpg"
          alt=""
          className="contain-content absolute -z-1"
        />
        <h1 className="text-6xl">Become an Dealer</h1>
        <h2 className="text-3xl">
          Become our partner and become a dream provider
        </h2>
        <Button>Become a Dealer</Button>
      </article>
      <Footer />
    </>
  );
}

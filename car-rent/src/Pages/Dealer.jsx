import Footer from "../Components/Footer";
import Header from "../Components/Header/Header";

export default function Dealer() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center gap-4 h-[90vh] justify-center bg-gradient-to-b from-gray-800 to-black w-full">
        <h1 className="text-6xl">Official services</h1>
        <h2 className="text-2xl text-[#ffffff80]">
          Locate the nearest dealership for your convenience
        </h2>
      </div>
      <Footer />
    </>
  );
}

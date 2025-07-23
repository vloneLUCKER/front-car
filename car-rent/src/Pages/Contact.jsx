import Footer from "../Components/Footer";
import Header from "../Components/Header/Header";

export default function Contact() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center gap-4 h-[95vh] justify-center bg-gradient-to-b from-gray-800 to-black w-full">
        <h1 className="text-6xl">CONTACT US</h1>
        <h2 className="text-2xl text-[#ffffff80]">
          If you have any questions or special request, we are available to
          assist you
        </h2>
        <div></div>
      </div>
      <Footer></Footer>
    </>
  );
}

import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Button from "./Components/Button";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className="relative h-screen w-[99vw]">
        <img
          src="/audi.jpg"
          alt=""
          className="z-2 absolute w-screen h-screen"
        />
        <Header scrolled={isScrolled}></Header>
        <div className="z-3 absolute top-[40vh] left-[5vw] text-left">
          <h1 className="font-medium w-150 text-left text-6xl mb-6">
            Audi A5 2023 sportsback quattro
          </h1>
          <Button isAbsolute={true}>Discover Now</Button>
        </div>
      </div>
      <div className="h-1000"></div>
    </>
  );
}

export default App;

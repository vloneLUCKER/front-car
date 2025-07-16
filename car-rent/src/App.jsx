import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";

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
    <div className="bg-[url('/audi.jpg')]">
      <Header scrolled={isScrolled}></Header>
      <div className="h-1000"></div>
    </div>
  );
}

export default App;

// import { ReactComponent as Logo } from "../../../public";

import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex content-between h-32 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-lg border-none"
          : "bg-black/15 backdrop-blur-[2px] "
      } fixed top-0 w-full z-50 
        transition-all duration-300 ease-in-out justify-between items-center`}
    >
      <nav className="flex justify-around align-middle w-[38%]">
        <a href="/models" className="  text-[16px]">
          models
        </a>
        <a href="#" className="  text-[18px]">
          cars for rent
        </a>
        <a href="/rims" className="  text-[18px]">
          rims
        </a>
        <a href="#" className=" text-[18px]">
          boutique
        </a>
      </nav>
      <a href="./">
        <img
          src="/logo-rent.svg"
          alt="huy"
          className="w-50 absolute left-[44%] top-13"
        />
      </a>
      <nav className="flex justify-around align-middle w-[33%]">
        <a href="/news" className="  text-[18px]">
          news
        </a>
        <a href="/dealer" className="  text-[18px]">
          find a dealer
        </a>
        <a href="#" className="  text-[18px]">
          contact us
        </a>
      </nav>
    </header>
  );
}

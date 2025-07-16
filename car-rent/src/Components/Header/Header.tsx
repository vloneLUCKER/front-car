// import { ReactComponent as Logo } from "../../../public";

export default function Header({ scrolled }) {
  return (
    <header
      className={`flex content-between h-32 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-none"
          : "bg-black/0 backdrop-blur-none border-b border-b-gray-600"
      } fixed top-0 w-full 
        transition-all duration-300 ease-in-out justify-between items-center`}
    >
      <nav className="flex justify-between align-middle">
        <a href="#" className="ml-8 mr-8 text-[16px]">
          models
        </a>
        <a href="#" className="ml-8 mr-8 text-[18px]">
          cars for rent
        </a>
        <a href="#" className="ml-8 mr-8 text-[18px]">
          rims
        </a>
        <a href="#" className="ml-8 mr-60 text-[18px]">
          boutique
        </a>
      </nav>
      <img
        src="/logo-rent.svg"
        alt="huy"
        className="w-50 absolute left-[44%]"
      />
      <nav className="flex justify-between align-middle">
        <a href="#" className="ml-8 mr-8 text-[18px]">
          news
        </a>
        <a href="#" className="ml-8 mr-8 text-[18px]">
          find a dealer
        </a>
        <a href="#" className="ml-8 mr-8 text-[18px]">
          contact us
        </a>
      </nav>
    </header>
  );
}

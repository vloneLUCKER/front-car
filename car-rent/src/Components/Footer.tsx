import Button from "./Button";

export default function Footer() {
  return (
    <footer className="mt-10 flex flex-col gap-12">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="text-5xl">RENT YOUR DREAM</h1>
        <h1 className="text-2xl text-[#ffffff75]">
          Get in touch with your dream
        </h1>
        <Button full={true}>Contact Us</Button>
      </div>
      <hr className="bg-gray-300" />
      <div className="flex justify-around text-xl text-[#ffffff90]">
        <a href="">models</a>
        <a href="">cars for rent</a>
        <a href="">rims</a>
        <a href="">boutique</a>
        <a href="">news</a>
        <a href="">dealers</a>
      </div>
      <hr />
      <h1 className="text-[#ffffff80] mb-2">
        Site was Fully established by S&D corp 2025
      </h1>
    </footer>
  );
}

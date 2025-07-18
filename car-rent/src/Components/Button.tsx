export default function Button({ full, children }) {
  return (
    <button
      className={`${
        full ? "w-40" : "min-w-20"
      } py-5 px-8 bg-[#829fb0] rounded-lg tracking-wider font-medium hover:bg-[#829fb090] transition-all transform hover:scale-110`}
    >
      {children}
    </button>
  );
}

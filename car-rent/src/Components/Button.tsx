export default function Button({ full, children }) {
  return (
    <button
      className={`${
        full ? "w-full" : "min-w-20"
      } py-5 px-8 bg-[#829fb0] rounded-lg tracking-wider font-medium`}
    >
      {children}
    </button>
  );
}

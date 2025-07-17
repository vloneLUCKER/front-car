import "./Select.css";
export default function Select({ text }) {
  return (
    <select
      className="
  w-full
  px-3
  py-2
  border
  border-gray-300
  border-solid
  bg-[#25282a]
  rounded-md
  focus:outline-none
  focus:ring-2
  focus:ring-gray-100
  focus:border-transparent
  appearance-none
"
    >
      <option value="" disabled selected>
        {text}
      </option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  );
}

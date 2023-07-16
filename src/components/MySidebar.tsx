import { BiSearchAlt } from "react-icons/bi";
import SelectOption from "./SelectOption";

const MySidebar = () => {
  return (
    <div
      className={`inset-y-0 left-0 bg-gray-200 transition-transform duration-300 transform relative translate-x-0 w-auto p-0`}
    >
      {/* Search Bar */}
      <li className="flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3">
        <input
          className="h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none"
          type="text"
          name="search"
          id="search"
        />
        <button>
          <BiSearchAlt />
        </button>
      </li>

      {/* Dropdown Select Options */}
      <select className="border border-gray-300 rounded p-2 mb-4">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <SelectOption></SelectOption>

      {/* Button */}
      <button className="bg-blue-500 text-white rounded p-2">Button</button>
    </div>
  );
};

export default MySidebar;

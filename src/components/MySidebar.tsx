import { setFilter } from "@/redux/features/filters/filterSlice";
import { useAppDispatch } from "@/redux/hook";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const MySidebar = () => {
  const dispatch = useAppDispatch();
  const [genre, setGenre] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const handleFilterChange = (key: string, value: string) => {
    if (key === "genre") {
      setGenre(value);
    } else if (key === "publicationDate") {
      setPublicationDate(value);
    }

    dispatch(setFilter({ key, value }));
  };
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
      <div>
        <label htmlFor="genre">Genre:</label>
        <select
          id="genre"
          value={genre}
          onChange={(e) => handleFilterChange("genre", e.target.value)}
        >
          <option value="">All</option>
          <option value="fantasy">Fantasy</option>
          <option value="romance">Romance</option>
          {/* Add more genre options */}
        </select>

        <label htmlFor="publicationDate">Publication Date:</label>
        <select
          id="publicationDate"
          value={publicationDate}
          onChange={(e) =>
            handleFilterChange("publicationDate", e.target.value)
          }
        >
          <option value="">All</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          {/* Add more publication date options */}
        </select>
      </div>

      {/* Button */}
      <button className="bg-blue-500 text-white rounded p-2">Button</button>
    </div>
  );
};

export default MySidebar;

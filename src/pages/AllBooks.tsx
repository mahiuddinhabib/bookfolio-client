import TableRow from "@/components/TableRow";
import { useGetBooksQuery } from "@/redux/features/books/bookApi";
import { setFilter, setSearchTerm } from "@/redux/features/filters/filterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IBook } from "@/types/globalTypes";
import { Table } from "flowbite-react";
import { BiSearchAlt } from "react-icons/bi";

const AllBooks = () => {
  const dispatch = useAppDispatch();
  const { filters, searchTerm } = useAppSelector((state) => state.filter);
  const { genre, publicationDate } = filters;

  const { data } = useGetBooksQuery({
    searchTerm: searchTerm,
    genre: genre,
    publicationDate: publicationDate,
  });
  
  const handleFilterChange = (key: string, value: string) => {
    dispatch(setFilter({ key, value }));
  };
  const handleSearchTermChange = (value: string) => {
    dispatch(setSearchTerm(value));
  };

  // console.log(data.data);
  return (
    <div className="flex justify-evenly mx-4 md:mx-16 lg:mx-30">
      <div
        className={`inset-y-0 left-0 bg-gray-200 transition-transform duration-300 transform relative translate-x-0 w-auto p-0`}
      >
        {/* Search Bar */}
        <li className="flex bg-white mx-auto h-8 w-full max-w-lg rounded-full pr-3">
          <input
            className="h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none"
            type="text"
            name="search"
            id="search"
            value={searchTerm}
            onChange={(e) => handleSearchTermChange(e.target.value)}
          />
          <button onClick={() => handleSearchTermChange("")}>
            <BiSearchAlt />
          </button>
        </li>

        {/* Dropdown Select Options */}
        <div>
          <label htmlFor="genre">Genre:</label>
          <select
            id="genre"
            value={filters.genre}
            onChange={(e) => handleFilterChange("genre", e.target.value)}
          >
            <option value="">All</option>
            <option value="fantasy">Fantasy</option>
            <option value="romance">Romance</option>
          </select>

          <label htmlFor="publicationDate">Publication Date:</label>
          <select
            id="publicationDate"
            value={filters.publicationDate}
            onChange={(e) =>
              handleFilterChange("publicationDate", e.target.value)
            }
          >
            <option value="">All</option>
            <option value="2011">2011</option>
            <option value="1969">1969</option>
          </select>
        </div>

        {/* Button */}
        <button className="bg-blue-500 text-white rounded p-2">Add New</button>
      </div>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Author</Table.HeadCell>
          <Table.HeadCell>Genre</Table.HeadCell>
          <Table.HeadCell>Published</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data?.data.map((book: IBook) => (
            <TableRow book={book} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default AllBooks;

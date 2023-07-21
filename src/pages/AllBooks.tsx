import TableRow from "@/components/TableRow";
import { useGetBooksQuery } from "@/redux/features/books/bookApi";
import { setFilter, setSearchTerm } from "@/redux/features/filters/filterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IBook } from "@/types/globalTypes";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const dispatch = useAppDispatch();
  const { filters, searchTerm } = useAppSelector((state) => state.filter);
  const { genre, publicationDate } = filters;

  const { data, isLoading } = useGetBooksQuery({
    searchTerm: searchTerm,
    genre: genre,
    publicationDate: publicationDate,
  });

  const publicationYears = [
    ...new Set(data?.data?.map((book: IBook) => book.publicationDate)),
  ];

  const handleFilterChange = (key: string, value: string) => {
    dispatch(setFilter({ key, value }));
  };
  const handleSearchTermChange = (value: string) => {
    dispatch(setSearchTerm(value));
  };

  // console.log(data.data);
   if (isLoading) {
     return <p>Loading...</p>;
   }
  return (
    <div className="flex justify-evenly mx-4 md:mx-16 lg:mx-30">
      <div
        className={`inset-y-0 left-0 bg-gray-200 rounded-lg transition-transform duration-300 transform relative translate-x-0 w-auto p-4`}
      >
        {/* Search Bar */}
        <li className="flex bg-white mx-auto h-10 w-full max-w-lg rounded-full pr-3">
          <input
            className="h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none"
            type="text"
            name="search"
            placeholder="Type to search"
            value={searchTerm}
            onChange={(e) => handleSearchTermChange(e.target.value)}
          />
        </li>

        {/* Dropdown Select Options */}
        <div className="flex gap-20 my-10">
          <div>
            <label htmlFor="genre" className="font-medium text-gray-700">
              Genre
            </label>{" "}
            <br />
            <select
              id="genre"
              value={filters.genre}
              onChange={(e) => handleFilterChange("genre", e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="">All</option>
              <option value="mystery">Mystery</option>
              <option value="fantasy">Fantasy</option>
              <option value="self-help">Self-Help</option>
              <option value="biography">Biography</option>
              <option value="thriller">Thriller</option>
              <option value="romance">Romance</option>
              <option value="history">History</option>
              <option value="fiction">Fiction</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="publicationDate"
              className="font-medium text-gray-700"
            >
              Publication Year
            </label>
            <br />
            <select
              id="publicationDate"
              value={filters.publicationDate}
              onChange={(e) =>
                handleFilterChange("publicationDate", e.target.value)
              }
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="">All</option>
              {publicationYears?.map((year: any, index: number) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Button */}
        <Link
          to={"/add-book"}
          className="bg-gray-400 px-3 py-2 rounded-lg hover:bg-gray-500 transition-all duration-200 focus:outline-none active:transform active:scale-95"
        >
          Add New Book
        </Link>
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
          {data?.data.map((book: IBook, index: number) => (
            <TableRow key={index} book={book} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default AllBooks;

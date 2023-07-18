import { IBook } from "@/types/globalTypes";
import { Table } from "flowbite-react";
import bookCover from "@/assets/bookCover.png";
import { Link } from "react-router-dom";

const TableRow = ({ book }: { book: IBook }) => {
  const { title, author, genre, publicationDate, _id } = book;
  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium flex items-center gap-2 text-gray-900 dark:text-white">
          <img src={bookCover} className="w-8" />
          {title}
        </Table.Cell>
        <Table.Cell>{author}</Table.Cell>
        <Table.Cell>{genre}</Table.Cell>
        <Table.Cell>{publicationDate}</Table.Cell>
        <Table.Cell>
          <Link to={`/single-book/${_id}`} className="bg-yellow-200 px-2 py-1 rounded-lg hover:bg-yellow-300 transition-all duration-200 focus:outline-none active:transform active:scale-95">
            Detail
          </Link>
        </Table.Cell>
        <Table.Cell>
          <button className="bg-red-400 px-2 py-1 rounded-lg hover:bg-red-500 text-white transition-all duration-200 focus:outline-none active:transform active:scale-95">
            +Wishlist
          </button>
        </Table.Cell>
        <Table.Cell>
          <button className="bg-red-400 px-2 py-1 rounded-lg hover:bg-red-500 text-white transition-all duration-200 focus:outline-none active:transform active:scale-95">
            +toRead
          </button>
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default TableRow;

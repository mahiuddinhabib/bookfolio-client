import TableRow from "@/components/TableRow";
import { useGetBooksQuery } from "@/redux/features/books/bookApi";
import { IBook } from "@/types/globalTypes";
import { Table } from "flowbite-react";

const AllBooks = () => {
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  // console.log(data.data);
  return (
    <div>
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

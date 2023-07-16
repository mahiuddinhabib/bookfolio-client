import MySidebar from "@/components/MySidebar";
import TableRow from "@/components/TableRow";
import { useGetBooksQuery } from "@/redux/features/books/bookApi";
import { IBook } from "@/types/globalTypes";
import { Sidebar, Table } from "flowbite-react";

const AllBooks = () => {
  const { data, isLoading, error } = useGetBooksQuery({searchTerm:''});
  // console.log(data.data);
  return (
    <div className="flex justify-evenly mx-4 md:mx-16 lg:mx-30">
{/*       <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">
              <p>Dashboard</p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
            
              label="Pro"
              labelColor="dark"
            >
              <p>Kanban</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" label="3">
              <p>Inbox</p>
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <p>Users</p>
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <p>Products</p>
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <p>Sign In</p>
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <p>Sign Up</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar> */}
      <MySidebar></MySidebar>
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

import { useGetWishlistQuery } from "@/redux/features/user/userApi";
import { Table } from "flowbite-react";
import bookCover from "@/assets/bookCover.png";

const WishList = () => {
    const storedUserId = localStorage.getItem("id");
    const { data } = useGetWishlistQuery(storedUserId);
    return (
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Author</Table.HeadCell>
          <Table.HeadCell>Genre</Table.HeadCell>
          <Table.HeadCell>Published</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only"></span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data?.data.map((item: any) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium flex items-center gap-2 text-gray-900 dark:text-white">
                <img src={bookCover} className="w-8" />
                {item.title}
              </Table.Cell>
              <Table.Cell>{item.author}</Table.Cell>
              <Table.Cell>{item.genre}</Table.Cell>
              <Table.Cell>{item.publicationDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
};

export default WishList;
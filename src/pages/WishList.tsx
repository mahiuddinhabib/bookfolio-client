import { useGetWishlistQuery } from "@/redux/features/user/userApi";
import { Table } from "flowbite-react";
import bookCover from "@/assets/bookCover.png";
import { useAppSelector } from "@/redux/hook";

const WishList = () => {
    // const storedUserId = localStorage.getItem("id");
    const userId = useAppSelector((state) => state.user.userId);
    const { data } = useGetWishlistQuery(userId);
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
          {data?.data.map((item: any, index:number) => (
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
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
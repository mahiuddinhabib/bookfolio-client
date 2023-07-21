import {
  useGetToReadQuery,
  useUpdateIsFinishedMutation,
} from "@/redux/features/user/userApi";
import { Table } from "flowbite-react";
import bookCover from "@/assets/bookCover.png";
import { toast } from "react-hot-toast";
import { useAppSelector } from "@/redux/hook";

const ToRead = () => {
  const userId = useAppSelector((state) => state.user.userId);
  // const storedUserId = localStorage.getItem("id");
  const { data } = useGetToReadQuery(userId);
  const [finished] = useUpdateIsFinishedMutation();
  // console.log(data);

  const handleIsFinished = async (bookId: string) => {
    try {
      const finishedData = {
        user: userId,
        book: bookId,
      };
      const response: any = await finished(finishedData);

      if (response?.data?.success) {
        toast.success("Finished reading");
      } else {
        toast.error("Failed to update reading status");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while updating reading status");
    }
  };

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
        {data?.data.map((item: any, index: number) => (
          <Table.Row
            key={index}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell className="whitespace-nowrap font-medium flex items-center gap-2 text-gray-900 dark:text-white">
              <img src={bookCover} className="w-8" />
              {item?.book?.title}
            </Table.Cell>
            <Table.Cell>{item?.book?.author}</Table.Cell>
            <Table.Cell>{item?.book?.genre}</Table.Cell>
            <Table.Cell>{item?.book?.publicationDate}</Table.Cell>
            <Table.Cell>
              {!item?.isFinished ? (
                <>
                  <span className="mr-3">Currently Reading</span>
                  <button
                    onClick={() => handleIsFinished(item.book._id)}
                    className="bg-yellow-200 px-2 py-1 rounded-lg hover:bg-yellow-300 transition-all duration-200 focus:outline-none active:transform active:scale-95"
                  >
                    Finish
                  </button>
                </>
              ) : (
                <span className="bg-green-300 px-2 py-1 rounded-lg">
                  Finished Reading
                </span>
              )}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ToRead;

import { useAddBookMutation } from "@/redux/features/books/bookApi";

const AddBook = () => {
  const data = {
    title: "Test Book",
    author: "Test Writer",
    genre: "fiction",
    publicationDate: "2023",
    reviews: [
      {
        reviewer: "64b0d1c10f130293529e59d3",
        review: "This is awesome!",
      },
    ],
    owner: "64b0d1c10f130293529e59d3",
  };

  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();

  const handleAddBook = () => {
    addBook({ data });
    console.log(`Error: ${isError}, success: ${isSuccess}`);
  };
  return (
    <div>
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default AddBook;

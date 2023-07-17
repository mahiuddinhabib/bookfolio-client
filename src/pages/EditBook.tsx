import { useEditBookMutation } from "@/redux/features/books/bookApi";

const EditBook = () => {
  const bookId = "64b498ce2bf1fbd16f4eef6b";
  const data = {
    title: "No Book",
    author: "No Writer",
  };

  const [editBook, { isLoading, isError, isSuccess }] = useEditBookMutation();

  const handleEditBook = () => {
    editBook({ id: bookId, data })
      .then((result) => {
        console.log(`Success: ${isSuccess}`, result);
      })
      .catch((error) => {
        console.log(`Error: ${isError}`, error);
      });
  };
  return (
    <div>
      <button onClick={handleEditBook}>Edit Book</button>
    </div>
  );
};

export default EditBook;

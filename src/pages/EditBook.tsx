import { useEditBookMutation } from "@/redux/features/books/bookApi";
import { useParams } from "react-router-dom";

const EditBook = () => {
  const {id} = useParams()
  const data = {
    title: "Edited book",
    author: "Test Writer",
    genre: "fiction",
    publicationDate: "2023",
    owner: "64b0d1c10f130293529e59d3",
  };

  const [editBook, { isLoading, isError, isSuccess }] = useEditBookMutation();

  const handleEditBook = () => {
    editBook({ id, data })
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
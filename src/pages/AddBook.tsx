import { useState } from "react";
import { useAddBookMutation } from "@/redux/features/books/bookApi";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    owner: "",
  });

  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBook = () => {
    addBook({ data: formData }).then((data) => console.log(data));
  };

  return (
    <div>
      <form>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Publication Date:
          <input
            type="text"
            name="publicationDate"
            value={formData.publicationDate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Owner:
          <input
            type="text"
            name="owner"
            value={formData.owner}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;

/* import { useAddBookMutation } from "@/redux/features/books/bookApi";

const AddBook = () => {
  const data = {
    title: "Test Book 2",
    author: "Test Writer",
    genre: "fiction",
    publicationDate: "2023",
    owner: "64b0d1c10f130293529e59d3",
  };

  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();

  const handleAddBook = () => {
    addBook({ data }).then(data=>console.log(data));
  };
  return (
    <div>
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default AddBook;
 */

import { useState } from "react";
import { useAddBookMutation } from "@/redux/features/books/bookApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const storedUserId = localStorage.getItem("id");
const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    owner: storedUserId
  });
  const [addBook] = useAddBookMutation();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBook = async () => {
    await addBook({ data: formData });
    // console.log(formData);
    toast.success("Book added successfully");
    navigate("/");
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
          <select
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
          >
            <option value="">Select a genre</option>
            <option value="mystery">Mystery</option>
            <option value="fantasy">Fantasy</option>
            <option value="self-help">Self-Help</option>
            <option value="biography">Biography</option>
            <option value="thriller">Thriller</option>
            <option value="romance">Romance</option>
            <option value="history">History</option>
            <option value="fiction">Fiction</option>
          </select>
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
        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
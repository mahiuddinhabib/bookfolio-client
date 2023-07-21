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
      <h1 className="text-2xl text-center mb-8 font-medium">Add New Book</h1>
      <form className="max-w-lg mx-6 md:mx-auto">
        <label className="block font-medium text-gray-700">
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </label>
        <br />
        <label className="block font-medium text-gray-700">
          Author:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </label>
        <br />
        <label className="block font-medium text-gray-700">
          Genre:
          <select
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
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
        <label className="block font-medium text-gray-700">
          Publication Date:
          <input
            type="text"
            name="publicationDate"
            value={formData.publicationDate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </label>
        <br />
        <div className="text-center">
          <button
            type="button"
            onClick={handleAddBook}
            className="bg-gray-400 px-3 py-2 rounded-lg hover:bg-gray-500 transition-all duration-200 focus:outline-none active:transform active:scale-95"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
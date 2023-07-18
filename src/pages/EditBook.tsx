import { useForm } from "react-hook-form";
import { useState } from "react";
import { FormValues } from "../types/globalTypes";
import { useNavigate, useParams } from "react-router-dom";
import {
  useSingleBookQuery,
  useEditBookMutation,
} from "../redux/features/books/bookApi";

const UpdateBook = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useSingleBookQuery(id);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editBook] = useEditBookMutation();

  const onSubmit = async (formData: FormValues) => {
    setIsSubmitting(true);

    try {
      await editBook({ id, data: formData });

      // Display a success toast
      // toast.success("Book updated successfully");

      // navigate(`/book-details/${id}`);
      // Reset the form
      setIsSubmitting(false);
    } catch (error) {
      // Display an error toast
      // toast.error(`${error}`);

      // Reset the form
      setIsSubmitting(false);
    }
  };

  if (isError) {
    return <p>Error fetching book data</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block mb-2 text-lg font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          defaultValue={book?.data?.title}
          {...register("title", { required: true })}
          className={`w-full px-4 py-2 border rounded-lg ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.title && (
          <span className="text-red-500">Title is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="author"
          className="block mb-2 text-lg font-medium text-gray-700"
        >
          Author
        </label>
        <input
          type="text"
          id="author"
          defaultValue={book?.data?.author}
          {...register("author", { required: true })}
          className={`w-full px-4 py-2 border rounded-lg ${
            errors.author ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.author && (
          <span className="text-red-500">Author is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="genre"
          className="block mb-2 text-lg font-medium text-gray-700"
        >
          Genre
        </label>
        <input
          type="text"
          id="genre"
          defaultValue={book?.data?.genre}
          {...register("genre", { required: true })}
          className={`w-full px-4 py-2 border rounded-lg ${
            errors.genre ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.genre && (
          <span className="text-red-500">Genre is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="publicationDate"
          className="block mb-2 text-lg font-medium text-gray-700"
        >
          Publication Date
        </label>
        <input
          type="text"
          id="publicationDate"
          defaultValue={book?.data?.publicationDate}
          {...register("publicationDate")}
          className={`w-full px-4 py-2 border rounded-lg ${
            errors.publicationDate ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.publicationDate && (
          <span className="text-red-500">Publication Date is required</span>
        )}
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg focus:outline-none"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Update Book"}
        </button>
      </div>
    </form>
  );
};

export default UpdateBook
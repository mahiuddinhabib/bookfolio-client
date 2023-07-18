import {useState} from 'react'
import {
  usePostReviewMutation,
  useSingleBookQuery,
} from "@/redux/features/books/bookApi";
import { Link, useParams } from "react-router-dom";
import bookCover from "@/assets/bookCover.png";
import profilePhoto from "@/assets/profile.svg";

const BookDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSingleBookQuery(id);
  const [revieW, setRevieW] = useState('');
  const [addReview] = usePostReviewMutation();

    const handleAddReview = (e) => {
      e.preventDefault();
      console.log(revieW);
      const data = {
        reviewer: "64b0d1c10f130293529e59d3", //user id
        review: revieW,
      };
      // Call the addReview mutation with the book ID and review data
      addReview({id, data}).then(data=>console.log(data));
      setRevieW('');
    };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { title, genre, author, publicationDate, reviews } = data.data;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-x-4">
      {/* Image */}
      <div className="w-full md:w-1/3">
        <img src={bookCover} alt={title} className="w-full h-auto" />
      </div>

      {/* Description */}
      <div className="w-full md:w-2/3">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Genre:</span> {genre}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Author:</span> {author}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Publication Year:</span>{" "}
          {publicationDate}
        </p>
        <Link to={`/edit-book/${id}`}>Edit Book</Link>
        

        {/* Reviews */}
        {reviews && reviews.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            {reviews.map((review) => (
              <div key={review._id} className="flex items-center mb-4">
                <img
                  src={profilePhoto}
                  alt={review.reviewer.name.firstName}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">
                    {review.reviewer.name.firstName}
                  </p>
                  <p className="text-gray-600">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Review Form */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Add Review</h2>
          <form>
            <label>
              Add Review:
              <input
                type="text"
                name="review"
                value={revieW}
                onChange={(e)=>setRevieW(e.target.value)}
              />
            </label>
            <button type="button" onClick={handleAddReview}>
              Add Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

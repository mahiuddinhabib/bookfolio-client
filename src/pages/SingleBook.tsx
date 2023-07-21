import { useState } from "react";
import {
  usePostReviewMutation,
  useSingleBookQuery,
} from "@/redux/features/books/bookApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import bookCover from "@/assets/bookCover.png";
import profilePhoto from "@/assets/profile.svg";
import {
  useAddToWishlistMutation,
  useAddTotoReadMutation,
} from "@/redux/features/user/userApi";
import { toast } from "react-hot-toast";
import { useAppSelector } from "@/redux/hook";
import MyModal from "@/components/MyModal";

const BookDetail = () => {
  const userId = useAppSelector((state) => state.user.userId);
  const { id } = useParams();
  const { data, isLoading } = useSingleBookQuery(id);
  const [revieW, setRevieW] = useState("");
  const [addReview] = usePostReviewMutation();
  const [addToWishlist] = useAddToWishlistMutation();
  const [addTotoRead] = useAddTotoReadMutation();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleAddReview = (e: any) => {
    e.preventDefault();
    // console.log(revieW);
    const data = {
      reviewer: userId,
      review: revieW,
    };
    addReview({ id, data });
    toast.success("Review added");
    setRevieW("");
  };

  const handleAddToWishlist = async () => {
    const wishedData = {
      user: userId,
      book: id,
    };
    try {
      await addToWishlist(wishedData);
      toast.success("Added to wishlist");
      navigate("/wish-list");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTotoRead = async () => {
    const readData = {
      user: userId,
      book: id,
    };
    try {
      await addTotoRead(readData);
      toast.success("Added to To Read");
      navigate("/to-read");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
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
        <Link
          to={`/edit-book/${id}`}
          className="bg-gray-400 px-[7px] py-[5.2px] rounded-lg mr-3 hover:bg-gray-500 transition-all duration-200 focus:outline-none active:transform active:scale-95"
        >
          Edit Book
        </Link>
        <button
          onClick={() => setOpenModal(true)}
          className="bg-gray-400 px-2 py-1 rounded-lg mr-3 hover:bg-gray-500 transition-all duration-200 focus:outline-none active:transform active:scale-95"
        >
          Delete book
        </button>
        <button
          onClick={handleAddToWishlist}
          className="bg-gray-400 px-2 py-1 rounded-lg mr-3 hover:bg-gray-500 transition-all duration-200 focus:outline-none active:transform active:scale-95"
        >
          Add to wishlist
        </button>
        <button
          onClick={handleAddTotoRead}
          className="bg-gray-400 px-2 py-1 rounded-lg mr-3 hover:bg-gray-500 transition-all duration-200 focus:outline-none active:transform active:scale-95"
        >
          Add to toRead
        </button>

        {/* Reviews */}
        {reviews && reviews.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            {reviews.map((review: any) => (
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
            <input
              type="text"
              name="review"
              value={revieW}
              className="w-[50%] border-gray-400 border-s-2 border-e-0 border-y-2 rounded-s-xl focus:border-gray-400 focus:ring-0 outline-none"
              onChange={(e) => setRevieW(e.target.value)}
            />
            <button
              type="button"
              onClick={handleAddReview}
              disabled={revieW === ""}
              className={`bg-gray-400 px-2 py-[9.5px] rounded-e-xl mr-3 hover:bg-gray-500 transition-all duration-200 disabled:bg-gray-400`}
            >
              Add Review
            </button>
          </form>
        </div>
      </div>
      {/* modal */}
      <MyModal open={openModal} onClose={() => setOpenModal(false)} id={id} />
    </div>
  );
};

export default BookDetail;

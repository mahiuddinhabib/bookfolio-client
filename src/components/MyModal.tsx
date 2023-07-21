import { useDeleteBookMutation } from "@/redux/features/books/bookApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MyModal = ({
  open,
  onClose,
  id,
}: {
  open: boolean;
  onClose: any;
  id: string | undefined;
}) => {
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();

  if (!open) return null;
  const handleDelete = async () => {
    try {
      await deleteBook({ id });
      toast.error("Book deleted Successfully");
      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <div className="content">
            <p className="text-xl">
              Are you sure you want to <br />
              <span className="bold text-red-600">DELETE</span> the book{" "}
            </p>
          </div>
          <div className="btnContainer">
            <button
              className="bg-red-400 px-3 py-2 rounded-lg hover:bg-red-600 transition-all duration-200 focus:outline-none active:transform active:scale-95"
              onClick={handleDelete}
            >
              <span className="bold">YES</span>, I hate this
            </button>
            <button
              className="bg-green-300 px-3 py-2 rounded-lg hover:bg-green-400 transition-all duration-200 focus:outline-none active:transform active:scale-95"
              onClick={onClose}
            >
              <span className="bold">NO</span>, I love this
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;

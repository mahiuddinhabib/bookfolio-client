import { useSingleBookQuery } from "@/redux/features/books/bookApi";

const SingleBook = () => {
  const { data, isLoading, error } = useSingleBookQuery(
    "64b13116d31568349eaf4483"
  );
  console.log(`loading: ${isLoading}, error: ${error}`);
  console.log(data);
  return (
    <div>
      <h3 className="text-xl">Get Book</h3>
    </div>
  );
};

export default SingleBook;

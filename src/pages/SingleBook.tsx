import { useSingleBookQuery } from "@/redux/features/books/bookApi";

const SingleBook = () => {
  const { data, isLoading, error } = useSingleBookQuery(
    "64b13116d31568349eaf4483"
  );

  const handleGet = () => {
    console.log(`loading: ${isLoading}, error: ${error}`);
    console.log(data);
  };
  return (
    <div>
      <button onClick={handleGet}>Get Book</button>
    </div>
  );
};

export default SingleBook;

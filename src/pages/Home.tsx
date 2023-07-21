import CardComponent from "@/components/CardComponent";
import { useGetBooksQuery } from "@/redux/features/books/bookApi";
import { IBook } from "@/types/globalTypes";
const Home = () => {
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  // console.log(data, isLoading, error);
  return (
    <div className="px-4 md:px-12 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.data
          .slice() // create a copy of the array as .sort can't implement on readonly array data.data
          .sort(
            (
              a: { createdAt: string | number | Date },
              b: { createdAt: string | number | Date }
            ) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .slice(0, 10)
          .map((book: IBook, index: number) => (
            <CardComponent key={index} book={book} />
          ))}
      </div>
    </div>
  );
};

export default Home;

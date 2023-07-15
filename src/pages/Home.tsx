import { useGetBooksQuery } from "@/redux/features/books/bookApi";
import { Button } from "flowbite-react";

const Home = () => {
    const { data, isLoading, error } = useGetBooksQuery(undefined);
    console.log(data, isLoading, error);
    return (
        <div>
            <div className="bg-orange-200 flex items-center justify-center"><Button>Click Me</Button></div>
        </div>
    );
};

export default Home;
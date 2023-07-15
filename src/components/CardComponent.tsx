"use client";

import { IBook } from "@/types/globalTypes";
import { Button, Card } from "flowbite-react";
import { BsStarFill } from "react-icons/bs";
import MyButton from "./Button";
export default function CardComponent({ book }: { book: IBook }) {
  const { title, author, genre, publicationDate, owner } = book;
  // console.log(title, author, genre, publicationDate, owner);

  const showRating = (rating = 4) => {
    const stars = [];
    for (let i = 0; i < rating; i++) stars.push(<BsStarFill />);
    return stars;
  };

  return (
    <Card
      imgAlt="Book cover here"
      imgSrc="https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F25%2F23%2F28%2F18%2F85d3210c-5479-4b7a-a473-fd807e4ca89c%2FHero2.png?auto=format&ch=Width%2CDPR&crop=false&fm=png&w=600&h=600"
    >
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title} <br />
        <span className="text-sm">Book by {author}</span>
      </h5>
      <div className="flex items-center justify-between">
        <span className="flex gap-[5px] text-xl font-bold text-gray-500 dark:text-yellow-400">
          {showRating()}
        </span>
        {/* <button className="bg-gray-400 px-3 py-2 rounded-lg hover:bg-gray-500 transition-all duration-200 focus:outline-none active:transform active:scale-95">
          See more
        </button> */}
        <MyButton onClick={()=>{console.log('clicked');}}>See more</MyButton>
      </div>
    </Card>
  );
}

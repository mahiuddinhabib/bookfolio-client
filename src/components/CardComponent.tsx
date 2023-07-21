"use client";

import { IBook } from "@/types/globalTypes";
import { BsStarFill } from "react-icons/bs";
import bookCover from "@/assets/bookCover.png"
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CardComponent({ book }: { book: IBook }) {
  const { _id, title, author } = book;
  // console.log(title, author, genre, publicationDate, owner);

  const showRating = (rating = 4) => {
    const stars = [];
    for (let i = 0; i < rating; i++) stars.push(<BsStarFill key={i} />);
    return stars;
  };

  return (
    <Card imgAlt="Book cover here" imgSrc={bookCover}>
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title} <br />
        <span className="text-sm">Book by {author}</span>
      </h5>
      <div className="flex items-center justify-between">
        <span className="flex gap-[5px] text-xl font-bold text-gray-500 dark:text-yellow-400">
          {showRating()}
        </span>
        <Link
          to={`/single-book/${_id}`}
          className="bg-gray-400 px-3 py-2 rounded-lg hover:bg-gray-500 transition-all duration-200 focus:outline-none active:transform active:scale-95"
        >
          Detail
        </Link>
      </div>
    </Card>
  );
}

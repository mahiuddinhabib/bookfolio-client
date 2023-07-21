export type IBookReview = {
  reviewer: string;
  review: string;
};

export type IBookGenre =
  | "mystery"
  | "fantasy"
  | "self-help"
  | "biography"
  | "thriller"
  | "romance"
  | "history"
  | "fiction";

export type IBook = {
  _id?: string;
  title: string;
  author: string;
  genre: IBookGenre;
  publicationDate: string;
  reviews?: IBookReview[];
  owner: IUser;
};

export type UserName = {
  firstName: string;
  lastName: string;
};

export type IUser = {
  name: UserName;
  email: string;
  password: string;
};

export type FormValues = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
};

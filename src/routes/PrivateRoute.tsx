import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
//   const { user, isLoading } = useAppSelector((state) => state.user);
const storedUserId = localStorage.getItem("id");

  const { pathname } = useLocation();


  if (!storedUserId) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
}

import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const userId = useAppSelector((state) => state.user.userId);
//   const { user, isLoading } = useAppSelector((state) => state.user);
// const storedUserId = localStorage.getItem("id");


  const { pathname } = useLocation();


  if (!userId) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
}

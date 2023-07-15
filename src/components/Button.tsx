import React from "react";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const MyButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="bg-gray-400 px-3 py-2 rounded-lg hover:bg-gray-500 transition-all duration-200 focus:outline-none active:transform active:scale-95"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MyButton;

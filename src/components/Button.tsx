import React, { FC } from "react";
import { PlusMiniIcon } from "../assets";

type ButtonValue = {
  children?: React.ReactNode;
  variants: "fab";
};

const ButtonVariants = {
  fab: {
    className:
      "text-indigo-500 font-bold bg-indigo-400 rounded-full w-20 h-20 shadow-lg shadow-indigo-500/50 p-3",
    icon: <PlusMiniIcon />,
  },
};

const Button: FC<ButtonValue> = ({ children, variants}) => {
  return (
    <button className={ButtonVariants.fab.className}>
      <>{ButtonVariants[variants].icon}</>
      {children}
    </button>
  );
};

export default Button;

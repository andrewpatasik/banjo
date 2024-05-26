import { FC } from "react";
import Button from "./Button";

const Fab: FC = () => {
  return (
    <div className="absolute right-10 bottom-[15%] w-auto h-auto">
      <Button variants={"fab"} />
    </div>
  );
};

export default Fab;

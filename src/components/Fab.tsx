import { FC } from "react";
import Button from "./Button";

const Fab: FC = () => {
  return (
    <div className="fixed right-10 bottom-[13%] w-auto h-auto">
      <Button variants={"fab"} />
    </div>
  );
};

export default Fab;

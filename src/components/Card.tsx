import { FC } from "react";
import ProgressBar from "./ProgressBar";

export type CardValue = {
  image: string;
  tag: string;
  dateTime: Date;
  title: string;
  amount: number;
  iconColor: string;
};

const colorVariants: any = {
  purple: "bg-purple-500",
  green: "bg-green-500",
  orange: "bg-orange-500",
  pink: "bg-rose-500",
};

const getFormattedDate = (datePayload: any) => {
  const today = datePayload;
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;
  return formattedToday;
};

const calculateProgressValue = (amount: number) => {
  // category limit - amount
  const DUMMYLIMIT = 100;
  const currentAmount = Math.floor((amount / DUMMYLIMIT) * 100);
  const currentLimit = 100;
  return currentLimit - currentAmount;
};

const setProgressBarColor = (
  progressValue: number
): "green" | "orange" | "red" => {
  if (progressValue > 40 && progressValue <= 100) return "green";
  else if (progressValue > 30 && progressValue <= 40) return "orange";

  return "red";
};

const Card: FC<CardValue> = ({
  amount,
  dateTime,
  image,
  tag,
  title,
  iconColor,
}) => {
  return (
    <div className="flex items-center w-full px-4 py-2">
      <div className="flex basis-2/3 flex-shrink-0 items-center space-x-2">
        <div className={`rounded-full p-4 ${colorVariants[iconColor]}`}>
          <img
            src={`/images/${image}`}
            srcSet={`/images/${image}`}
            alt="emoji icon"
            width={32}
            height={32}
          />
        </div>

        <div className="flex flex-col -space-y-1 antialiased">
          <div className="flex space-x-1.5 items-center text-sm text-slate-500 font-medium">
            <p>{tag}</p>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <p className="text-slate-400">2 days ago</p>
          </div>
          <h2 className="font-medium antialiased text-tw-ntrl-black">
            {title}
          </h2>
        </div>
      </div>
      <div className="ml-auto flex basis-full items-center">
        <p className="basis-1/4 mx-auto text-xl font-medium tracking-tight text-tw-ntrl-black">
          {`$${amount}`}
        </p>
        <div className="w-2/4 text-center">
          <ProgressBar
            color={setProgressBarColor(calculateProgressValue(amount))}
            progressValue={calculateProgressValue(amount)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

import { FC } from "react";
import ProgressBar from "./ProgressBar";

export type CardValue = {
  image: string;
  tag: string;
  dateTime: Date;
  title: string;
  amount: string;
  iconColor: string;
};

const colorVariants: any = {
  purple: "bg-purple-500",
  green: "bg-green-500",
  orange: "bg-orange-500",
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
      <div className="flex items-center space-x-2">
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
          <div className="text-sm text-slate-400 font-medium">
            <p>{tag}</p>
          </div>
          <h2 className="font-medium antialiased text-tw-ntrl-black">
            {title}
          </h2>
          <div className="flex space-x-2 items-center text-sm text-slate-400">
            <p className="tracking-wide">
              {getFormattedDate(dateTime)}
            </p>
            <p>02.00 pm</p>
          </div>
        </div>
      </div>
      <div className="ml-auto basis-12 flex flex-col space-y-1">
        <p className="mx-auto text-xl font-medium tracking-tight text-tw-ntrl-black">
          {`$${amount}`}
        </p>
        <ProgressBar />
      </div>
    </div>
  );
};

export default Card;

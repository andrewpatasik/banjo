const colorVariants = {
  green: "text-green-500",
  orange: "text-orange-500",
  red: "text-red-500",
};

const ProgressBar = ({
  className,
  color,
  progressValue
}: {
  className?: string;
  color?: "green" | "orange" | "red";
  progressValue: number
}) => (
  <div className="relative w-12 h-12">
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <circle
        className="text-gray-200 stroke-current"
        strokeWidth={10}
        cx={50}
        cy={50}
        r={40}
        fill="transparent"
      ></circle>

      <circle
        className={`${
          color ? colorVariants[color] : colorVariants.green
        } stroke-current origin-center -rotate-90`}
        strokeWidth={10}
        strokeLinecap="round"
        cx={50}
        cy={50}
        r={40}
        fill="transparent"
        strokeDasharray={251.2}
        strokeDashoffset={Math.round(251.1 - (251.1 * progressValue) / 100)}
      ></circle>
    </svg>
  </div>
);

export default ProgressBar;

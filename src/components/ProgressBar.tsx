const ProgressBar = ({ className }: { className?: string }) => (
  // <div
  //   className={`relative bg-gray-200 w-full h-1.5 rounded-full ${className}`}
  // >
  //   <div className="absolute inset-0 w-2/3 h-auto bg-green-500 rounded-full"></div>
  // </div>
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
        className="text-green-500 stroke-current origin-center -rotate-90"
        strokeWidth={10}
        strokeLinecap="round"
        cx={50}
        cy={50}
        r={40}
        fill="transparent"
        strokeDasharray={251.2}
        strokeDashoffset={Math.round(251.1 - (251.1 * 70) / 100)}
      ></circle>
    </svg>

  </div>
);

export default ProgressBar;

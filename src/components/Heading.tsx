import {
  CalendarMicroIcon,
  CreditCardIcon,
} from "../assets";

const Heading = () => {
  return (
    <>
      <div className="px-4 flex flex-col space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex space-x-1 items-center ">
            <p className="text-md text-gray-400 tracking-normal">Hi, Hansen</p>
            <img
              src="/images/waving-hand.webp"
              srcSet="/images/waving-hand.webp"
              width={20}
              height={20}
              alt="waving hand icon"
            />
          </div>

          <div className="flex items-center space-x-1 bg-indigo-50 border-2 border-indigo-300 rounded-full px-2 py-1">
            <CalendarMicroIcon className="w-5 text-indigo-400" />
            <p className="text-sm font-medium text-indigo-300">
              5 days left in October
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-1">
            <div className="flex space-x-1 items-center text-gray-400 ">
              <CreditCardIcon className="w-4 transform rotate-2" />
              <p className="text-sm font-light tracking-wider">
                Remaining budget
              </p>
            </div>
            <h1 className="text-tw-ntrl-black text-3xl font-extrabold tracking-normal antialiased">
              $1900.<span className="text-2xl">00</span>
            </h1>
          </div>
          {/* <ul className="flex space-x-1">
            <li className="flex items-center -space-x-.5">
              <ArrowDownRightIcon className="text-green-500 w-5" />
              <p className="text-xs text-slate-400 font-medium">$2000</p>
            </li>
            <li className="flex items-center -space-x-.5">
              <ArrowUpRightIcon className="text-red-500 w-5" />
              <p className="text-xs text-slate-400 font-medium">$700</p>
            </li>
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default Heading;

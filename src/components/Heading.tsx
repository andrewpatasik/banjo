import {
  ArrowDownCircleMiniIcon,
  ArrowDownRightIcon,
  CalendarMicroIcon,
  CreditCardIcon,
} from "../assets";

const Heading = () => {
  return (
    <>
      <div className="px-4 flex flex-col space-y-1">
        <div className="flex space-x-2 items-center ">
          <h1 className="text-3xl text-tw-ntrl-black">
            Hi, <span className=" font-bold">Hansen</span>
          </h1>
          <img
            src="/images/waving-hand.webp"
            srcSet="/images/waving-hand.webp"
            width={32}
            height={32}
            alt="waving hand icon"
          />
        </div>

        <div className="flex flex-col -space-y-.5 px-4 py-2 bg-indigo-50 border-2 border-indigo-100 rounded-xl text-tw-ntrl-black">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <CreditCardIcon className="w-4 h-4" />
              <p className="text-sm">Remaining budget</p>
            </div>
            {/* <div className="flex items-center space-x-1 text-indigo-700">
            <CalendarMicroIcon className="font-bold w-6 h-6" />
            <p className="tracking-tight">25th Oct </p>
          </div> */}
          </div>
          <h2 className="text-4xl font-bold">
            $1,900
            <span className="ml-1 tracking-normal text-xl font-bold text-gray-400">
              USD
            </span>
          </h2>
          <div className="flex items-center space-x-1.5">
            <p>Total spent this month</p>
            <div className="flex items-center space-x-1">
              <ArrowDownCircleMiniIcon className="mt-0.5 w-4 h-4 text-green-400" />
              <p className="text-green-500 tracking-tighter">11%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;

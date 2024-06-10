import {
  ArrowDownCircleMiniIcon,
  CreditCardIcon,
  UserRoundedIcon,
} from "../assets";

const Heading = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4">
        {/* <div className="flex space-x-2 items-center ">
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
        </div> */}

        {/* <div className="flex flex-col -space-y-.5 px-2 py-3 bg-indigo-50 border-2 border-indigo-100 rounded-xl text-tw-ntrl-black">
          <div className="flex flex-col -space-y-1.5">
            <p className="text-sm">Hello!</p>
            <p className="text-xl font-semibold">Hansen</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <CreditCardIcon className="w-4 h-4" />
              <p className="text-sm">Remaining budget</p>
            </div>
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
        </div> */}

        <p className="tracking-tight text-gray-400 text-lg">
          Current Budget
        </p>
        <div className="flex mt-2 mb-4 -space-x-.5">
          <h2 className="text-6xl font-semibold text-tw-ntrl-black">$1,900</h2>
          <span className="ml-1 tracking-normal text-xl font-bold text-gray-400">
            USD
          </span>
        </div>
        
        <div className="flex items-center space-x-1.5 mt-1 px-3.5 py-1 bg-green-100 border-2 border-green-200 rounded-full">
          <p>Total spent this month</p>
          <div className="flex items-center space-x-1">
            <ArrowDownCircleMiniIcon className="mt-0.5 w-4 h-4 text-green-400" />
            <p className="text-green-500 tracking-tighter">11%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;

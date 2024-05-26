
const Heading = () => {
  return (
    <>
      <div className="px-4 flex flex-col space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex space-x-1 items-center">
            <img
              src="/images/waving-hand.webp"
              srcSet="/images/waving-hand.webp"
              width={20}
              height={20}
              alt="waving hand icon"
            />
            <p className="text-sm text-gray-400 tracking-wider">Hi, Hansen</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col -space-y-1">
            <p className="text-xs font-light text-gray-400 tracking-wider">
              Your remaining budget
            </p>
            <h1 className="text-tw-ntrl-black text-3xl font-extrabold tracking-normal antialiased">
              $1900.<span className="text-2xl">00</span>
            </h1>
          </div>
          <div>
            <ul className="list-outside list-disc -space-y-1.5">
              <li className="text-red-500">
                <p className="text-xs font-light text-gray-400 tracking-wider">
                  total spent: <span className="font-bold">$340</span>
                </p>
              </li>
              <li className="text-yellow-500">
                <p className="text-xs font-light text-gray-400 tracking-wider">
                  average spent: <span className="font-bold">$31</span>
                </p>
              </li>
              <li className="text-green-500">
                <p className="text-xs font-light text-gray-400 tracking-wider">
                  most spent: <span className="font-bold">Dine Out</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;

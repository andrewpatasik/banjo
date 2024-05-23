const Heading = () => {
  return (
    <>
      <div className="px-4 flex flex-col space-y-1.5">
        <p className="text-sm text-gray-400 tracking-wider">Hi, Hansen</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col -space-y-1">
            <p className="text-xs font-light text-gray-400 tracking-wider">
              Your remaining budget
            </p>
            <h1 className="text-3xl text-gray-700 font-extrabold tracking-normal">
              $1900.<span className="text-2xl">00</span>
            </h1>
          </div>

          <div>
            <ul className="list-outside list-disc -space-y-1.5">
              <li className="text-red-500">
                <p className="text-xs font-light text-gray-400 tracking-wider">
                  total spending <span className="font-bold">$340</span>
                </p>
              </li>
              <li className="text-orange-500">
                <p className="text-xs font-light text-gray-400 tracking-wider">
                  average spending <span className="font-bold">$31</span>
                </p>
              </li>
              <li className="text-green-500">
                <p className="text-xs font-light text-gray-400 tracking-wider">
                  most spending <span className="font-bold">Dine Out</span>
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

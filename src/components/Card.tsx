const Card = () => {
  return (
    <div className="flex items-center w-full px-4 py-2">
      <div className="flex items-center space-x-2">
        <div className="rounded-full p-4 bg-purple-600">
          <img
            src="/images/hot-beverage.webp"
            srcSet="/images/hot-beverage.webp"
            alt="emoji icon"
            width={32}
            height={32}
          />
        </div>

        <div className="flex flex-col -space-y-1 antialiased">
          <div className="flex space-x-1 items-center text-sm text-slate-400">
            <p>Coffee</p>
            <p className="tracking-wide">12/05/2024</p>
            <p>02.00 pm</p>
          </div>
          <h2 className="font-medium antialiased text-tw-ntrl-black">
            going out with Grace
          </h2>
        </div>
      </div>
      <div className="ml-auto basis-12 flex flex-col space-y-1">
        <p className="mx-auto text-xl font-medium tracking-tight text-tw-ntrl-black">
          $12
        </p>
        <div className="relative bg-gray-200 w-full h-1.5 rounded-full">
          <div className="absolute inset-0 w-2/3 h-auto bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;

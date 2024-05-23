const Card = () => {
  return (
    <div className="flex w-full px-4 py-6">
      <div className="flex items-center space-x-2">
        <div className="rounded-full p-4 bg-purple-600">
          <img
            src="/images/hot-beverage.webp"
            srcSet="/images/hot-beverage.webp"
            alt="emoji icon"
            width={40}
            height={40}
          />
        </div>

        <div>
          <h2>Cafe</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;

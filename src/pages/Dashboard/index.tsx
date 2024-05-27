// autocomplete atau template untuk title

import { CalendarMicroIcon, DoubleChevronIcon } from "../../assets";
import { Card, Fab, Heading } from "../../components";
import Button from "../../components/Button";
import { CardValue } from "../../components/Card";

const dummyBudget: CardValue[] = [
  {
    amount: "12",
    dateTime: new Date(),
    image: "hot-beverage.webp",
    tag: "Coffee",
    title: "Going out with Grace",
    iconColor: "purple",
  },
  {
    amount: "18",
    dateTime: new Date(),
    image: "hamburger.webp",
    tag: "Dine Out",
    title: "McDonalds",
    iconColor: "orange",
  },
  {
    amount: "20",
    dateTime: new Date(),
    image: "fuel-pump.webp",
    tag: "Gas",
    title: "Pertamax 2L",
    iconColor: "green",
  },
];

const Dashboard = () => {
  return (
    <div className="relative flex flex-col flex-1 w-full">
      <Heading />
      <div className="px-4 mt-6 flex items-center justify-between">
        <h1 className="text-lg text-tw-ntrl-black font-bold antialiased">
          Recent Activity
        </h1>
        <div className="flex items-center space-x-1 text-indigo-700 bg-indigo-50 border border-indigo-400 rounded-full px-2.5 py-1">
          <CalendarMicroIcon className="w-5" />
          <p className="text-sm">5 days left in October</p>
        </div>
      </div>

      <section className="flex flex-col space-y-1 mt-2">
        {dummyBudget.map((item, index) => (
          <Card
            key={index}
            amount={item.amount}
            dateTime={item.dateTime}
            image={item.image}
            tag={item.tag}
            title={item.title}
            iconColor={item.iconColor}
          />
        ))}
      </section>
      <Button
        variants="default"
        className="mx-auto mt-6 text-slate-300 flex items-center font-medium"
      >
        <p>See all</p>
      </Button>

      <div className="px-4 mt-6 flex items-center justify-between">
        <h1 className="text-lg text-tw-ntrl-black font-bold antialiased">
          Categories 
        </h1>
      </div>

      <Fab />
    </div>
  );
};

export default Dashboard;

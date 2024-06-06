// autocomplete atau template untuk title

import { ArrowLongRightIcon } from "../../assets";
import { Card, Fab, Heading } from "../../components";
import Button from "../../components/Button";
import { dummyBudget, dummyCategories } from "../../data";

const Dashboard = () => {
  return (
    <div className="relative flex flex-col flex-1 w-full mb-24">
      <Heading />
      <div className="px-4 mt-6 flex items-center justify-between">
        <h1 className="text-lg text-tw-ntrl-black font-bold antialiased">
          Recent Activities
        </h1>

        <div className="ml-auto flex basis-1/3 items-center space-x-3 text-gray-400 text-sm">
          <p>Amount</p>
          <p>Budget</p>
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
        className="mx-auto mt-2 mb-4 px-4 text-slate-300 flex justify-center items-center font-medium space-x-1"
      >
        <p>See Complete List</p>
        <ArrowLongRightIcon className="w-6 h-6" />
      </Button>

      <div className="px-4 mt-3 flex items-center justify-between">
        <h1 className="text-lg text-tw-ntrl-black font-bold antialiased">
          Most Spendings 
        </h1>
      </div>

      <section className="flex flex-col space-y-1 mt-2">
        {dummyCategories.map((item, index) => (
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

      <Fab />
    </div>
  );
};

export default Dashboard;

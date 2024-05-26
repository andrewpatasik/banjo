import { CalendarMicroIcon } from "../../assets";
import { Card, Fab, Heading } from "../../components";

const Dashboard = () => {
  return (
    <div className="relative flex flex-col flex-1 w-full">
      <Heading />
      <div className="px-4 mt-8 flex items-center justify-between">
        <h1 className="text-lg text-tw-ntrl-black font-bold antialiased">Recently Spending</h1>
        <div className="flex items-center space-x-1 text-indigo-700 bg-indigo-50 border border-indigo-400 rounded-full px-2.5 py-1">
          <CalendarMicroIcon className="w-5" />
          <p className="text-sm">5 days left in October</p>
        </div>
      </div>

      <section className="flex flex-col space-y-1 mt-4">
        <Card />
        <Card />
        <Card />
      </section>
      <Fab />
    </div>
  );
};

export default Dashboard;

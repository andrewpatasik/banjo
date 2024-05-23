import { CalendarMicroIcon } from "../../assets";
import { Card, Fab, Heading } from "../../components";

const Dashboard = () => {
  return (
    <div className="relative flex flex-col flex-1 w-full">
      <Heading />
      <div className="px-4 mt-8 flex items-center justify-between">
        <h1 className="text-xl text-gray-700 font-bold">Monthly Spending</h1>
        <div className="flex items-center space-x-1 text-indigo-700 bg-indigo-50 border border-indigo-400 rounded-full px-2.5 py-1">
          <CalendarMicroIcon className="w-5" />
          <p className="text-sm">5 days left in October</p>
        </div>
      </div>

      <div>
        <Card />
      </div>
      <Fab />
    </div>
  );
};

export default Dashboard;

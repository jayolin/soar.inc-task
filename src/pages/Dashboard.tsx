import MyCards from "../components/dashboard/MyCards";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import WeeklyActivity from "../components/dashboard/WeeklyActivity";
import ExpenseStatistics from "../components/dashboard/ExpenseStatistics";
import QuickTransfer from "../components/dashboard/QuickTransfer";
import BalanceHistory from "../components/dashboard/BalanceHistory";

const Dashboard = () => {
  return (
    <div className="flex-1">
      <MyCards />
      <RecentTransactions />
      <WeeklyActivity />
      <ExpenseStatistics />
      <QuickTransfer />
      <BalanceHistory />
    </div>
  );
};

export default Dashboard;

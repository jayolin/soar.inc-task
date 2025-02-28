import MyCards from "../components/dashboard/MyCards";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import WeeklyActivity from "../components/dashboard/WeeklyActivity";
import ExpenseStatistics from "../components/dashboard/ExpenseStatistics";
import QuickTransfer from "../components/dashboard/QuickTransfer";
import BalanceHistory from "../components/dashboard/BalanceHistory";
import { useEffect, useState } from "react";
import { Beneficiary, ChartData, Transaction } from "../types/common";
import { fetchBalanceHistory, fetchBeneficiaries, fetchExpenseStatistics, fetchRecentTransactions, fetchWeeklyActivity } from "../api/mock";

const DEFAULT_CHART_DATA: ChartData = {
  label: [],
  data: []
};

const Dashboard = () => {
  const [recentTransactions, setRecentTransactions] = useState<
    Array<Transaction>
  >([]);
  const [beneficiaries, setBeneficiaries] = useState<Array<Beneficiary>>([]);
  const [balanceHistory, setBalanceHistory] = useState<ChartData>(DEFAULT_CHART_DATA);
  const [expenseStatistics, setExpenseStatistics] = useState<ChartData>(DEFAULT_CHART_DATA);
  const [weeklyActivity, setWeeklyActivity] = useState<ChartData>(DEFAULT_CHART_DATA);

  useEffect(() => {
    const recentTransactions = fetchRecentTransactions();
    const beneficiaries = fetchBeneficiaries();
    const balanceHistory = fetchBalanceHistory();
    const expenseStatistics = fetchExpenseStatistics();
    const weeklyActivity = fetchWeeklyActivity();

    setRecentTransactions(recentTransactions);
    setBeneficiaries(beneficiaries);
    setBalanceHistory(balanceHistory);
    setExpenseStatistics(expenseStatistics);
    setWeeklyActivity(weeklyActivity);
  }, []);

  return (
    <div className="flex-1 space-y-4">
      <div className="flex flex-col lg:flex-row p-6 gap-6">
        <MyCards className="lg:flex-1" />
        <RecentTransactions
          transactions={recentTransactions}
          className="min-w-[350px]"
        />
      </div>
      <div className="flex flex-col lg:flex-row p-6 gap-6">
        <WeeklyActivity weeklyActivity={weeklyActivity} className="lg:flex-1" />
        <ExpenseStatistics stats={expenseStatistics} className="min-w-[350px]" />
      </div>
      <div className="flex flex-col lg:flex-row p-6 gap-6">
        <QuickTransfer beneficiaries={beneficiaries} className="flex-1" />
        <BalanceHistory history={balanceHistory} className="min-w-[50%]" />
      </div>
    </div>
  );
};

export default Dashboard;

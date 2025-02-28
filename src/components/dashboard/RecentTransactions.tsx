import { Transaction } from "../../types/common";
import Avatar from "../Avatar/Avatar";
import SectionTitle from "./SectionTitle";

interface Props {
  className?: string;
  transactions: Array<Transaction>;
}

const RecentTransactions = ({ className = "", transactions }: Props) => {
  return (
    <div className={`${className} flex flex-col`}>
      <SectionTitle title="Recent Transactions" />
      <ul className="bg-white rounded-[25px] px-6 py-5 space-y-3 flex-1 overflow-y-auto">
        {transactions.map((transaction, i) => (
          <li key={`transaction-${i}`} className="flex space-x-5 items-center">
            <Avatar size="lg" />
            <div className="flex-1">
              <div>{transaction.narration}</div>
              <small className="text-[#718EBF]">{transaction.date}</small>
            </div>
            <div
              className={
                transaction.type === "debit" ? "text-red-500" : "text-green-500"
              }
            >
              {transaction.type === "debit" ? "-" : "+"}
              {transaction.amount}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;

import { useCallback } from "react";
import { Transaction, TransactionMedium } from "../../types/common";
import Avatar from "../Avatar/Avatar";
import SectionTitle from "./SectionTitle";
import { CardIcon, MoneyIcon, PaypalIcon } from "../Icons";

interface Props {
  className?: string;
  transactions: Array<Transaction>;
}

const RecentTransactions = ({ className = "", transactions }: Props) => {
  const getAvatarPrefs = useCallback((medium: TransactionMedium) => {
    switch(medium) {
      case "card":
        return {
          icon: <CardIcon />,
          color: "#FFF5D9"
        }

      case "paypal":
        return {
          icon: <PaypalIcon />,
          color: "#E7EDFF"
        }

      default:
        return {
          icon: <MoneyIcon />,
          color: "#DCFAF8"
        }
    }
  }, []);
  return (
    <div className={`${className} flex flex-col`}>
      <SectionTitle title="Recent Transactions" />
      <ul className="bg-white rounded-[25px] px-6 py-5 space-y-3 flex-1 overflow-y-auto">
        {transactions.map((transaction, i) => {
          const { color, icon } = getAvatarPrefs(transaction.medium);

          return (
            <li key={`transaction-${i}`} className="flex space-x-5 items-center">
              <Avatar color={color} size="lg" innerChild={icon} />

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
          )
        })}
      </ul>
    </div>
  );
};

export default RecentTransactions;

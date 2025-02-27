import { JSX } from "react";
import { NavLink } from "react-router-dom";
import { AccountsIcon, CreditCardsIcon, DashboardIcon, InvestmentsIcon, LoansIcon, MyPrivilegesIcon, ServicesIcon, TransactionsIcon } from "../Icons";
import Settings from "../../pages/Settings";

interface LinkItem {
  icon: JSX.Element;
  name: string;
  path: string;
  title: string;
}

const NAVIGATION_LINKS: Array<LinkItem> = [
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
    path: "/",
    title: "Overview",
  },
  {
    icon: <TransactionsIcon />,
    name: "Transactions",
    path: "/transactions",
    title: "Transactions",
  },
  {
    icon: <AccountsIcon />,
    name: "Accounts",
    path: "/accounts",
    title: "Accounts",
  },
  {
    icon: <InvestmentsIcon />,
    name: "Investments",
    path: "/investments",
    title: "Investments",
  },
  {
    icon: <CreditCardsIcon />,
    name: "Credit Cards",
    path: "/credit-cards",
    title: "Credit Cards",
  },
  {
    icon: <LoansIcon />,
    name: "Loans",
    path: "/loans",
    title: "Loans",
  },
  {
    icon: <ServicesIcon />,
    name: "Services",
    path: "/services",
    title: "Services",
  },
  {
    icon: <MyPrivilegesIcon />,
    name: "My Privileges",
    path: "/my-privileges",
    title: "My Privileges",
  },
  {
    icon: <Settings />,
    name: "Settings",
    path: "/settings",
    title: "Settings",
  },
];

const Sidebar = () => {
  return (
    <div className="w-1/3 bg-gray-100 p-4">
      <h1 className="text-lg font-bold">Soar Task</h1>
      <nav className="mt-4">
        {NAVIGATION_LINKS.map((item, i) => (
          <NavLink
            key={`nav-item-${i}`}
            to={item.path}
            className={({ isActive }) =>
              (isActive ? "text-black" : "text-gray-600") +
              " flex items-center p-2"
            }
          >
            {item.icon}
            <span className="ml-2">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

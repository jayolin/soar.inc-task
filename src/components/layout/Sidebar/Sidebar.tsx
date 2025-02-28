import { JSX, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AccountsIcon,
  CreditCardsIcon,
  DashboardIcon,
  InvestmentsIcon,
  LoansIcon,
  MyPrivilegesIcon,
  ServicesIcon,
  SettingsIcon,
  TransactionsIcon,
} from "../../Icons";
import classes from "./Sidebar.module.scss";
import Logo from "../../../assets/logo.svg";

interface Props {
  show?: boolean;
  onRequestClose?: () => void;
}

interface LinkItem {
  icon: JSX.Element;
  name: string;
  path: string;
  title: string;
}

const NAVIGATION_LINKS: Array<LinkItem> = [
  {
    icon: <DashboardIcon size="xs" />,
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
    icon: <SettingsIcon />,
    name: "Settings",
    path: "/settings",
    title: "Settings",
  },
];

const Sidebar = ({ show = false, onRequestClose }: Props) => {
  return (
    <>
      {show && (
        <div
          className={classes.overlay}
          onClick={() => onRequestClose?.()}
        ></div>
      )}

      <div className={`${classes.root} ${!show ? classes.hide : ""}`}>
        <div className={classes.header}>
          <img src={Logo} alt="Logo" />
          <h2 className="text-lg font-bold">Soar Task</h2>
        </div>

        <nav className="space-y-4">
          {NAVIGATION_LINKS.map((item, i) => (
            <NavLink
              key={`nav-item-${i}`}
              to={item.path}
              className={({ isActive }) => `${isActive ? classes.active : ""} ${classes.menuItem}`}
            >
              {item.icon}
              <span className="">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

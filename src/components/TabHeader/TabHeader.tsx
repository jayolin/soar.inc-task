import classes from "./TabHeader.module.scss";

interface Props {
  tabs: Array<{
    id: string;
    name: string;
  }>;
  activeTab: string;
  className?: string;
  onRequestChangeTab?: (tabId: string) => void;
}

const TabHeader = ({
  tabs,
  activeTab,
  className = "",
  onRequestChangeTab,
}: Props) => {
  return (
    <ul className={`${classes.root} ${className}`}>
      {tabs.map((tab, i) => (
        <li
          key={`tab-${i}`}
          className={`${classes.tab} ${
            tab.id === activeTab ? classes.active : ""
          }`}
        >
          <button
            aria-label={`Click to choose ${tab.name} tab`}
            onClick={() => onRequestChangeTab?.(tab.id)}
          >
            {tab.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TabHeader;

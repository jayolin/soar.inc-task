import { Link } from "react-router-dom";
import Card from "../Card/Card";
import SectionTitle from "./SectionTitle";
import { useApp } from "../../context/AppContext";

interface Props {
  className?: string;
}

const MyCards = ({ className = "" }: Props) => {
  const { userData } = useApp();

  if (!userData) {
    return <></>;
  }

  return (
    <div className={`${className}`}>
      <SectionTitle title="My Cards">
        <Link
          aria-label="See All Cards"
          className="hover:underline active:text-blue-500"
          to={"/"}
        >
          See All
        </Link>
      </SectionTitle>
      <div className="overflow-x-auto">
        <div className="w-max gap-4 max-h-[210px] columns-[300px] lg:max-h-[235px] lg:columns-[350px]">
          {userData.cards.map((card, i) => (
            <Card {...card} key={`card-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCards;

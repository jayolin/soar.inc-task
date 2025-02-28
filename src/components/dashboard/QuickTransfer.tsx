import { Beneficiary } from "../../types/common";
import Avatar from "../Avatar/Avatar";
import IconButton from "../IconButton/IconButton";
import { ChevronRight } from "../Icons";
import SectionTitle from "./SectionTitle";

interface Props {
  className?: string;
  beneficiaries: Array<Beneficiary>;
}

const QuickTransfer = ({ className, beneficiaries }: Props) => {
  return (
    <div className={`${className} flex flex-col`}>
      <SectionTitle title="Quick Transfer" />
      <div className="bg-white rounded-[25px] w-full flex-1 p-8">
        <ul className="flex justify-between items-center">
          {beneficiaries.map((beneficiary, i) => (
            <li
              key={`beneficiary-${i}`}
              className="space-y-4 flex flex-col items-center"
            >
              <Avatar size="xl" />
              <div className="text-center">
                <p>{beneficiary.name}</p>
                <small className="text-[#718EBF]">
                  {beneficiary.designation}
                </small>
              </div>
            </li>
          ))}
          <IconButton elevated>
            <ChevronRight fill="#718EBF" size="lg" />
          </IconButton>
        </ul>
      </div>
    </div>
  );
};

export default QuickTransfer;

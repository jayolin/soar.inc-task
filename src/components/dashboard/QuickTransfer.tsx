import { Beneficiary } from "../../types/common";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import { ChevronRight, SendIcon } from "../Icons";
import Input from "../Input/Input";
import SectionTitle from "./SectionTitle";

interface Props {
  className?: string;
  beneficiaries: Array<Beneficiary>;
}

const QuickTransfer = ({ className, beneficiaries }: Props) => {
  return (
    <div className={`${className} flex flex-col`}>
      <SectionTitle title="Quick Transfer" />
      <div className="bg-white rounded-[25px] w-full flex-1 p-8 space-y-6">
        <ul className="flex justify-between items-center">
          {beneficiaries.map((beneficiary, i) => (
            <li
              key={`beneficiary-${i}`}
              className="space-y-4 flex flex-col items-center"
            >
              <Avatar src={beneficiary.photo} size="xl" />
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

        <div className="flex items-center space-x-4">
          <small className="text-[#718EBF]">Write Amount</small>
          <div className="flex items-center flex-1">
            <Input className="flex-1" rounded variant="gray"  placeholder="Amount" />
            <Button className="-ml-24 !rounded-[50px] !px-6" text="Send">
              <SendIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;

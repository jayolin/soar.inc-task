import { MastercardIconDark, MastercardIconLight } from "../Icons";
import classes from "./Card.module.scss";
import ChipCardDark from "../../assets/ChipCardDark.svg";
import ChipCardLight from "../../assets/ChipCardLight.svg";
import { CardDetails } from "../../types/common";

interface Props extends CardDetails {}

const Card = (props: Props) => {
  const { type = "dark", cardHolder, cardNumber, balance, validity } = props;

  return (
    <div className={`${classes.root} ${classes[type]}`}>
      <div className={classes.content}>
        <div className="flex justify-between">
          <div>
            <small className={classes.cardLabel}>Balance</small>
            <h1 className="text-xl">{balance}</h1>
          </div>
          <img src={type === "dark" ? ChipCardDark : ChipCardLight} />
        </div>

        <div className="flex items-center">
          <div className="flex-1">
            <small className={classes.cardLabel}>CARD HOLDER</small>
            <p>{cardHolder}</p>
          </div>
          <div className="flex-1">
            <small className={classes.cardLabel}>VALID THRU</small>
            <p>{validity}</p>
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <span>{cardNumber}</span>
        {type === "dark" ? <MastercardIconDark /> : <MastercardIconLight />}
      </div>
    </div>
  );
};

export default Card;

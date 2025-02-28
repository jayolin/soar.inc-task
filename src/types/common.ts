export interface CardDetails {
  type: "dark" | "light",
  provider: "mastercard",
  balance: string,
  cardHolder: string;
  cardNumber: string;
  validity: string;
}

export interface User {
  name: string;
  username: string;
  photo: string;
  email: string;
  dob: Date;
  address: {
    presentAddress: string;
    permanentAddress: string;
    city: string;
    postalCode: string;
    country: string;
  };
  cards: Array<CardDetails>
}

export interface Transaction {
  type: "debit" | "credit";
  date: string;
  narration: string;
  amount: string;
}

export interface Beneficiary {
  name: string;
  photo: string;
  designation: string;
}

export interface ChartData<T = any> {
  label: Array<string>;
  data: Array<T>;
}
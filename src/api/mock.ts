import { Beneficiary, ChartData, Transaction, User } from "../types/common"

const fetchCurrentUser = (): User => {
  return {
    photo: "https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RtNdH~v6pnK3yUoJwY6i-7IyfOI7MAwUh~6H10Hr2oBWHbxwz-AcA7Hj8NIYvfAcxv7-OaAKV9JCNIgp~MsY7Q9mF7hLQM1cnuJg-m~iafkLLEK73MxoISrCqNdW6WmRpK6xEHbO8gn22JV~uhJlQCv38qPP0Adj-1rAkxMA8KddbIgH1d2QeWb-ZyJ0MZbiqEWDY5bgAaZhNnfqibnAk2j1psvIXf2mdvKx4xgs6MmWVaeUSEjXKZ39p3eMPMPzB4FbJ9AIGvsOHG2AaZqwpdkwM4MrwtnhMAoK48paHq7mki-0mg7FYlZ2k2BQUKma-vZdzxWGa3x7klv1Q~y~Bw__",
    name: "Charlene Reed",
    username: "charlenereed",
    email: "charlenereed@gmail.com",
    dob: new Date(),
    address: {
      presentAddress: "San Jose, California, USA",
      permanentAddress: "San Jose, California, USA",
      city: "San Jose",
      postalCode: "45674",
      country: "USA",
    },
    cards: [
      {
        type: "dark",
        provider: "mastercard",
        balance: "$5,756",
        cardHolder: "Charlene Reed",
        cardNumber: "3778 **** **** 1234",
        validity: "12/22"
      },
      {
        type: "light",
        provider: "mastercard",
        balance: "$234",
        cardHolder: "Charlene Reed S.",
        cardNumber: "5678 **** **** 0009",
        validity: "09/25"
      }
    ]
  }
}

const fetchRecentTransactions = (): Array<Transaction> => {
  return [
    {
      type: "debit",
      date: "21 January 2021",
      narration: "Deposit from my Card",
      amount: "$850",
    },
    {
      type: "credit",
      date: "25 January 2021",
      narration: "Deposit PayPal",
      amount: "$2,500",
    },
    {
      type: "credit",
      date: "20 January 2021",
      narration: "Jemi Wilson",
      amount: "$5,400",
    },
  ]
}

const fetchBeneficiaries = (): Array<Beneficiary> => {
  return [
    {
      name: "Livia Bator",
      designation: "CEO",
      photo: "https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RtNdH~v6pnK3yUoJwY6i-7IyfOI7MAwUh~6H10Hr2oBWHbxwz-AcA7Hj8NIYvfAcxv7-OaAKV9JCNIgp~MsY7Q9mF7hLQM1cnuJg-m~iafkLLEK73MxoISrCqNdW6WmRpK6xEHbO8gn22JV~uhJlQCv38qPP0Adj-1rAkxMA8KddbIgH1d2QeWb-ZyJ0MZbiqEWDY5bgAaZhNnfqibnAk2j1psvIXf2mdvKx4xgs6MmWVaeUSEjXKZ39p3eMPMPzB4FbJ9AIGvsOHG2AaZqwpdkwM4MrwtnhMAoK48paHq7mki-0mg7FYlZ2k2BQUKma-vZdzxWGa3x7klv1Q~y~Bw__",
    },
    {
      name: "Randy Press",
      designation: "Director",
      photo: "https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RtNdH~v6pnK3yUoJwY6i-7IyfOI7MAwUh~6H10Hr2oBWHbxwz-AcA7Hj8NIYvfAcxv7-OaAKV9JCNIgp~MsY7Q9mF7hLQM1cnuJg-m~iafkLLEK73MxoISrCqNdW6WmRpK6xEHbO8gn22JV~uhJlQCv38qPP0Adj-1rAkxMA8KddbIgH1d2QeWb-ZyJ0MZbiqEWDY5bgAaZhNnfqibnAk2j1psvIXf2mdvKx4xgs6MmWVaeUSEjXKZ39p3eMPMPzB4FbJ9AIGvsOHG2AaZqwpdkwM4MrwtnhMAoK48paHq7mki-0mg7FYlZ2k2BQUKma-vZdzxWGa3x7klv1Q~y~Bw__",
    },
    {
      name: "Workman",
      designation: "Designer",
      photo: "https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RtNdH~v6pnK3yUoJwY6i-7IyfOI7MAwUh~6H10Hr2oBWHbxwz-AcA7Hj8NIYvfAcxv7-OaAKV9JCNIgp~MsY7Q9mF7hLQM1cnuJg-m~iafkLLEK73MxoISrCqNdW6WmRpK6xEHbO8gn22JV~uhJlQCv38qPP0Adj-1rAkxMA8KddbIgH1d2QeWb-ZyJ0MZbiqEWDY5bgAaZhNnfqibnAk2j1psvIXf2mdvKx4xgs6MmWVaeUSEjXKZ39p3eMPMPzB4FbJ9AIGvsOHG2AaZqwpdkwM4MrwtnhMAoK48paHq7mki-0mg7FYlZ2k2BQUKma-vZdzxWGa3x7klv1Q~y~Bw__",
    }
  ]
}

const fetchExpenseStatistics = (): ChartData => {
  return {
    label: ['Investment', 'Entertainment', 'Bill Expense', 'Others'],
    data: [40, 25, 10, 25],
  }
}

const fetchWeeklyActivity = (): ChartData => {
  return {
    label: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    data: [[470, 360, 330, 470, 160, 395, 400], [240, 120, 280, 380, 250, 250, 320]],
  }
}

const fetchBalanceHistory = (): ChartData => {
  return {
    label: ["July", "Aug", "Sept", "Oct", "Nov", "Dec", "Jan", "Feb"],
    data: [120, 250, 450, 795, 210, 590, 250, 600],
  }
}

export {
  fetchCurrentUser,
  fetchRecentTransactions,
  fetchBeneficiaries,
  fetchExpenseStatistics,
  fetchWeeklyActivity,
  fetchBalanceHistory
}
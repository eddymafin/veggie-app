import { Box } from "@mui/material";
import { useState } from "react";
import MonthlySummary from "../components/MonthlySummary";
import Calender from "../components/Calender";
import TransactionMenu from "../components/TransactionForm";
import TransactionForm from "../components/TransactionMenu";
import { Contents } from "../types";
import { format } from "date-fns";

interface HomeProps {
  monthlyContents: Contents[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
}

function Home({ monthlyContents, setCurrentMonth }: HomeProps) {
  const today = format(new Date(), "yyyy-MM-dd");
  const [currentDay, setCurrentDay] = useState(today);
  console.log(currentDay);

  const dailyContents = monthlyContents.filter((content) => {
    return content.date === currentDay;
  });
  console.log(dailyContents);
  return (
    <>
      <Box>
        <MonthlySummary monthlyContents={monthlyContents} />
        <Calender
          monthlyContents={monthlyContents}
          setCurrentMonth={setCurrentMonth}
          setCurrentDay={setCurrentDay}
        />
      </Box>
      <Box>
        <TransactionMenu />
        <TransactionForm />
      </Box>
    </>
  );
}

export default Home;

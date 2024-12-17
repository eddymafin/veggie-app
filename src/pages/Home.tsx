import { Box } from "@mui/material";
import { useState } from "react";
import MonthlySummary from "../components/MonthlySummary";
import Calender from "../components/Calender";
import TransactionForm from "../components/TransactionForm";
import TransactionMenu from "../components/TransactionMenu";
import { Contents } from "../types";
import { format } from "date-fns";

interface HomeProps {
  monthlyContents: Contents[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
}

function Home({ monthlyContents, setCurrentMonth }: HomeProps) {
  const today = format(new Date(), "yyyy-MM-dd");

  // 日付の管理
  const [currentDay, setCurrentDay] = useState(today);
  // console.log(currentDay);

  // 1日分のデータを取得
  const dailyContents = monthlyContents.filter((content) => {
    return content.date === currentDay;
  });
  // console.log(dailyContents);
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
        <TransactionMenu
          dailyContents={dailyContents}
          currentDay={currentDay}
        />
        <TransactionForm />
      </Box>
    </>
  );
}

export default Home;

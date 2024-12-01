import { Box } from "@mui/material";
import MonthlySummary from "../components/MonthlySummary";
import Calender from "../components/Calender";
import TransactionMenu from "../components/TransactionForm";
import TransactionForm from "../components/TransactionMenu";
import { Contents } from "../types";

interface HomeProps {
  monthlyContents: Contents[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
}

function Home({ monthlyContents, setCurrentMonth }: HomeProps) {
  return (
    <>
      <Box>
        <MonthlySummary monthlyContents={monthlyContents} />
        <Calender
          monthlyContents={monthlyContents}
          setCurrentMonth={setCurrentMonth}
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

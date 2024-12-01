import { Box } from "@mui/material";
import MonthlySummary from "../components/MonthlySummary";
import Calender from "../components/Calender";
import TransactionMenu from "../components/TransactionForm";
import TransactionForm from "../components/TransactionMenu";
import { Contents } from "../types";

interface HomeProps {
  monthlyContents: Contents[];
}

function Home({ monthlyContents }: HomeProps) {
  return (
    <>
      <Box>
        <MonthlySummary monthlyContents={monthlyContents} />
        <Calender monthlyContents={monthlyContents} />
      </Box>
      <Box>
        <TransactionMenu />
        <TransactionForm />
      </Box>
    </>
  );
}

export default Home;

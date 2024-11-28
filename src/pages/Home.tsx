import { Box, Typography } from "@mui/material";
import React from "react";
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
        <Calender />
      </Box>
      <Box>
        <TransactionMenu />
        <TransactionForm />
      </Box>
    </>
  );
}

export default Home;

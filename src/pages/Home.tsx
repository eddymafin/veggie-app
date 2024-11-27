import { Box, Typography } from "@mui/material";
import React from "react";
import MonthlySummary from "../components/MonthlySummary";
import Calender from "../components/Calender";
import TransactionMenu from "../components/TransactionForm";
import TransactionForm from "../components/TransactionMenu";

function Home() {
  return (
    <>
      <Box>
        <MonthlySummary />
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

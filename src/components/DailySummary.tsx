import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Contents } from "../types";
import { plantCalculations } from "../utils/plantCalculations";

interface DailySummaryProps {
  dailyContents: Contents[];
}

const DailySummary = ({ dailyContents }: DailySummaryProps) => {
  const { veggieCount, fruitCount, total } = plantCalculations(dailyContents);
  return (
    <Box>
      <Grid container spacing={2}>
        {/* 収入 */}
        <Grid item xs={6} display={"flex"}>
          <Card
            sx={{ bgcolor: (theme) => theme.palette.grey[100], flexGrow: 1 }}
          >
            <CardContent>
              <Typography variant="body2" noWrap textAlign="center">
                野菜
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  wordBreak: "break-all",
                }}
                textAlign="right"
                fontWeight="fontWeightBold"
              >
                {veggieCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* 支出 */}
        <Grid item xs={6} display={"flex"}>
          <Card
            sx={{ bgcolor: (theme) => theme.palette.grey[100], flexGrow: 1 }}
          >
            <CardContent>
              <Typography variant="body2" noWrap textAlign="center">
                果物
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  wordBreak: "break-all",
                }}
                textAlign="right"
                fontWeight="fontWeightBold"
              >
                {fruitCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* 残高 */}
        <Grid item xs={12} display={"flex"}>
          <Card
            sx={{ bgcolor: (theme) => theme.palette.grey[100], flexGrow: 1 }}
          >
            <CardContent>
              <Typography variant="body2" noWrap textAlign="center">
                Total
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.secondary.main,
                  wordBreak: "break-all",
                }}
                textAlign="right"
                fontWeight="fontWeightBold"
              >
                {total}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default DailySummary;

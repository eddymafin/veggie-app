import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Contents } from "../types";

interface monthlySummaryProps {
  monthlyContents: Contents[];
}

function MonthlySummary({ monthlyContents }: monthlySummaryProps) {
  console.log(monthlyContents);
  return (
    <Grid container spacing={{ xs: 2, sm: 3 }}>
      <Grid item xs={6}>
        <Card
          sx={{
            bgcolor: (theme) => theme.palette.secondary.light,
            borderRadius: "10px",
          }}
        >
          <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
            <Stack>
              icon
              <Typography>aaaa</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card
          sx={{
            bgcolor: (theme) => theme.palette.secondary.light,
            borderRadius: "10px",
          }}
        >
          <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
            <Stack>
              icon
              <Typography>aaaa</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default MonthlySummary;

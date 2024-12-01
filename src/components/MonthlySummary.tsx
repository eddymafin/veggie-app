import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { Contents } from "../types";
import { plantCalculations } from "../utils/plantCalculations";

interface monthlySummaryProps {
  monthlyContents: Contents[];
}

function MonthlySummary({ monthlyContents }: monthlySummaryProps) {
  const { veggieCount, fruitCount, total } = plantCalculations(monthlyContents);
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
              野菜
              <Typography>{veggieCount}</Typography>
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
              フルーツ
              <Typography>{fruitCount}</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Typography>合計：{total}</Typography>
    </Grid>
  );
}

export default MonthlySummary;

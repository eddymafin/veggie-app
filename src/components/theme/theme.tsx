import { createTheme } from "@mui/material/styles";
import { lime, deepOrange } from "@mui/material/colors";
const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans JP, san-self",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      light: lime[50],
      main: lime[600],
      dark: lime[900],
      contrastText: "#fff",
    },
    secondary: {
      light: deepOrange[100],
      main: deepOrange[300],
      dark: deepOrange[800],
      contrastText: "#fff",
    },
  },
});

export default theme;
import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Nomatch from "./pages/Nomatch";
import AppLayout from "./components/layout/AppLayout";
import theme from "./components/theme/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Contents } from "./types/index";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { formatMonth } from "./utils/formatting";

function App() {
  //  firestoreのエラー用の型を判定する
  function isFireStoreError(
    error: unknown
  ): error is { code: string; message: string } {
    // errorがobjectかつ、codeが含まれている場合
    return typeof error === "object" && error !== null && "code" in error;
  }

  const [contents, setContents] = useState<Contents[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const flecheTransactions = async () => {
      try {
        // コレクション名を入れる
        const querySnapshot = await getDocs(collection(db, "Contents"));
        // console.log(querySnapshot);
        const contentsData = querySnapshot.docs.map((doc) => {
          // console.log(doc.id, " => ", doc.data());
          // dataのObjectがスプレッド構文だとtypeエラーが発生するため、as Contentsで定義をする()
          return {
            ...doc.data(),
            id: doc.id,
          } as Contents;
        });
        // console.log(contentsData);
        setContents(contentsData);
      } catch (error) {
        if (isFireStoreError(error)) {
          // firebaseのエラー
          console.error("firestore", error);
        } else {
          console.error(error);
        }
      }
    };

    flecheTransactions();
  }, []);

  const monthlyContents = contents.filter((content) => {
    return content.date.startsWith(formatMonth(currentMonth));
  });
  // console.log(monthlyContents);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home monthlyContents={monthlyContents} />} />
            <Route path="/report" element={<Report />} />
            <Route path="*" element={<Nomatch />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

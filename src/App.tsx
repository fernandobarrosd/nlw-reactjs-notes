/* eslint-disable quotes */
import { useContext } from "react";
import { PageStarted } from "./pages/PageStarted";
import { StartingPage } from "./pages/StartingPage";
import { AppContext } from "./context/AppContext";

export function App() {
  const { pageIsStarted } = useContext(AppContext);
  return pageIsStarted ? <PageStarted/> : <StartingPage/>;
}
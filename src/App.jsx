import DefaultPage from "./components/defaultpage/DefaultPage";
import Roadmap from "./components/roadmap/RoadMap";
import Collab from "./components/collab/Collab";
import Club from "./components/club/Club";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [account, setAccount] = useState("");
  const [timeout, setTimeout] = useState(new Date());
  const [isOvertime, setIsOvertime] = useState(false);
  const [page, setPage] = useState(0);

  const updateAccount = (newAccount) => {
    setAccount(newAccount);
  };
  const updateTimeout = (time) => {
    setTimeout(time);
  };
  const updatePage = (newPage) => {
    setPage(newPage);
  };

  const updateIsOvertime = (newIsOvertime) => {
    setIsOvertime(newIsOvertime);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <DefaultPage
            account={account}
            setAccount={updateAccount}
            timeout={timeout}
            setTimeout={updateTimeout}
            page={page}
            setPage={updatePage}
            isOvertime={isOvertime}
            setIsOvertime={updateIsOvertime}
          />
        }
      />
      <Route
        exact
        path="/Roadmap"
        element={
          <Roadmap
            account={account}
            setAccount={updateAccount}
            timeout={timeout}
            setTimeout={updateTimeout}
            page={page}
            setPage={updatePage}
            isOvertime={isOvertime}
            setIsOvertime={updateIsOvertime}
          />
        }
      />
      <Route
        exact
        path="/Collab"
        element={
          <Collab
            account={account}
            setAccount={updateAccount}
            timeout={timeout}
            setTimeout={updateTimeout}
            page={page}
            setPage={updatePage}
            isOvertime={isOvertime}
            setIsOvertime={updateIsOvertime}
          />
        }
      ></Route>
      <Route
        exact
        path="/Club"
        element={
          <Club
            account={account}
            setAccount={updateAccount}
            timeout={timeout}
            setTimeout={updateTimeout}
            page={page}
            setPage={updatePage}
            isOvertime={isOvertime}
            setIsOvertime={updateIsOvertime}
          />
        }
      ></Route>
    </Routes>
  );
}

export default App;
{
  /* <DefaultPage
account={account}
setAccount={updateAccount}
timeout={timeout}
setTimeout={updateTimeout}
page={page}
setPage={updatePage}
isOvertime={isOvertime}
setIsOvertime={updateIsOvertime}
/> */
}

import DefaultPage from "./components/defaultpage/DefaultPage";
import React, { useState, useEffect } from "react";

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
    <>
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
    </>
  );
}

export default App;

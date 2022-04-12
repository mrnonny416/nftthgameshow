import DefaultPage from "./components/defaultpage/DefaultPage";
import React, { useState, useEffect } from "react";

function App() {
  const [account, setAccount] = useState("");
  const [isLoging, setIsLoging] = useState(false);
  const [isWhitelist, setIsWhitelist] = useState(false);
  const [timeout, setTimeout] = useState(new Date());
  const [minted, setMinted] = useState(0);
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

  return (
    <>
      <DefaultPage
        account={account}
        updateAccount={updateAccount}
        timeout={timeout}
        setTimeout={updateTimeout}
        page={page}
        updatePage={updatePage}
      />
    </>
  );
}

export default App;

import DefaultPage from "./components/defaultpage/DefaultPage";
import Roadmap from "./components/roadmap/RoadMap";
import Collab from "./components/collab/Collab";
import Club from "./components/club/Club";
import Contact from "./components/contact/Contact";
import Contributor from "./components/contributor/Contributor";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import WhiteList from "./components/whitelist/WhiteList";
import Minted from "./components/minted/Minted";
import MintPage from "./components/mintpage/MintPage";

function App() {
  const [account, setAccount] = useState("");
  const [timeout, setTimeout] = useState(new Date().getTime());
  const [isOvertime, setIsOvertime] = useState(false);
  const [page, setPage] = useState(0);
  const [minted, setMinted] = useState(1288);
  const [whitelist, setWhitelist] = useState(3);

  console.log(timeout);
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
            minted={minted}
            setMinted={setMinted}
            whitelist={whitelist}
            setWhitelist={setWhitelist}
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
      <Route
        exact
        path="/Contact"
        element={<Contact account={account} setAccount={updateAccount} />}
      />
      <Route
        exact
        path="/Contributor"
        element={<Contributor account={account} setAccount={updateAccount} />}
      />
      <Route
        exact
        path="/WhiteList"
        element={<WhiteList account={account} setAccount={updateAccount} />}
      />
      <Route
        exact
        path="/MintPage"
        element={
          <MintPage
            account={account}
            setAccount={updateAccount}
            minted={minted}
            setMinted={setMinted}
            whitelist={whitelist}
            setWhitelist={setWhitelist}
          />
        }
      />
      <Route
        exact
        path="/Mined"
        element={
          <Minted
            account={account}
            setAccount={updateAccount}
            minted={minted}
          />
        }
      />
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

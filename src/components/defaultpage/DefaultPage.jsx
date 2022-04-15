import "./defaultpage.css";
import SideTitle from "../sidetitle/SideTitle";
import WhiteListBTN from "../whitelistbtn/WhiteListBTN";
import Countdown from "../countdown/Countdown";
import MenuBar from "../menubar/MenuBar";
import { Link } from "react-router-dom";

const DefaultPage = ({
  account,
  setAccount,
  page,
  setPage,
  isOvertime,
  setIsOvertime,
  minted,
  setMinted,
  whitelist,
  setWhitelist,
}) => {
  const mintBTN = ({ account }) => {
    const checkLogin = () => {
      alert("Connect Wallet to continue");
    };
    if (account !== "") {
      return (
        <Link to="/MintPage">
          <button className="btn-mint">MINT</button>
        </Link>
      );
    } else {
      return (
        <button className="btn-mint" onClick={checkLogin}>
          MINT
        </button>
      );
    }
  };

  return (
    <div className="container">
      <div className="container__content">
        <div className="container__menu">
          <button className="logo"></button>
          {account !== "" ? (
            <div>
              <MenuBar page={page} setPage={setPage} />
            </div>
          ) : (
            <div></div>
          )}

          <div className="text-date-description">
            21-23 october 2022
            <br />
            Online register
          </div>
          <div>
            {isOvertime ? (
              mintBTN({ account })
            ) : (
              <div>
                <Countdown setIsOvertime={setIsOvertime} />
                <WhiteListBTN account={account} setAccount={setAccount} />
              </div>
            )}
          </div>
        </div>
        <SideTitle account={account} setAccount={setAccount} />
      </div>
    </div>
  );
};

export default DefaultPage;

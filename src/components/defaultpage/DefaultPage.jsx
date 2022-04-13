import "./defaultpage.css";
import SideTitle from "../sidetitle/SideTitle";
import WhiteListBTN from "../whitelistbtn/WhiteListBTN";
import Countdown from "../countdown/Countdown";
import MenuBar from "../menubar/MenuBar";
const DefaultPage = ({ account, setAccount, page, setPage }) => {
  return (
    <div className="container">
      <div className="container__content">
        <div className="container__menu">
          <button className="logo"></button>
          <div>
            <MenuBar page={page} setPage={setPage} />
          </div>
          <div className="text-date-description">
            21-23 october 2022
            <br />
            Online register
          </div>
          <div>
            <Countdown />
            <WhiteListBTN />
          </div>
        </div>
        <SideTitle account={account} setAccount={setAccount} />
      </div>
    </div>
  );
};

export default DefaultPage;

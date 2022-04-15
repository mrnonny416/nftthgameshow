import "./mintpage.css";
import SideTitle from "../sidetitle/SideTitle";
import { Link } from "react-router-dom";
import NFT from "../../assets/nft.gif";
const MintPage = ({
  account,
  setAccount,
  minted,
  setMinted,
  whitelist,
  setWhitelist,
}) => {
  const updateWhitelist = () => {
    setWhitelist(whitelist - 1);
    setMinted(minted + 1);
  };

  const mintBTN = () => {
    if (whitelist > 0) {
      return (
        <Link to={"/Mined"}>
          <button className="btn-mint" onClick={updateWhitelist}>
            MINT({whitelist})
          </button>
        </Link>
      );
    } else {
      return (
        <button className="btn-mint">
          MINT({whitelist}) Your Whitelist is over
        </button>
      );
    }
  };
  return (
    <div className="container">
      <div className="container__content">
        <Link to={"/"}>
          <button className="logo"></button>
        </Link>

        <div className="container__menu">
          <div>
            <img src={NFT} className="img-nft" />
          </div>
          <div className="text-nft">
            <h1>NFT PRICE:0.04 ETH</h1>
            <h2>MINTED:</h2>
            <h2>{minted}/2022</h2>
          </div>
          {mintBTN()}
        </div>
        <SideTitle account={account} setAccount={setAccount} />
      </div>
    </div>
  );
};

export default MintPage;

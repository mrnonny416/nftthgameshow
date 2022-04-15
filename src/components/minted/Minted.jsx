import "./minted.css";
import ConnectBTN from "../connectbtn/ConnectBTN";
import { Link } from "react-router-dom";
import NFT from "../../assets/nft.gif";

const Minted = ({ account, setAccount, minted }) => {
  const backpage = () => {};

  const mintBTN = () => {
    return (
      <Link to={"/MintPage"}>
        <button className="btn-mint">MINT AGAIN</button>
      </Link>
    );
  };
  return (
    <div className="container">
      <div className="container__content">
        <Link to={"/"}>
          <button className="logo" onClick={backpage}></button>
        </Link>
        <div className="container__minted">
          <div>
            <h1>SUCCESS!</h1>
            <h2>
              TGS NFT#{minted} SUCCESSFULLY.
              <br />
              <a href="https://opensea.io/account" target={"_blank"}>
                VIEW ON OPENSEA
              </a>
            </h2>
          </div>
          <div>
            <img src={NFT} className="img-nft-minted" />
          </div>
          {mintBTN()}
        </div>
        <div className="container__title__minted">
          <div>
            <ConnectBTN account={account} setAccount={setAccount} />
          </div>
          <div className="text-title">
            SpecialNFT
            <br />
            Thailand
            <br />
            Game Show 2022
            <br />
            <div className="text-title-description">
              The Lagest event in southest asia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minted;

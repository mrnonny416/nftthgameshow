import "./defaultpage.css";
import SideTitle from "../sidetitle/SideTitle";
import SideMenu from "../sidemenu/SideMenu";
import RoadMap from "../roadmap/RoadMap";
import Collab from "../collab/Collab";
import Club from "../club/Club";
const DefaultPage = ({ account, updateAccount, timeout, page, updatePage }) => {
  const currentPage = (page) => {
    if (page === 0) {
      return (
        <SideTitle
          account={account}
          updateAccount={updateAccount}
          page={page}
          updatePage={updatePage}
        />
      );
    } else if (page === 1) {
      return (
        <RoadMap
          account={account}
          updateAccount={updateAccount}
          page={page}
          updatePage={updatePage}
        />
      );
    } else if (page === 2) {
      return (
        <Collab
          account={account}
          updateAccount={updateAccount}
          page={page}
          updatePage={updatePage}
        />
      );
    } else if (page === 3) {
      return (
        <Club
          account={account}
          updateAccount={updateAccount}
          page={page}
          updatePage={updatePage}
        />
      );
    }
  };

  return (
    <div className="container">
      <div className="container__content">
        <SideMenu timeout={timeout} setTimeout={setTimeout} />
        {currentPage(page)}
      </div>
    </div>
  );
};

export default DefaultPage;

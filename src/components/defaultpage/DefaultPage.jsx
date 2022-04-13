import "./defaultpage.css";
import SideTitle from "../sidetitle/SideTitle";
import SideMenu from "../sidemenu/SideMenu";
import RoadMap from "../roadmap/RoadMap";
import Collab from "../collab/Collab";
import Club from "../club/Club";
const DefaultPage = ({ account, setAccount, page, setPage, setIsOvertime }) => {
  const currentPage = (page) => {
    if (page === 0) {
      return (
        <SideTitle
          account={account}
          setAccount={setAccount}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 1) {
      return (
        <RoadMap
          account={account}
          setAccount={setAccount}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 2) {
      return (
        <Collab
          account={account}
          setAccount={setAccount}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 3) {
      return (
        <Club
          account={account}
          setAccount={setAccount}
          page={page}
          setPage={setPage}
        />
      );
    }
  };

  return (
    <div className="container">
      <div className="container__content">
        <SideMenu setIsOvertime={setIsOvertime} />
        <SideTitle
          account={account}
          setAccount={setAccount}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default DefaultPage;

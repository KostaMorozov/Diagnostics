import logoutIcon from "../../assets/logout.svg";

const FooterActions = () => {
  return (
    <div className="footerActions">
      <div className="sideBarAction">
        <img src={logoutIcon} alt="logout" width="20" height="16" />
      </div>
      <div className="sideBarAction profileAction">KM</div>
    </div>
  );
};

export default FooterActions;

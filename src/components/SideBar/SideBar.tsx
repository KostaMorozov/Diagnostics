import { sideBarActions } from "../../consts/consts";
import type { SideBarProps } from "../../types/types";
import FooterActions from "./FooterActions";
import TopActions from "./TopActions";

const SideBar = ({ selectedAction, setSelectedAction }: SideBarProps) => {
  return (
    <div className="sideBar">
      <TopActions
        sideBarActions={sideBarActions}
        setSelectedAction={setSelectedAction}
        selectedAction={selectedAction}
      />
      <FooterActions />
    </div>
  );
};

export default SideBar;

import { UI_TEXTS } from "../../consts/consts";

export default function DashboardHeader() {
  return (
    <div className="topBar padding-x-64">
      <div className="dashboardHeader">
        <span>
          {UI_TEXTS.dashboard.headerDataText}
          <span className="innerHeaderText">
            {UI_TEXTS.dashboard.headerMindText}
          </span>
        </span>

        <span className="innerHeaderText">
          {UI_TEXTS.dashboard.headerAIText}
        </span>
      </div>
    </div>
  );
}

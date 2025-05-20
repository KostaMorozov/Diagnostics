import type { TopActionsProps } from "../../types/types";

export default function TopActions({
  sideBarActions,
  setSelectedAction,
  selectedAction,
}: TopActionsProps) {
  return (
    <div className="sideBarActionsWrapper">
      {sideBarActions.map((action) => (
        <div
          onClick={() => setSelectedAction(action.text)}
          key={action.text}
          className={`sideBarAction ${
            selectedAction === action.text ? "selectedActions" : ""
          }`}
        >
          <img
            src={
              selectedAction === action.text ? action.iconFilled : action.icon
            }
            alt={action.text}
            width="20"
            height="16"
          />
        </div>
      ))}
    </div>
  );
}

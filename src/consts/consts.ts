import alertsIcon from "../assets/alert.svg";
import alertsFilledIcon from "../assets/alertFilled.svg";
import chartIcon from "../assets/chartIcon.svg";
import chartFilledIcon from "../assets/chartIconFilled.svg";
import reportsIcon from "../assets/document.svg";
import reportsFilledIcon from "../assets/documentFilled.svg";
import informationIcon from "../assets/info.svg";
import informationFilledIcon from "../assets/infoFilled.svg";
import settingsIcon from "../assets/settings.svg";
import settingsFilledIcon from "../assets/settingsFilled.svg";
export const diagnosticColumns = ["Diagnostic Date", "Fault Type", "Severity"];

export const FAULT_TYPE_OPTIONS = {
  DETERIORATION: "NDE bearing inner race deterioration",
  LOOSENESS: "NDE bearing mechanical looseness",
};

export const SEVERITY_OPTIONS = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
  CRITICAL: "Critical",
};

export const SEVERITY_ORDER = {
  Low: 4,
  Medium: 3,
  High: 2,
  Critical: 1,
};

export const defaultFormState = {
  faultType: true,
  severity: true,
  date: true,
};

export const UI_TEXTS = {
  dashboard: {
    headerDataText: "Data",
    headerMindText: "Mind",
    headerAIText: "AI",
  },
  table: {
    header: "Diagnostics",
    button: "Add new",
  },
  chart: {
    header: "Fusion trend",
  },
  button: {
    addNew: "+  Add new",
    save: "Save",
    cancel: "Cancel",
  },
  modal: {
    header: {
      addNewDiagnostic: "Add new diagnostic",
    },
  },
  dateFormat: {
    ddmmyyyy: "dd.MM.yyyy",
  },
  datePicker: {
    label: "From",
  },
  addNewDiagnosticForm: {
    faultLabel: "Fault Type",
    severityLabel: "Severity",
  },
  inputValidation: {
    date: "Please Choose Date",
    faultType: "Please Choose Fault Type",
    severity: "Please Choose Severity",
  },
  noResults: {
    chart: "No data available.",
    table: "No diagnostics available, Please add new diagnostics",
  },
};

export const sideBarActions = [
  {
    text: "Diagnostics",
    icon: chartIcon,
    iconFilled: chartFilledIcon,
  },
  {
    text: "Information",
    icon: informationIcon,
    iconFilled: informationFilledIcon,
  },
  {
    text: "Alerts",
    icon: alertsIcon,
    iconFilled: alertsFilledIcon,
  },
  {
    text: "Reports",
    icon: reportsIcon,
    iconFilled: reportsFilledIcon,
  },
  {
    text: "Settings",
    icon: settingsIcon,
    iconFilled: settingsFilledIcon,
  },
];
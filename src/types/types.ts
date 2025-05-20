export interface IRow {
  id: string;
  date: Date;
  faultType: string;
  severity: string;
}

export interface IColumn {
  title: string;
}

export type Severity = "Low" | "Medium" | "High" | "Critical";

export type DiagnosticType = {
  id: string;
  date: Date;
  faultType: string;
  severity: Severity;
};

export type OptionType = {
  value: string;
  text: string;
};

export type ChartDataType = {
  date: string;
  level: number;
  text: string;
};

export type FormInputsValidType = {
  faultType: boolean;
  severity: boolean;
  date: boolean;
};

export type InputsType = "date" | "faultType" | "severity";

export type CustomDotProps = {
  cx: number;
  cy: number;
  color: string;
};

export type CustomTooltipProps = {
  active?: boolean;
  text?: string;
};

export type StatusLineChartProps = {
  data: {
    date: string;
    level: number;
    text: string;
  }[];
};

export type ButtonProps = {
  text: string;
  className?: string;
  onClick: () => void;
};

export type CustomDatePickerProps = {
  value: Date | null;
  handleOnChange?: (value: Date) => void;
  error?: string;
};
export type DropdownProps = {
  options: OptionType[];
  label: string;
  defaultValue: string;
  handleOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  name: string;
};

export type HeaderProps = {
  text: string;
  className: string;
};

export type CommonModalProps = {
  isOpen: boolean;
  handleCloseModal: () => void;
  modalHeader?: string;
  primaryButtonText?: string;
  handlePrimaryButton?: () => void;
  secondaryButtonText?: string;
  handleSecondaryButton?: () => void;
  children?: React.ReactNode;
  footerClassName?: string;
};

export type CommonTableProps = {
  rows: IRow[];
  columns: IColumn[];
};

export type ChartWrapperProps = {
  dateRange: Date | null;
  chartData: ChartDataType[];
  handleDateRange: (value: Date) => void;
};

export type ModalContentProps = {
  isFormInputsValid: FormInputsValidType;
  newDiagnostic: Partial<DiagnosticType>;
  handleFormSelect: (value: string, name: string) => void;
  handleFormDate: (date: Date) => void;
};

export type TableWrapperProps = {
  diagnostics: DiagnosticType[];
  handleAddNewDiagnostic: () => void;
};

export type SideBarProps = {
  selectedAction: string;
  setSelectedAction: (action: string) => void;
};

export type NoResultsProps = {
  text: string;
  className?: string;
};

export type ActionType = {
  text: string;
  icon: string;
  iconFilled: string;
};

export type TopActionsProps = {
  sideBarActions: ActionType[];
  setSelectedAction: (action: string) => void;
  selectedAction: string;
};

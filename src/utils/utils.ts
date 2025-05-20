import { format } from "date-fns";
import { SEVERITY_ORDER, UI_TEXTS } from "../consts/consts";
import type { DiagnosticType, Severity } from "../types/types";

export const formatDate = (
  value: Date,
  formatType: string = UI_TEXTS.dateFormat.ddmmyyyy
) => {
  return format(value, formatType);
};

export const getDotColor = (level: number) => {
  switch (level) {
    case 1:
      return "#e63462";
    case 2:
      return "#ff891b";
    case 3:
      return "#fa0";
    case 4:
      return "#0ead69";
    default:
      return "#888";
  }
};

export const formatDateToText = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
};

export const getSortedTableData = (data: DiagnosticType[]) => {
  return data.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    if (dateA === dateB) {
      return SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity];
    }

    return dateB - dateA;
  });
};

export const getSortedData = (data: DiagnosticType[]) => {
  return data.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateA - dateB;
  });
};

export const filterByHighestSeverity = (sortedData: DiagnosticType[]) => {
  const filteredData = sortedData.reduce((acc, diagnostic) => {
    const date = new Date(diagnostic.date).toDateString();
    if (
      !acc[date] ||
      SEVERITY_ORDER[diagnostic.severity as Severity] <=
        SEVERITY_ORDER[acc[date].severity as Severity]
    ) {
      acc[date] = diagnostic;
    }
    return acc;
  }, {} as Record<string, DiagnosticType>);

  return Object.values(filteredData);
};

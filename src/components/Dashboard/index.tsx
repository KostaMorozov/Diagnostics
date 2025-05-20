import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  SEVERITY_ORDER,
  UI_TEXTS,
  defaultFormState,
} from "../../consts/consts";

import CommonModal from "../../common/Modal";
import { mockDiagnostics } from "../../mocks/DiagnosticsMock";
import type {
  ChartDataType,
  DiagnosticType,
  FormInputsValidType,
  InputsType,
  Severity,
} from "../../types/types";
import {
  filterByHighestSeverity,
  formatDateToText,
  getSortedData,
  getSortedTableData,
} from "../../utils/utils";
import ChartWrapper from "./ChartWrapper";
import ModalContent from "./ModalContent";
import TableWrapper from "./TableWrapper";

function MainView() {
  const [diagnostics, setDiagnostics] =
    useState<DiagnosticType[]>(mockDiagnostics);

  const [isOpen, setIsOpen] = useState(false);

  const [newDiagnostic, setNewDiagnostic] = useState<Partial<DiagnosticType>>(
    {}
  );

  const [chartData, setChartData] = useState<ChartDataType[]>([]);

  const [dateRange, setDateRange] = useState<Date | null>(
    new Date("05-10-2025")
  );

  const [isFormInputsValid, setIsFormInputsValid] =
    useState<FormInputsValidType>(defaultFormState);

  const handleChartData = (items: DiagnosticType[]) => {
    const sortedData = getSortedData(items);
    const filteredData = filterByHighestSeverity(sortedData);
    const data = getMappedDataForChart(filteredData);
    setChartData(data);
  };

  useEffect(() => {
    handleChartData(diagnostics);
  }, [diagnostics]);

  const getMappedDataForChart = (data: DiagnosticType[]) => {
    return data.map((diagnostic) => {
      return {
        date: formatDateToText(diagnostic.date),
        level: SEVERITY_ORDER[diagnostic.severity as Severity],
        text: diagnostic.faultType,
      };
    });
  };

  const handleAddNewDiagnostic = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsFormInputsValid(defaultFormState);
    setNewDiagnostic({});
    setIsOpen(false);
  };

  const handleFormSelect = (value: string, name: string) => {
    const addedDiagnostic = { ...newDiagnostic, [name as InputsType]: value };
    setIsFormInputsValid({ ...isFormInputsValid, [name as InputsType]: true });
    setNewDiagnostic(addedDiagnostic);
  };

  const handleSave = () => {
    let addedDiagnostic;
    if (
      newDiagnostic.date &&
      newDiagnostic.faultType &&
      newDiagnostic.severity
    ) {
      const { severity, faultType, date } = newDiagnostic;
      addedDiagnostic = { severity, date, faultType, id: uuidv4() };
    } else {
      const validations = {
        severity: !!newDiagnostic.severity,
        date: !!newDiagnostic.date,
        faultType: !!newDiagnostic.faultType,
      };

      setIsFormInputsValid(validations);
      return;
    }
    handleCloseModal();
    const sortedNewDiagnostics = getSortedTableData([
      ...diagnostics,
      addedDiagnostic,
    ]);
    setIsFormInputsValid(defaultFormState);
    setNewDiagnostic({});
    setDiagnostics(sortedNewDiagnostics);
  };

  const filterChartData = (range: Date) => {
    const filteredData = diagnostics.filter((diagnostic) => {
      const itemDate = new Date(diagnostic.date);
      const oneDayBeforeRange = new Date(range);
      oneDayBeforeRange.setDate(oneDayBeforeRange.getDate() - 1);
      return itemDate > oneDayBeforeRange;
    });
    handleChartData(filteredData);
  };

  const handleDateRange = (value: Date) => {
    setDateRange(value);
    filterChartData(value);
  };

  const handleFormDate = (date: Date) => {
    const addedDiagnostic = { ...newDiagnostic, date };
    setIsFormInputsValid({ ...isFormInputsValid, date: true });
    setNewDiagnostic(addedDiagnostic);
  };

  return (
    <>
      <ChartWrapper
        chartData={chartData}
        dateRange={dateRange}
        handleDateRange={handleDateRange}
      />
      <TableWrapper
        diagnostics={diagnostics}
        handleAddNewDiagnostic={handleAddNewDiagnostic}
      />
      <CommonModal
        footerClassName="footerAddModal"
        handleCloseModal={handleCloseModal}
        isOpen={isOpen}
        modalHeader={UI_TEXTS.modal.header.addNewDiagnostic}
        primaryButtonText={UI_TEXTS.button.addNew}
        secondaryButtonText={UI_TEXTS.button.cancel}
        handlePrimaryButton={handleSave}
        handleSecondaryButton={handleCloseModal}
      >
        <ModalContent
          isFormInputsValid={isFormInputsValid}
          newDiagnostic={newDiagnostic}
          handleFormSelect={handleFormSelect}
          handleFormDate={handleFormDate}
        />
      </CommonModal>
    </>
  );
}

export default MainView;

import { useMemo } from "react";
import Button from "../../common/Button";
import Header from "../../common/Header";
import NoResults from "../../common/NoResults";
import CommonTable from "../../common/Table";
import { UI_TEXTS, diagnosticColumns } from "../../consts/consts";
import type { TableWrapperProps } from "../../types/types";
import { getSortedTableData } from "../../utils/utils";

export default function TableWrapper({
  diagnostics,
  handleAddNewDiagnostic,
}: TableWrapperProps) {
  const columns = useMemo(() => {
    return diagnosticColumns.map((column) => {
      return {
        title: column,
      };
    });
  }, []);

  const rows = useMemo(() => {
    return getSortedTableData(diagnostics).map((item) => {
      return {
        id: item.id,
        date: item.date,
        faultType: item.faultType,
        severity: item.severity,
      };
    });
  }, [diagnostics]);

  return (
    <>
      <div className="tableHeader">
        <Header text={UI_TEXTS.table.header} className="chartHeader" />
        <Button
          className="addButton"
          text={UI_TEXTS.button.addNew}
          onClick={handleAddNewDiagnostic}
        />
      </div>
      <div className="contentContainer">
        {rows.length > 0 ? (
          <CommonTable rows={rows} columns={columns} />
        ) : (
          <NoResults className="noResults" text={UI_TEXTS.noResults.table} />
        )}
      </div>
    </>
  );
}

import CustomDatePicker from "../../common/DatePicker";
import Dropdown from "../../common/Dropdown";
import {
  FAULT_TYPE_OPTIONS,
  SEVERITY_OPTIONS,
  UI_TEXTS,
} from "../../consts/consts";
import type { ModalContentProps } from "../../types/types";

export default function ModalContent({
  isFormInputsValid,
  newDiagnostic,
  handleFormSelect,
  handleFormDate,
}: ModalContentProps) {
  return (
    <div className="addModalContent">
      <CustomDatePicker
        {...(!isFormInputsValid.date && {
          error: UI_TEXTS.inputValidation.date,
        })}
        value={newDiagnostic.date ?? null}
        handleOnChange={handleFormDate}
      />
      <Dropdown
        {...(!isFormInputsValid.faultType && {
          error: UI_TEXTS.inputValidation.faultType,
        })}
        handleOnChange={(e) => {
          const { name, value } = e.target;
          handleFormSelect(value, name);
        }}
        defaultValue=""
        label={UI_TEXTS.addNewDiagnosticForm.faultLabel}
        options={Object.values(FAULT_TYPE_OPTIONS).map((value) => ({
          value: value,
          text: value,
        }))}
        name="faultType"
      />
      <Dropdown
        {...(!isFormInputsValid.severity && {
          error: UI_TEXTS.inputValidation.severity,
        })}
        handleOnChange={(e) => {
          const { name, value } = e.target;
          handleFormSelect(value, name);
        }}
        defaultValue=""
        label={UI_TEXTS.addNewDiagnosticForm.severityLabel}
        options={Object.values(SEVERITY_OPTIONS).map((value) => ({
          value: value,
          text: value,
        }))}
        name="severity"
      />
    </div>
  );
}

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { UI_TEXTS } from "../consts/consts";
import type { CustomDatePickerProps } from "../types/types";

const CustomDatePicker = ({
  value,
  handleOnChange,
  error,
}: CustomDatePickerProps) => {
  const disableFutureDates = (date: Date) => {
    const today = new Date();
    return date > today;
  };

  const handleChange = (newValue: unknown) => {
    if (newValue instanceof Date && !isNaN(newValue.getTime())) {
      handleOnChange?.(newValue);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        className="error-border"
        label={UI_TEXTS.datePicker.label}
        value={value}
        shouldDisableDate={disableFutureDates}
        onChange={handleChange}
        slotProps={{
          textField: {
            variant: "outlined",
            size: "small",
            error: !!error,
            helperText: error,
            InputProps: {
              readOnly: true,
              style: { border: "none" },
            },
            style: { cursor: "pointer" },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;

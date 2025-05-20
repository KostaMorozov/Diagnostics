import { FormHelperText } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import type { DropdownProps } from "../types/types";

export default function Dropdown({
  options,
  label,
  handleOnChange,
  error,
  name,
  defaultValue,
}: DropdownProps) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth className="error-border" error={!!error}>
        <InputLabel variant="standard" required>
          {label}
        </InputLabel>
        <NativeSelect
          onChange={handleOnChange}
          name={name}
          defaultValue={defaultValue}
        >
          <option value="" disabled hidden></option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </NativeSelect>
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </Box>
  );
}

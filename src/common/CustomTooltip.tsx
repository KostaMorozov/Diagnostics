import Typography from "@mui/material/Typography";
import type { CustomTooltipProps } from "../types/types";

const CustomTooltip = ({ active, text }: CustomTooltipProps) => {
  if (active && text) {
    return (
      <Typography
        sx={{
          border: "1px solid lightGrey",
          padding: "0.5rem",
          borderRadius: "1rem",
          boxShadow: "0 2px 8px 0 rgba(2, 29, 61, 0.12)",
        }}
      >
        {text}
      </Typography>
    );
  }
  return null;
};

export default CustomTooltip;

import type { CustomDotProps } from "../types/types";

const CustomDot = ({ cx, cy, color }: CustomDotProps) => {
  return (
    <circle cx={cx} cy={cy} r={5} stroke="white" strokeWidth={2} fill={color} />
  );
};

export default CustomDot;

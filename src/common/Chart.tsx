import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { v4 as uuidv4 } from "uuid";
import type { StatusLineChartProps } from "../types/types";
import { getDotColor } from "../utils/utils";
import CustomDot from "./CustomDot";
import CustomTooltip from "./CustomTooltip";

const StatusLineChart = ({ data }: StatusLineChartProps) => (
  <ResponsiveContainer width="100%" height={200} className="chartContent">
    <LineChart data={data}>
      <XAxis dataKey="date" className="chartDate"/>
      <YAxis tick={false} />
      <Tooltip
        content={(props) => {
          const text =
            props.payload && props.payload.length > 0
              ? props.payload[0].payload.text
              : undefined;

          return <CustomTooltip text={text} active={props.active} />;
        }}
      />
      <Line
        type="linear"
        dataKey="level"
        stroke="#ccc"
        dot={(props) => (
          <CustomDot
            key={uuidv4()}
            cx={props.cx}
            cy={props.cy}
            color={getDotColor(props.payload.level)}
          />
        )}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default StatusLineChart;

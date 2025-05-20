import chartFilledIcon from "../../assets/chartIconFilled.svg";
import StatusLineChart from "../../common/Chart";
import CustomDatePicker from "../../common/DatePicker";
import Header from "../../common/Header";
import NoResults from "../../common/NoResults";
import { UI_TEXTS } from "../../consts/consts";
import type { ChartWrapperProps } from "../../types/types";

export default function ChartWrapper({
  dateRange,
  chartData,
  handleDateRange,
}: ChartWrapperProps) {
  return (
    <div className="contentContainer">
      <div className="chartHeaderWrapper">
        <div className="chartIconWrapper">
          <img src={chartFilledIcon} alt="Chart Icon" width="20" height="16" />
          <Header text={UI_TEXTS.chart.header} className="chartHeaderText" />
        </div>
        <CustomDatePicker value={dateRange} handleOnChange={handleDateRange} />
      </div>
      {chartData.length > 0 ? (
        <StatusLineChart data={chartData} />
      ) : (
        <NoResults className="noResults" text={UI_TEXTS.noResults.chart} />
      )}
    </div>
  );
}

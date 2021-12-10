import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  // recive data as props to make chartBars
  return (
    <div className="chart">
      <div>Chart goes here</div>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

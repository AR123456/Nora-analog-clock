import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  // going to need this max in the ExpensesChart.js component
  // map the objects into numbers
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // dataPointValues is an array of numbers now so need to use the spread
  // operator and pull them out as stand alone arguments
  const totalMaximum = Math.max(...dataPointValues);

  // recive data as props to make chartBars
  return (
    <div className="chart">
      <div>Chart goes here</div>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          // pass in cacluated totalMax value
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

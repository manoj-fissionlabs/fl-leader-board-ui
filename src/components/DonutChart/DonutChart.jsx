import React, { useState, useEffect } from "react";
import ReactDonut from 'react-donut-chart';
import { donutChartColors } from "../../utils/data";

const DonutChart = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log("chartData --> ", props.chartData);
    setChartData(props.chartData);
  }, [props.chartData]);

  return (
    <div className="no-shadow">
      <ReactDonut
        colors={donutChartColors}
        legend={false}
        height="370"
        width="370"
        data={chartData}
      />
    </div>
  );
};

export default DonutChart;

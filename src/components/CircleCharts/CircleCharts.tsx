import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "./CircleCharts.scss";

export const CircleCharts = React.memo(() => {
  const commonOptions: ApexOptions = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "75%",
        },
        track: {
          background: "#eeeeee",
          opacity: 1,
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "16px",
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: "30px",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
  };

  const projects = [
    {
      name: "Project A",
      data: [75],
      color: "#FF6B6B",
    },
    {
      name: "Project B",
      data: [80],
      color: "#4ECDC4",
    },
    {
      name: "Project C",
      data: [90],
      color: "#45B7D1",
    },
    {
      name: "Project D",
      data: [85],
      color: "#0081A7",
    },
    {
      name: "Project E",
      data: [70],
      color: "#d16416",
    },
  ];

  return (
    <>
      <h2 className="chart-type">Circle charts</h2>
      <h3 className="chart-title">Project completion tracking example</h3>

      <div className="circle-charts-container">
        {projects.map((project, index) => (
          <div key={index} className="circle-chart">
            <Chart
              options={{
                ...commonOptions,
                labels: [project.name],
                colors: [project.color],
              }}
              series={project.data}
              type="radialBar"
              height={350}
            />
          </div>
        ))}
      </div>
    </>
  );
});

CircleCharts.displayName = "CircleCharts";

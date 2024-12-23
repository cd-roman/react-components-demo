import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export const ColumnChartAnnual = () => {
  const fullMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
      fontFamily: "inherit",
    },
    xaxis: {
      categories: fullMonths,
      labels: {
        formatter: (val) => val.substring(0, 3),
        style: {
          fontSize: "14px",
        },
        rotateAlways: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => {
          if (typeof value === "number") {
            if (value === 0) return "0%";
            return `${value.toFixed(1)}%`;
          }
          return value;
        },
      },
    },
    tooltip: {
      x: {
        formatter: function (_val, opts) {
          return fullMonths[opts.dataPointIndex];
        },
      },
      y: {
        formatter: (value) => {
          return `${value.toFixed(1)}%`;
        },
      },
    },
    colors: ["#118B50"],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (value) => {
        return `${value}%`;
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            labels: {
              rotateAlways: true,
              rotate: -45,
            },
          },
        },
      },
      {
        breakpoint: 450,
        options: {
          xaxis: {
            labels: {
              style: {
                fontSize: "12px",
              },
            },
          },
        },
      },
    ],
  };

  const series = [
    {
      name: "Inflation rate",
      data: [6.4, 6.0, 5, 4.9, 4.1, 3, 3.2, 3.7, 3.7, 3.2, 3.1, 3.4],
    },
  ];

  return (
    <>
      <h2 className="chart-type">Column chart annual</h2>
      <h3 className="chart-title">United States Inflation Rate in 2023</h3>
      <div className="w-full">
        <Chart
          options={options}
          series={series}
          type="bar"
          height={350}
          width="100%"
        />
      </div>
    </>
  );
};

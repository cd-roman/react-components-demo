import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export const ColumnChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
      fontFamily: "inherit",
    },
    // title: {
    //   text: "Top 5 Most Popular Programming Languages in 2024",
    //   style: {
    //     fontSize: "18px",
    //     fontWeight: "500",
    //   },
    // },
    xaxis: {
      categories: ["JavaScript", "Python", "Java", "TypeScript", "C#"],
      labels: {
        style: {
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => {
          if (typeof value === "number") {
            if (value === 0) return "0";
            return `${(value / 1000000).toFixed(1)}M`;
          }
          return value;
        },
      },
    },
    tooltip: {
      y: {
        formatter: (value) => {
          return `${(value / 1000000).toFixed(1)}M developers`;
        },
      },
    },
    colors: ["#2E93fA"],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          dataLabels: {
            formatter: (value: number) => {
              return `${(value / 1000000).toFixed(1)}M`;
            },
          },
        },
      },
    ],
  };

  const series = [
    {
      name: "Active Developers",
      data: [6700000, 4200000, 2600000, 2300000, 950000],
    },
  ];

  return (
    <>
      <h2 className="chart-type">Column chart</h2>
      <h3 className="chart-title">
        Top 5 Most Popular Programming Languages in 2024
      </h3>
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

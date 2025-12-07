import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { ComponentHeader } from "../../ui/ComponentHeader";

export const BarChartHorizontal = () => {
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
        formatter: (value) => {
          if (typeof value === "number") {
            if (value === 0) return "0";
            return `${(value / 1000000).toFixed(1)}M`;
          }
          return value;
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => {
          if (typeof value === "number") {
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
        horizontal: true,
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
      <ComponentHeader
        title="Bar Chart Horizontal"
        purpose="Ideal for ranking, comparisons, or popularity metrics in dashboards."
        technical="Built with ApexCharts. Accepts dynamic data arrays. Responsive width, label auto-adjust."
        inAction="Showing top 5 programming languages by popularity."
      />
      {/* <h2 className="chart-type">Bar chart horizontal</h2> */}

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

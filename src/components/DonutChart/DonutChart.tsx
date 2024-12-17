import React from "react";
import { useMemo } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface LegendFormatterOptions {
  seriesIndex: number;
  w: {
    globals: {
      series: number[];
    };
  };
}

export const DonutChart = React.memo(() => {
  const options: ApexOptions = useMemo(
    () => ({
      chart: {
        type: "donut",
        events: {
          legendClick: function (chartContext, seriesIndex) {
            chartContext.toggleDataPointSelection(seriesIndex);
          },
        },
      },
      // title: {
      //   text: "Top 5 Most Popular Programming Languages 2024",
      //   style: {
      //     fontSize: "18px",
      //     fontWeight: "500",
      //   },
      // },
      labels: ["JavaScript", "Python", "Java", "TypeScript", "C#"],
      colors: ["#f8c952", "#36A2EB", "#FF6384", "#4BC0C0", "#9966FF"],
      legend: {
        position: "bottom",
        formatter: (seriesName: string, opts: LegendFormatterOptions) => {
          return `${seriesName}: ${(
            opts.w.globals.series[opts.seriesIndex] / 1000000
          ).toLocaleString(undefined, {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          })}M`;
        },
        onItemClick: {
          toggleDataSeries: false,
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (_val: number, opts) {
          return `${(
            opts.w.globals.series[opts.seriesIndex] / 1000000
          ).toLocaleString(undefined, {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          })}M`;
        },
        dropShadow: {
          enabled: false,
        },
      },
      tooltip: {
        y: {
          formatter: (value) => {
            return `${(value / 1000000).toLocaleString(undefined, {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}M developers`;
          },
        },
      },
      states: {
        hover: {
          filter: {
            type: "none",
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "darken",
          },
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: true,
          donut: {
            size: "70%",
          },
        },
      },
    }),
    []
  );

  const series = useMemo(
    () => [6700000, 4200000, 2600000, 2300000, 950000],
    []
  );

  return (
    <div className="donut-chart">
      <h2 className="chart-type">Donut chart</h2>
      <h3 className="chart-title">
        Top 5 Most Popular Programming Languages in 2024
      </h3>
      <div className="w-full">
        <Chart
          key="donut-chart"
          style={{ marginBottom: "120px" }}
          options={options}
          series={series}
          type="donut"
          height={360}
          width="100%"
        />
      </div>
    </div>
  );
});

DonutChart.displayName = "DonutChart";

export default DonutChart;

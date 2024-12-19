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

export const PieChartMonochrome = React.memo(() => {
  const options: ApexOptions = useMemo(
    () => ({
      chart: {
        type: "pie",
        events: {
          legendClick: function (chartContext, seriesIndex) {
            chartContext.toggleDataPointSelection(seriesIndex);
          },
        },
      },
      labels: ["United Kingdom", "Germany", "France", "Spain", "Turkey"],
      colors: ["#172D85", "#1947A3", "#276FD0", "#3497FD", "#72B7FD"],
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
        },
      },
    }),
    []
  );

  const series = useMemo(
    () => [4000000, 3500000, 2800000, 1800000, 1700000],
    []
  );

  return (
    <div className="pie-chart">
      <h2 className="chart-type">Pie chart monochrome</h2>
      <h3 className="chart-title">
        The fastest growing developer communities in Europe and the Middle East
      </h3>
      <div className="w-full">
        <Chart
          key="pie-chart"
          style={{ marginBottom: "120px" }}
          options={options}
          series={series}
          type="pie"
          height={360}
          width="100%"
        />
      </div>
    </div>
  );
});

PieChartMonochrome.displayName = "PieChartMonochrome";

'use client'
import '../../sass/components/linechart.scss'
import { Line } from "react-chartjs-2";
import { Chart, Tooltip, registerables } from "chart.js";
import React, { useEffect } from "react";
Chart.register(...registerables);
export default function Linechart() {
  const options = {
    elements: {
      line: {
        cubicInterpolationMode: 'monotone' // Smooth curve
      }
    },
    plugins: {
      // scales: {
      //   x: {
      //     max: 300,
      //     ticks: {
      //       callback: value => `${value/100}K`
      //     }
      //   },
      //   y: {
      //     max: 500,
      //     ticks: {
      //       callback: value => `${value / 100} m`
      //     }
      //   }
      // },
      legend: {
        display: true,
        align : 'end',
          labels: {
            usePointStyle: true,
            boxHeight:7,
            filter: item => item.text !== 'none'
          }

      },
      // title: {
      //   display: true,
      //   text: 'Income Statistics', 
      //   align : 'center',
      //   // Add your title text here
      //   font: {
      //     size: 15,// Adjust font size if needed
      //   },
      //   color : 'black',
      // },
    },
    scales: {
      y: {
        // beginAtZero: true,
        border: { dash: [6, 6], display: false },
        grid: {
          display: true, // Display grid lines for the y-axis
        },
        ticks: {
          padding: 13,
          stepSize: 10,
          callback: function(value, index, values) {
            return `%${value}m`; // Custom callback to add '%' and 'm' to each tick value
          }
        },
      },
      x: {
        // beginAtZero: true,
        border: { display: false },
        grid: {
          display: false, // No display of grid lines for the x-axis
        },
        ticks: {
          padding: 0
        },
      },
    },
    datalabels: {
      display: true,
      align: 'center',
      anchor: 'center',
      padding: 4,
      color: 'black',
      font: {
        weight: 'bold',
        size: 12,
      },
      formatter: (value) => `$${value}`
    },
  };

  const data = {
    labels: ["15%", "21%", "32%", "40%", "51%", "62%","73%"],
    datasets: [
      {
        label: "none",
        data: [0, 53, 85, 41, 44, 65 , 50],
        fill: false,
        // backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#E23F44",
        borderDash: [4,4],
        borderWidth: 2.5,
        pointRadius: (context) => context.dataIndex === 0 ? 5 : 0, 
        pointBackgroundColor: (context) => context.dataIndex === 0 ? '#E23F44' : undefined, 
      },
      {
        label: "none",
        data: [0, 25, 35, 51, 54, 76 , 68],
        fill: false,
        borderColor: "blue",
        borderWidth: 2.5,
        borderDash: [4, 4],
        pointRadius: (context) => context.dataIndex === 0 ? 5 : 0, 
        pointBackgroundColor: (context) => context.dataIndex === 0 ? 'blue' : undefined, 
        

        pointStyle: 'circle',
      },
      {
        label: "Income",
        data: [0, 30, 25, 47, 50, 70 , 58],
        fill: false,
        borderColor: "#90EE90",
        borderDash: [4, 4],
        borderWidth: 2.5,
        pointRadius: (context) => context.dataIndex === 0 ? 5 : 0, 
        pointBackgroundColor: (context) => context.dataIndex === 0 ? '#90EE90' : undefined, 
      },
      {
        label: "Spanend",
        data: [0, 40, 24, 75, 68, 54 , 38],
        fill: false,
        borderColor: "#FF7074",
        borderDash: [4, 4],
        borderWidth: 2.5,
        pointRadius: (context) => context.dataIndex === 0 ? 3 : 0, 
        pointBackgroundColor: (context) => context.dataIndex === 0 ? '#FF7074' : undefined, 

      },
    ],
  };
  return (
    <div className='lineChartContainer'>
      <Line data={data} options={options} />
    </div>
  );
}

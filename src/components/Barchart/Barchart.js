import '../../sass/components/barchart.scss'
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  // Legend
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  // Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

const BarChart = () => {

  const dataLabelPlugin = {
    id: 'dataLabels',
    afterDraw: chart => {
      const ctx = chart.ctx;
      chart.data.datasets.forEach((dataset, i) => {
        const meta = chart.getDatasetMeta(i);
        if (!meta.hidden) {
          meta.data.forEach((bar, index, value) => {
            const data = `$${dataset.data[index]}M`;
            ctx.save();
            ctx.fillStyle = 'white'; // Set color of the text
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = '8px Monospace'; // Set font size and family
            ctx.fillText(data, bar.x, bar.y +10); // Adjust Y position as needed
            ctx.restore();
          });
        }
      });
    }
  };
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun'],
    datasets: [
        {
        //   label: 'Data Series 1',
          backgroundColor: '#81f3d7',
          borderColor: '#81f3d7',
          borderWidth: 1,
          data: [1 , 2, 3, 4, 5],
          borderRadius:6,
  
        },
        {
        //   label: 'Data Series 2',
          backgroundColor: '#1b1b1b',
          borderColor: '#1b1b1b',
          borderWidth: 1,
          data: [3, 4, 2, 5, 1],
          borderRadius:6,
    
        },
      ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      }
    },
    // layout: {
    //   padding: {
    //     left: 2,
    //     right: 2,
    //     top: 5,
    //     bottom: 2,
    //   },
    // margin: {
    //         left: 2,
    //         right: 2,
    //         top: 2,
    //         bottom: 2
    //         },
    // },
    elements: {
        bar: {
          borderRadius:6,
         
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          border: { dash: [6, 6], display: false },
          grid: {
            display: true // Display grid lines for the y-axis
          },
          ticks: {
            padding: 20,
          
            stepSize:1,
            callback: function(value, index, values) {
              return `$${value}m`; // Custom callback to add '%' and 'm' to each tick value
            }
          }
        },
        x: {
          beginAtZero: true,
          border: { display: false },
          grid: {
            display: false // No display of grid lines for the x-axis
          },
          ticks: {
            padding: 7
          }
        }
      },
  };

  return (
    <div className='barchartContainer'>
      <Bar data={data} options={options} plugins={[dataLabelPlugin]}  />
    </div>
  );
};

export default BarChart;
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({data}) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        }
    };

  return <Line options={options} data={data}/>;
};
export default LineChart;

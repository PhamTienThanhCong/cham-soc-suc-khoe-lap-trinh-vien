import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);


export function LineChart() {
  const [eyeData, setEyeData] = useState([0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    let eyedata = JSON.parse(localStorage.getItem("eyedata"));
    setEyeData(eyedata);
  }, []);

  const labels = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Phân tích bài tập chăm sóc mắt",
        fill: true,
        data: eyeData,
        borderColor: "rgba(0, 153, 246, 0.5)",
        backgroundColor: "rgba(0, 153, 246, 0.2)",
        responsive: true,
      },
    ],
  };


  return (
    <Line
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
}

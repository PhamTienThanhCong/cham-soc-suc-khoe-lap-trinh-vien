import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Phân tích chăm sóc tai',
    },
  },
};

const labels = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];


export function BarChart() {

  const [earData, setEarData] = useState([0,0,0,0,0,0,0])


  useEffect(() => {
    let earData = JSON.parse(localStorage.getItem("eardata"));
    setEarData(earData);
  }, [])

  const data = {
    labels,
    datasets: [
      {
        label: 'Thời gian sử dụng tai nghe',
        data: earData,
        backgroundColor: 'rgba(0, 153, 246, 0.5)',
      }
    ],
  };
  
  return <Bar options={options} data={data} />;
}

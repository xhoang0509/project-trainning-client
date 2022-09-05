import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function getArrayValue(data, name) {
  return data.reduce((prevValue, currValue) => {
    prevValue.push(currValue[name]);
    return prevValue;
  }, []);
}

const createData = (devices) => {
  return {
    labels: getArrayValue(devices, 'name'),
    datasets: [
      {
        label: '# of Votes',
        data: getArrayValue(devices, 'power'),
        backgroundColor: getArrayValue(devices, 'colorChart'),
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
};

function Chart({ devices }) {
  const data = createData(devices);
  return <Doughnut data={data} />;
}

export default Chart;

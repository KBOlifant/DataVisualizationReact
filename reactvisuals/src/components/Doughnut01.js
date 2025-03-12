import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);
const DoughnutChart = () => {
    const data = {
        labels: ['First', 'Business', 'Premium Economy', 'Economy'],
        datasets: [
            {
                label: '# of Seats',
                data: [14, 70, 60, 341],
                backgroundColor: [
                    '#605661',
                    '#D9D9D9',
                    '#0F7173',
                    '#61060e',
                ],
                borderColor: [
                    '#605661',
                    '#D9D9D9',
                    '#0F7173', 
                    '#61060e',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: true, // Disable the legend
            },
            tooltip: {
                enabled: true, // Disable the tooltips
            },
        },
    };
    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    );
}
export default DoughnutChart;
import { Line } from 'react-chartjs-2';
import React from "react";
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const lineChartData = () =>{
    const data ={
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Cost in a year',
            labels: 'Sales of the Week',
            data: [100220, 110050, 120000, 140000, 123520, 135053, 103503, 130550, 130501, 130500, 130501, 100224],
            backgroundColor: '#FFFFFF55',
            borderColor: 'white',
            pointBorderColor: 'white',
            fill: true,
            tension: 0.4,
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15
            }
        ]
    }
    
    const option = {
        plugins: {
            legend: true
        },
        scales: {
            y: {
                //min: 3,
                //max: 6
            }
        }
    }
    
    return (
        <div>
            <Line
            data={data}
            options={option}
            ></Line>
        </div>
    );
};

export default lineChartData;
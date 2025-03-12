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
        labels: ['Mon', 'Tue', 'Wed'],
        datasets: [{
            labels: 'Sales of the Week',
            data: [6, 3, 9],
            backgroundColor: 'red',
            borderColor: 'black',
            pointBorderColor: 'none',
            fill: true,
            tension: 0.4
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
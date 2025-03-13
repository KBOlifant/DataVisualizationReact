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
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dataset1 = labels.map(() => Math.floor(Math.random() * (110000 - 90000)) + 90000)
    const data ={
        
        labels: labels,
        datasets: [{
            label: 'Cost in a year',
            labels: 'Sales of the Week',
            data: dataset1,
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
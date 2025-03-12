import React from 'react';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import '../App.css';

// Static data
const A388IAS = [150, 190, 240, 520, 300, 138];

// Register Chart.js components
ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

const IAS = () => {
  // Static data
  const data = {
    labels: ['Take-off', 'Initial Climb (to 5000ft)', 'Initial Climb (to FL240)', 'Cruise', 'Descent (to FL100)', 'Approach'],
    datasets: [
      {
        label: 'IAS (Indicated Air Speed) per flight level',
        data: A388IAS, // Example ability scores
        borderColor: 'rgba(8, 202, 206, 1)', // Border color
        borderWidth: 3, // Border width
        pointBackgroundColor: 'rgb(8, 202, 206)', // Point fill color
        pointBorderColor: '#333', // Point border color
        pointHoverBackgroundColor: '#fff', // Point hover fill color
        pointHoverBorderColor: 'rgba(8, 202, 206, 1)', // Point hover border color
        fill: true, // Enable fill between points
        backgroundColor: 'rgba(8, 202, 206, 0.5)', // Fill color
      },
    ],
  };

  // Options for the radar chart
  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'white', 
        },
        grid: {
          color: 'white', 
        },
        suggestedMin: 0, // Minimum value for the radial axis
        suggestedMax: 550, // Maximum value for the radial axis
        pointLabels: {
          color: 'white', // Change label text color
          font: {
            size: 16, 
          },
        },
      },
    },
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false, // Allow the chart to stretch
    plugins: {
      legend: {
        position: 'top', // Position of the legend
        labels: {
          color: 'white', // Change legend text color to white
          font: {
            size: 16, 
          },
        },
      },
      tooltip: {
        enabled: true, // Enable tooltips
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value} ft`; // Add "ft" to the tooltip
          },
        },
      },
    },
  };

  return (
    <div className="IAS-container">
      <Radar data={data} options={options} />
    </div>
  );
};

export default IAS;
import React from 'react';
import { Line as LineChart } from 'react-chartjs';
import styles from '../styles';

// USING REACT-CHARTJS

const Graph = ({labels = [], data = [], dataAvg = [] }) => {
  const dataOptions = {
        animation: {
          duration: 2000,
          easing: "easeOutQuart"
        },
        xAxes: [{
            id: "x-axis-0"
        }]
  }
  const dataset = {
      labels: labels,
      datasets: [
        {
          label: "Message Score",
          fill: true,
          backgroundColor: "rgba(220,220,220,0.2)",
          borderColor: "rgba(220,220,220,1)",
          pointBorderColor: "rgba(220,220,220,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(220,220,220,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          data: data
        },
        {
          label: "Average Mood",
          fill: true,
          backgroundColor: "rgba(0,144,255,0.2)",
          borderColor: "rgba(0,144,255,1)",
          pointBorderColor: "rgba(0,144,255,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(0,144,255,1)",
          pointHoverBorderColor: "rgba(0,144,255,1)",
          pointHoverBorderWidth: 2,
          data: dataAvg
        }
      ]
    };
      return (
      <LineChart style={styles.graph} data={dataset} options={dataOptions} width="500" height="500"/>
    )
}

export default Graph;

import React from 'react';
import { Line as LineChart } from 'react-chartjs';
import { Bar as BarChart } from 'react-chartjs';
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
  const barChartData = {
    labels: ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", '6PM', '7PM', '8PM'],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [30, 30, 30, 30, 30, 50, 30, 35, 30, 30, 30]
        }
    ]
  };

  const barChartOptions = {

    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"


  }
      return (
      <div>
      <LineChart style={styles.graph} data={dataset} options={dataOptions} width="500" height="500"/>
      <BarChart data={barChartData} options={barChartOptions} width="500" height="300" />
      </div>
    )
}

export default Graph;

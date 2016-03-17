import React from 'react';
import { Line as LineChart } from 'react-chartjs';
// import { LineChart as LineChart } from 'react-d3';
import styles from '../styles';

// const Graph = ({labels, data, dataAvg}) => {
//   console.log(data);
//   const lineData = [
//   {
//     name: 'Individual Messages',
//     values: data,
//   }
// ];
//   // const dataset = [
//   //     labels: labels,
//   //     datasets: [
//   //       {
//   //         label: 'My First dataset',
//   //         fillColor: 'rgba(0,0,0,0.2)',
//   //         strokeColor: 'rgba(0,0,0,1)',
//   //         pointColor: 'rgba(0,0,0,1)',
//   //         pointStrokeColor: '#fff',
//   //         pointHighlightFill: '#fff',
//   //         pointHighlightStroke: 'rgba(0,0,0,1)',
//   //         data: data
//   //       },
//   //       {
//   //         label: 'My First dataset',
//   //         fillColor: 'rgba(0,144,255,0.2)',
//   //         strokeColor: 'rgba(0,144,255,1)',
//   //         pointColor: 'rgba(0,144,255,1)',
//   //         pointStrokeColor: '#fff',
//   //         pointHighlightFill: '#fff',
//   //         pointHighlightStroke: 'rgba(0,144,255,1)',
//   //         data: dataAvg
//   //       },
//   //     ]
//   //   ];
//       return (
//       <LineChart
//   data={lineData}
//   width={600}
//   height={400}
//   title="Line Chart"
// />
//     )
// }

// USING REACT-CHARTJS

const Graph = ({labels, data, dataAvg}) => {
  const dataset = {
      labels: labels,
      datasets: [
        {
          label: 'My First dataset',
          fillColor: 'rgba(0,0,0,0.2)',
          strokeColor: 'rgba(0,0,0,1)',
          pointColor: 'rgba(0,0,0,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(0,0,0,1)',
          data: data
        },
        {
          label: 'My First dataset',
          fillColor: 'rgba(0,144,255,0.2)',
          strokeColor: 'rgba(0,144,255,1)',
          pointColor: 'rgba(0,144,255,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(0,144,255,1)',
          data: dataAvg
        },
      ]
    };
      return (
      <LineChart style={styles.graph} data={dataset} width="500" height="500"/>
    )
}

export default Graph;

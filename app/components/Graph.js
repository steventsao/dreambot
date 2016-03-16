import React from 'react';
import { Line as LineChart } from 'react-chartjs';
import styles from '../styles';

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
      <LineChart style={styles.graph} data={dataset} width="600" height="250"/>
    )
}

export default Graph;

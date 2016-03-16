import React from 'react';
import { Line as LineChart } from 'react-chartjs';
import styles from '../styles';

const Graph = ({messages}) => {
      return (
        <div style={styles.graph}> <br/> THE GRAPH OMG <br/>

      <LineChart data={{
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
}} width="600" height="250"/>

      </div>
    )
}

export default Graph;

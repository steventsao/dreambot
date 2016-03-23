import React from 'react';
import Graph from '../components/Graph';

const Test = ({ averages, currentDate }) => {
  return (
    <div>

      { /* <LineChart style={styles.graph} data={dataset} options={dataOptions} width="500" height="500"/> */ }

      <pre>
        Current Date: {currentDate}
        <br />
        <br />
        {JSON.stringify(averages, null, 2)}
      </pre>
    </div>
  );
};

export default Test;

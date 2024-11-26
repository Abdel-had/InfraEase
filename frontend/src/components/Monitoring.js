import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const Monitoring = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Appel API pour récupérer les données de monitoring
    axios.get('http://localhost:8000/api/monitoring/')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching monitoring data:', error));
  }, []);

  if (!data) {
    return <p>Loading monitoring data...</p>;
  }

  const chartData = {
    labels: ['CPU Usage (%)', 'Memory Usage (GB)', 'Active Pipelines'],
    datasets: [
      {
        label: 'System Metrics',
        data: [data.cpu_usage, data.memory_usage, data.active_pipelines],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>System Monitoring</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Monitoring;

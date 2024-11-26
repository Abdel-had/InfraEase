import React from 'react';
import PipelineList from './components/PipelineList';
import Monitoring from './components/Monitoring';

function App() {
  return (
    <div>
      <h1>InfraEase</h1>
      <PipelineList />
      <Monitoring />
    </div>
  );
}

export default App;

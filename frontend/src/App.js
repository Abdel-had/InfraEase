import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import PipelineList from './components/PipelineList';
import Monitoring from './components/Monitoring';

function App() {
  const [view, setView] = useState('pipelines');

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            InfraEase
          </Typography>
          <Button color="inherit" onClick={() => setView('pipelines')}>
            Pipelines
          </Button>
          <Button color="inherit" onClick={() => setView('monitoring')}>
            Monitoring
          </Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '20px' }}>
        {view === 'pipelines' && <PipelineList />}
        {view === 'monitoring' && <Monitoring />}
      </Container>
    </div>
  );
}

export default App;

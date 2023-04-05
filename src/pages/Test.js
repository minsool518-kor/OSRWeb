import * as React from 'react';
import { Button } from '@mui/material';
import Layout from '../components/layout'
import { Card, Typography, CardContent, Grid, Divider } from '@mui/material'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { MosaContext } from '../context/MosaContext'
import MosaMotionControl from '../components/MosaComponents/MosaMotionControl'



export default function Test() {
  return (
    <MosaContext.Consumer>
      {({
        isSerialAvailable,
            connected,
            commandRobot,
            target,
            inputMethod,
            handleInputMethodChange,
            outputMethod,
            handleOutputMethodChange,
            settings,
            updateSettings,
      }) => (
        <Layout>
           <Grid container spacing={2} justify="center">
            <Grid item xs={12} md={4} lg={3}>
              <Card>
                <CardContent>
                <Button href="/" variant="contained"  sx={{ width: 200, padding: 1, margin: 2 }}>Main Page</Button>
                  <Typography>
                    Input: {!inputMethod && 'none selected'}
                  </Typography>
                  <ToggleButtonGroup
                    value={inputMethod}
                    exclusive
                    onChange={handleInputMethodChange}
                  >
                    <ToggleButton value="web">WEB</ToggleButton>
                    <ToggleButton value="remote" disabled>
                      REMOTE
                    </ToggleButton>
                  </ToggleButtonGroup>
                  <br />
                  <br />
                  <Typography>
                    Output: {!outputMethod && 'none selected'}
                  </Typography>
                  <ToggleButtonGroup
                    value={outputMethod}
                    exclusive
                    onChange={handleOutputMethodChange}
                  >
                    {isSerialAvailable && (
                      <ToggleButton value="serial">SERIAL</ToggleButton>
                    )}
                    <ToggleButton value="visualizer">SR-VIS</ToggleButton>
                  </ToggleButtonGroup>
                </CardContent>
              </Card>
              <hr />
              {/* <MosaVisualizer target={target} /> */}
            </Grid>
            <Grid item xs={12} md={4} lg={5}>
              <MosaMotionControl
                connected={connected}
                target={target}
                commandRobot={commandRobot}
              />
            </Grid>        
                
            
          </Grid>
          &nbsp;
          <Divider />
        </Layout>
    )}
    </MosaContext.Consumer>
  );
}

import * as React from 'react';
//import Container from '@mui/material/Container';

//import Box from '@mui/material/Box';
//import ProTip from '../components/ProTip';
//import Link from '../components/Link';
//import Copyright from '../components/Copyright';
import { Button } from '@mui/material';

import Layout from '../components/layout'
//import SEO from '../components/seo'

 import { Card, Typography, CardContent, Grid, Divider } from '@mui/material'
 import { ToggleButton, ToggleButtonGroup } from '@mui/material'

import { MosaContext } from '../context/MosaContext'

import MosaOutputRangeControl from '../components/MosaComponents/MosaOutputRangeControl'
import MosaMotionControl from '../components/MosaComponents/MosaMotionControl'
import MosaPlanarControl from '../components/MosaComponents/MosaPlanarControl'
import MosaVibeControl from '../components/MosaComponents/MosaVibeControl'
//import MosaSineControl from '../components/MosaComponents/MosaSineControl'
import MosaVisualizer from '../components/MosaComponents/MosaVisualizer'
//import MosaRandomControl from '../components/MosaComponents/MosaRandomControl'

export default function About() {
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
          {/* <Container maxWidth="sm">
            <Button variant="contained">Hello World</Button>
            <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Material UI Gatsby example 
            </Typography>
            <Link to="/">Go to the main page</Link>
            <ProTip />
            <Copyright />
            <ToggleButton value="web">WEB</ToggleButton>
            <ToggleButton value="remote" >remote</ToggleButton>
            <ToggleButton value="serial">SERIAL</ToggleButton>
            <ToggleButton value="visualizer">SR-VIS</ToggleButton>
            </Box>
          </Container>
           */}
           
           <Grid container spacing={2} justify="center">
            <Grid item xs={12} md={4} lg={3}>
              <Card>
                <CardContent>
                <Button href="minsool518-kor-minsool518-kor.github.io/" variant="contained"  sx={{ width: 200, padding: 1, margin: 2 }}>Main Page</Button>
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
                  <br />
                  <br />
                  <Typography variant="caption">
                    (more I/O coming soon)
                  </Typography>
                  {!isSerialAvailable && ( // if serial not available, explain
                    <>
                      <br />
                      <Typography>
                        Could not detect serial capabilities. Please use the
                        latest version of Chrome, open{' '}
                        <code>chrome://flags</code>, and set
                        <code>
                          #enable-experimental-web-platform-features
                        </code>{' '}
                        (note that these are experimental features, use at your
                        own risk, etc etc)
                      </Typography>
                    </>
                  )}
                </CardContent>
              </Card>
              <hr />
              <MosaVisualizer target={target} />
              <hr />
              <MosaOutputRangeControl
                settings={settings}
                updateSettings={updateSettings}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={5}>
              <MosaMotionControl
                connected={connected}
                target={target}
                commandRobot={commandRobot}
              />
              <hr />
              <MosaVibeControl
                connected={connected}
                target={target}
                commandRobot={commandRobot}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <MosaPlanarControl
                connected={connected}
                commandRobot={commandRobot}
              />
              <hr />
              {/* <MosaRandomControl
                connected={connected}
                target={target}
                commandRobot={commandRobot}
              /> */}
              {/* <hr />
              <MosaSineControl
                connected={connected}
                target={target}
                commandRobot={commandRobot}
              /> */}
            </Grid>
          </Grid>
          &nbsp;
          <Divider />
        </Layout>
      
    )}
    </MosaContext.Consumer>
    

    // <MosaContext.Consumer>
    //   {({
    //     isSerialAvailable,
    //     connected,
    //     commandRobot,
    //     target,
    //     inputMethod,
    //     handleInputMethodChange,
    //     outputMethod,
    //     handleOutputMethodChange,
    //     settings,
    //     updateSettings,
    //   }) => (
    //     <Layout>
    //       <SEO title="Home" />
          // <Grid container spacing={2} justify="center">
          //   <Grid item xs={12} md={4} lg={3}>
          //     <Card>
          //       <CardContent>
          //         <Typography>
          //           Input: {!inputMethod && 'none selected'}
          //         </Typography>
          //         <ToggleButtonGroup
          //           value={inputMethod}
          //           exclusive
          //           onChange={handleInputMethodChange}
          //         >
          //           <ToggleButton value="web">WEB</ToggleButton>
          //           <ToggleButton value="remote" disabled>
          //             REMOTE
          //           </ToggleButton>
          //         </ToggleButtonGroup>
          //         <br />
          //         <br />
          //         <Typography>
          //           Output: {!outputMethod && 'none selected'}
          //         </Typography>
          //         <ToggleButtonGroup
          //           value={outputMethod}
          //           exclusive
          //           onChange={handleOutputMethodChange}
          //         >
          //           {isSerialAvailable && (
          //             <ToggleButton value="serial">SERIAL</ToggleButton>
          //           )}
          //           <ToggleButton value="visualizer">SR-VIS</ToggleButton>
          //         </ToggleButtonGroup>
          //         <br />
          //         <br />
          //         <Typography variant="caption">
          //           (more I/O coming soon)
          //         </Typography>
          //         {!isSerialAvailable && ( // if serial not available, explain
          //           <>
          //             <br />
          //             <Typography>
          //               Could not detect serial capabilities. Please use the
          //               latest version of Chrome, open{' '}
          //               <code>chrome://flags</code>, and set
          //               <code>
          //                 #enable-experimental-web-platform-features
          //               </code>{' '}
          //               (note that these are experimental features, use at your
          //               own risk, etc etc)
          //             </Typography>
          //           </>
          //         )}
          //       </CardContent>
          //     </Card>
          //     <hr />
          //     <MosaVisualizer target={target} />
          //     <hr />
          //     <MosaOutputRangeControl
          //       settings={settings}
          //       updateSettings={updateSettings}
          //     />
          //   </Grid>
          //   <Grid item xs={12} md={4} lg={5}>
          //     <MosaMotionControl
          //       connected={connected}
          //       target={target}
          //       commandRobot={commandRobot}
          //     />
          //     <hr />
          //     <MosaVibeControl
          //       connected={connected}
          //       target={target}
          //       commandRobot={commandRobot}
          //     />
          //   </Grid>
          //   <Grid item xs={12} md={4} lg={4}>
          //     <MosaPlanarControl
          //       connected={connected}
          //       commandRobot={commandRobot}
          //     />
          //     <hr />
          //     <MosaRandomControl
          //       connected={connected}
          //       target={target}
          //       commandRobot={commandRobot}
          //     />
          //     <hr />
          //     <MosaSineControl
          //       connected={connected}
          //       target={target}
          //       commandRobot={commandRobot}
          //     />
          //   </Grid>
          // </Grid>
          // &nbsp;
          // <Divider />
    //     </Layout>
    //   )}
    // </MosaContext.Consumer>
  );
}

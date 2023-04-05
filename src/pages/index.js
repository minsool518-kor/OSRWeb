import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';
import { Button } from '@mui/material';



export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 10 }} style={{ padding: "14px 14px" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Gatsby example
        </Typography>
        <Button href="/about" variant="contained"  sx={{ width: 200, padding: 1, margin: 2 }}>
          Copy Page</Button>
        <Button href="/Test" variant="contained" sx={{ width: 200, padding: 1, margin: 2 }}>
          SubTemp Page</Button>
        <Button href="/Chat" variant="contained" sx={{ width: 200, padding: 1, margin: 2 }}>
          Chating Page</Button>
        
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

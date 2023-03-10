import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" target="_blank" href="https://github.com/justin-ferwerda">
        Hold My Table
      </Link>{' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <>
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#ADD8E6',
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
          <Typography variant="body1">
            Want your restaurant on Hold My Table? Start <Link className="footer-link" href="/restaurants/new">Here.</Link>
          </Typography>
        </Container>
      </Box>
    </>

  );
}

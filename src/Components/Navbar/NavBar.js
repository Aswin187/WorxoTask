import * as React from 'react';
import { AppBar, Box, Typography, Button, Grid } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css"

export function NavBar() {
  return (

    <Box >
      <AppBar className='appBar'>

        <Grid container>
          <Grid item xs={12} className='header' >
            <Typography variant="h3" className='appBar-text'>
              <MenuIcon style={{color:"lightgrey",marginTop:'20px'}}/>xentice
            </Typography>

            <Typography>
              <Button style={{marginTop:"20px"}}><CampaignIcon style={{color:"lightgrey"}}/> Post Ad </Button>
              <Button style={{marginTop:"20px"}}><PlaceOutlinedIcon style={{color:"lightgrey"}}/> Near Me </Button>
              <Button style={{marginTop:"20px"}}><LoginIcon style={{color:"lightgrey"}}/> Login/SignUp </Button>
            </Typography>
          </Grid>
        </Grid>


      </AppBar>
    </Box>
  );
}
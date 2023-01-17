import { Height } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'


const BannerTwo = () => {
  return (
    <div >
      <Grid container style={{ alignItems: 'center' }}>
        <img src='bannerTwo/Bannertwoimg.png' alt='two' style={{width:"100%"}}/>
        <Grid item xs={8}  >
          <img   src='bannerTwo/8OHYcD4EA5hpJqQgtQmNVfLrO0YXspuEDfseTmXX.png'  alt="" style={{width:"90%", height:"400px",marginLeft:'80px'}}/>

        </Grid>
        <Grid item xs={4}>
          <img   className='banner2' src='bannerTwo/M2dhebuxJ100xVTDB0sKwbvlQYyG9POXRyEYz9rk.png'  alt=""style={{width:"80%", height:"400px"}}/>

        </Grid>
      </Grid>
    </div>
  )
}

export default BannerTwo

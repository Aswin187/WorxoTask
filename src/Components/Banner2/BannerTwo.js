import { Grid } from '@mui/material'
import React from 'react'
import "../Banner/Banner.css"


const BannerTwo = () => {
  return (
    <div>
      <Grid className= "banner" container style={{ alignItems: 'center' }}>
        <img src='https://raw.githubusercontent.com/Aswin187/WorxoTask/main/public/BannerImages/Bannertwoimg.png' alt='two' style={{width:"100%"}}/>
        <Grid item xs={8}  >
          <img   src='https://raw.githubusercontent.com/Aswin187/WorxoTask/main/public/BannerImages/8OHYcD4EA5hpJqQgtQmNVfLrO0YXspuEDfseTmXX.png'  alt="" style={{width:"90%", height:"400px",marginLeft:'80px'}}/>

        </Grid>
        <Grid item xs={4}>
          <img   className='banner2' src='https://raw.githubusercontent.com/Aswin187/WorxoTask/main/public/BannerImages/M2dhebuxJ100xVTDB0sKwbvlQYyG9POXRyEYz9rk.png'  alt=""style={{width:"80%", height:"400px"}}/>

        </Grid>
      </Grid>
    </div>
  )
}

export default BannerTwo

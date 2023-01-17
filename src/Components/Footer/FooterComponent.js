import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import "./FooterStyle.css";
const FooterComponent = () => {
  return (
    <div className="footer">
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography>About</Typography> <br />

          <p className="text">
            {" "}
            How Xentice works
            <br /> <br />
            Founders Letter
            <br /> <br />
            Newsroom
            <br /> <br />
            Investors
            <br /> <br />
            Xentice Gold
            <br /> <br />
            Xentice Platinum
            <br /> <br />
            Startup Support
            <br />
            Careers{" "}
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {" "}
          <Typography>Explore</Typography> <br />
          <p className="text">
            Diversity & Discrimination
            <br /> <br />
            Accessibility
            <br /> <br />
            Xentice Associates
            <br /> <br />
            Xentice Team
            <br /> <br />
            Xentice Mall
            <br /> <br />
            Xstudio
            <br /> <br />
            Xmoney
            <br /> <br />
            Entice Spaces
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>

          <Typography>Services</Typography> <br />
          <p className="text">
            Buttons & Badges<br /> <br />

            Mobile Appss<br /> <br />

            For Companiess<br /> <br />

            Mobile Appss<br /> <br />

            Review Professionalss<br /> <br />

            Suggested Professionalss<br /> <br />

            Resource Centres<br /> <br />

            Community Centres<br /> <br />
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>

          <Typography>Support</Typography> <br />
          <p className="text">
            Our COVID-19 Response<br /> <br />

            Help Centre<br /> <br />

            Cancellation options<br /> <br />

            Neighbourhood Support<br /> <br />

            Corporate contact<br /> <br />

            Trust & Safety<br /> <br />

            FAQ<br /> <br />

            Payment gateway
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <br></br>
          <br></br><br></br>
          <Typography>    DISCLAIMER</Typography> <br />
          <p>Please do not share your xentice password, Credit/Debit card pin, other confidential information with anyone even if he/she claims to be from xentice. We advise our customers to completely ignore such communications & report to us at support@xentice.com.</p>
        </Grid>
      
        <Grid item xs={12}>

          <hr />
        </Grid>
        <Grid item xs={12} sm={6}> <br />
          <p>© Xentice Group of Companies 2022 . All Rights Reserved</p>
        </Grid>
        <Grid item xs={12} sm={6} className='buttonStyle'>
          <Button className='btn'>About Us</Button>
          <Button className='btn'>Contact Us</Button>
          <Button className='btn'>Privacy Policy</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterComponent;

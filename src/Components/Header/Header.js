import * as React from "react";
import './Header.css'
import { Box,Typography,} from "@mui/material";
let type = [
  
  {
    name: "Commercial Shop",
    url: "SecondHeader/commercial_space.cabcda3f.png",
  },
  {
    name: "Commercial Office",
    url: "SecondHeader/coworking.ae2d86ad.png",
  },
  {
    name: "Commercial Land",
    url: "SecondHeader/land_lease.7ccc6444.png",
  },
  {
    name: "Commercial Building",
    url: "SecondHeader/download.png",
  },
  {
    name: "Industrial Building",
    url: "SecondHeader/building.png",
  },
  {
    name: "Coworking-space",
    url: "SecondHeader/coworking.ae2d86ad.png",
  },
  {
    name: "Industrial Land",
    url: "SecondHeader/land_lease.7ccc6444.png",
  },
  {
    name: "Meeting Room",
    url: "SecondHeader/meeting-room.0b5c79ff.png",
  },
];

export function Header() {
  return (
    <div className="secondHeader">
      {type.map((obj) => (
        <>
          <Box className="job-type-box">
            <img src={obj.url} className="jobs-type-image" alt='Head' />
            <Typography className="jobs-type-title">{obj.name}</Typography>
          </Box>
        </>
      ))}
    </div>
  );
}

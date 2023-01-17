import * as React from "react";
import './Header.css'
import { Box,Typography,} from "@mui/material";
let type = [
  
  {
    name: "Commercial Shop",
    url: "Headerimage/commercial_space.cabcda3f.png",
  },
  {
    name: "Commercial Office",
    url: "Headerimage/coworking.ae2d86ad.png",
  },
  {
    name: "Commercial Land",
    url: "Headerimage/land_lease.7ccc6444.png",
  },
  {
    name: "Commercial Building",
    url: "Headerimage/download.png",
  },
  {
    name: "Industrial Building",
    url: "Headerimage/building.png",
  },
  {
    name: "Coworking-space",
    url: "Headerimage/coworking.ae2d86ad.png",
  },
  {
    name: "Industrial Land",
    url: "Headerimage/land_lease.7ccc6444.png",
  },
  {
    name: "Meeting Room",
    url: "Headerimage/meeting-room.0b5c79ff.png",
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

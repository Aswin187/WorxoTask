import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import React from "react";
import './propertyContainer.css'

const PropertyContainer = (props) => {
  const { list } = props;
  console.log(list);
  return (
    <div className='property' style={{ marginTop: "45px" }}>
      <Typography gutterBottom variant="h5" component="div">
        {list[0].propertyType.name}
      </Typography>
      <Stack direction="row" spacing={2}>
        {list.map((item, index) => (
          <Card key={index}>
            <CardMedia
              component="img"
              height="140"
              image={item.images[0]}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.details.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.location.city}{" "}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`RS ${item.details?.build_area?.rate || ""}${
                  item.details?.build_area?.rate || ""
                }`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Explore Now</Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </div>
  );
};
export default PropertyContainer;

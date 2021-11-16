import React from "react";
import { Grid } from "@mui/material";

const Doctor = (props) => {
  const { name, image } = props.doctor;
  return (
    <div>
      <Grid item xs={6} md={4}>
        <img
          sx={{ width: "200px", height: "200px" }}
          src={`data:image/png,base64,${image}`}
          alt=""
        />
        <h1>{name}</h1>
      </Grid>
    </div>
  );
};

export default Doctor;

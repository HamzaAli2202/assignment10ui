import { Grid, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <Grid sx={{ marginBottom: 3 }} container spacing={2}>
      <Grid item xs={3}>
        <Link to="/">
          <Button variant="contained" fullWidth color="secondary">
            oneplus
          </Button>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link to="/sam">
          <Button variant="contained" fullWidth color="secondary">
            samsung
          </Button>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link to="/red">
          <Button variant="contained" fullWidth color="secondary">
            redmi
          </Button>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link to="/vivo">
          <Button variant="contained" fullWidth color="secondary">
            vivo
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

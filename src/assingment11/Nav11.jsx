import React from "react";
import { navData } from "./navData";
import { Grid, Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

export const Nav11 = () => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Grid container spacing={2}>
          {navData.map((item) => (
            <Grid item xs={item.xs}>
              <Link to={item.path}>
                <Button variant="contained" fullWidth color="success">
                  {item.label}
                </Button>
              </Link>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

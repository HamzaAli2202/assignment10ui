import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent } from "@mui/material";

export const Dvis = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const result = await axios.get("http://localhost:1011/alldivs");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid align="center" item xs={2}>
          <Card sx={{ bgcolor: "yellowgreen" }}>
            <CardContent>
              <h1>Class : {item.name}</h1>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

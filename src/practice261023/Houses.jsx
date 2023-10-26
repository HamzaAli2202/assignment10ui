import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent } from "@mui/material";

export const Houses = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const result = await axios.get("http://localhost:1011/allhouses");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid align="center" item xs={2}>
          <Card sx={{ bgcolor: "yellowgreen", height: 200 }}>
            <CardContent>
              <h3>House : {item.name}</h3>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

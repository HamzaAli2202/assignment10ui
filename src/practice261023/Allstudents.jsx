import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent } from "@mui/material";

export const Allstudents = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const result = await axios.get("http://localhost:1011/allstudents");
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
              <h3>Name : {item.name}</h3>
              <h3>Class : {item.class}</h3>
              <h3>Div : {item.div}</h3>
              <h3>House : {item.house}</h3>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent } from "@mui/material";

export const Redmi = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:1016/redmi");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid align="center" item xs={3}>
          <Card sx={{ bgcolor: "lavender" }}>
            <CardContent>
              <h2>{item.model.toUpperCase()}</h2>
              <h3>{item.brand.toUpperCase()}</h3>
              <p>{item.description.slice(0, 25)}</p>
              <h4>Rs.{item.price}</h4>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

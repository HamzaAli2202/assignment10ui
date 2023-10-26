import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent } from "@mui/material";

export const Teachers = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const result = await axios.get("http://localhost:1017/tea");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={3}>
          <Card
            sx={{
              bgcolor: "orangered",
              boxShadow: "10px 10px 10px black",
              height: 200,
            }}
          >
            <CardContent>
              <h2>Name : {item.name}</h2>
              <h3>Age : {item.age}</h3>
              <h3>Gender : {item.gender}</h3>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

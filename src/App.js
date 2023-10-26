import React from "react";
import { Card, CardContent } from "@mui/material";
import { Landing } from "./components/Landing";
import { Landing11 } from "./assingment11/Landing11";

function App() {
  return (
    <Card>
      <CardContent>
        {/* <Landing /> */}
        <Landing11 />
      </CardContent>
    </Card>
  );
}

export default App;

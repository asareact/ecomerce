import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";
import * as React from "react";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState("");

  return (
    <Box sx={{ width: 300 }}>
      <BottomNavigation
        sx={{ backgroundColor: "#ffd54b" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      ></BottomNavigation>
    </Box>
  );
}

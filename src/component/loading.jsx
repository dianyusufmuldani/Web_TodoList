import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <div data-cy="loading">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <CircularProgress />
      </Box>
    </div>
  );
}

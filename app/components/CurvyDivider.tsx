import React from "react";
import { Box } from "@mui/material";

interface CurvyDividerParams {
  flip?: boolean;
  color?: string;
}

const CurvyDivider: React.FC<CurvyDividerParams> = ({
  flip = false,
  color = "#1c1c1c",
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
        transform: flip ? "scaleY(-1)" : "none"
      }}
    >
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "150px", width: "100%" }}
      >
        <path
          d="M0.00,49.98 C150.00,150.00 349.74,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{
            fill: color,
            stroke: "none",
          }}
        />
      </svg>
    </Box>
  );
};

export default CurvyDivider;

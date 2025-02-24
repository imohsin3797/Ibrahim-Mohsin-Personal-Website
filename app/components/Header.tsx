"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        color: "#000",  
        boxShadow: "4",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          IM
        </Typography>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/ibrahim-mohsin-16a1b8261/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          sx={{ color: "#000" }}
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://github.com/imohsin3797"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          sx={{ color: "#000" }}
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

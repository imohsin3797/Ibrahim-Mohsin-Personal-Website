"use client";

import React from "react";
import Image from "next/image";
import { Box, Grid, Card, Typography, CardActions, Button } from "@mui/material";

export default function HeroSection() {
  const buttonStyles = {
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "20px",
    px: 3,
    py: 1,
    fontWeight: "bold",
    ":hover": {
      backgroundColor: "#555",
    },
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 4,
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: 1200, margin: "0 auto" }}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: 300,
              height: 300,
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <Image
              src="/images/Ibrahim_Headshot.png"
              alt="Ibrahim Headshot"
              width={300}
              height={300}
              style={{
                objectFit: "cover",
                transform: "scale(1.3)",
                boxShadow: "3px",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "black",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Ibrahim Mohsin
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card
            elevation={6}
            sx={{
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 4,
              minHeight: 300,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                textAlign: "center",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  bottom: -50,
                  left: "7%",
                  width: "2px",
                  backgroundColor: "black",
                  margin: "auto",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  bottom: -50,
                  right: "7%",
                  width: "2px",
                  backgroundColor: "black",
                  margin: "auto",
                },
              }}
            >
              <Typography variant="h5" color="text.primary" gutterBottom fontWeight="bold">
                Morehead-Cain Scholar @ UNC Chapel-Hill
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" paragraph>
                Computer Science &amp; Business Administration | Philosophy, Politics, and Economics Minor
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" paragraph>
                Student | Full-Stack Developer | Entrepreneur
              </Typography>
            </Box>
            <CardActions
              sx={{
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
                mt: 2,
              }}
            >
              <Button sx={buttonStyles}>Bio</Button>
              <Button sx={buttonStyles}>Portfolio</Button>
              <Button sx={buttonStyles}>Blog</Button>
              <Button sx={buttonStyles}>Interests</Button>
              <Button sx={buttonStyles}>Contact</Button>
              <Button
                variant="contained"
                href="/Ibrahim_Mohsin_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={buttonStyles}
              >
                Resume
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

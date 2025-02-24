"use client";
import React from "react";
import { Card, CardMedia, CardContent, Box, Typography} from "@mui/material";

interface ExperienceCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  body: string;
  flip?: boolean;
}

export default function ExperienceCard({
  imageUrl,
  title,
  subtitle,
  body,
  flip = false,
}: ExperienceCardProps) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: flip ? "row-reverse" : "row",
        width: "90%",
        minHeight: 300,
        maxHeight: 300,
        boxShadow: 10,
        borderRadius: 5,
        overflow: "hidden",
        mt: 5,
        mb: 2,
        backgroundColor: "#fff",
        color: "black",
      }}
    >
      <Box
        sx={{
          flex: "0 0 40%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          src={imageUrl}
          alt="Organization Logo"
          sx={{
            width: "80%",
            height: "90%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "2px",
          height: "80%",
          backgroundColor: "#9e9e9e",
          alignSelf: "center",
        }}
      />

      <CardContent sx={{ flex: 1, p: 3 }}>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontFamily: "'Playfair Display', serif",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          gutterBottom
          sx={{ textAlign: "center", fontStyle: "italic" }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{ whiteSpace: "pre-line", lineHeight: "1.8" }}
        >
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}

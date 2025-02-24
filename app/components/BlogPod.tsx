"use client";
import React from "react";
import { Box, Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";
import { lighten} from "@mui/material/styles";

interface BlogPodParams {
  imageUrl: string;
  title: string;
  description: string;
  category: string;
  tagColor: string;
  linkUrl: string | null;
}

export default function BlogPod({
  imageUrl,
  title,
  description,
  category,
  tagColor,
  linkUrl,
}: BlogPodParams) {
  const lighterTextColor = lighten(tagColor, 0.7);

  return (
    <Card
      sx={{
        backgroundColor: "#2a2a2a",
        color: "#fff",
        borderRadius: 6,
        boxShadow: 6,
        position: "relative",
        overflow: "hidden",
        maxWidth: 400,
        height: 450,
        display: "flex",       
        flexDirection: "column",
        "&:hover": { boxShadow: 15 },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          src={imageUrl}
          alt="Blog Post"
          sx={{
            height: 225,
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            backgroundColor: tagColor,
            color: lighterTextColor,
            px: 2,
            py: 0.5,
            borderRadius: 5,
            fontSize: 14,
            fontWeight: "bold",
            opacity: 0.9
          }}
        >
          {category}
        </Box>
      </Box>
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            textAlign: "center",
            fontFamily: "'Playfair Display', serif",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9, textAlign: "center"}}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", p: 2, pt: 0 }}>
        <Button
          variant="contained"
          href={linkUrl || '#'}
          sx={{
            borderRadius: "20px",
            backgroundColor: "#444",
            color: "#fff",
            boxShadow: 4,
            "&:hover": {
              backgroundColor: tagColor,
              boxShadow: 10,
            },
          }}
        >
          Read
        </Button>
      </CardActions>
    </Card>
  );
}

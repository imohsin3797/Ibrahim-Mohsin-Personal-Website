"use client";
import React from "react";
import { Card, CardMedia, Box, Typography, Divider, TextField, Button } from "@mui/material";

export default function ContactMe() {
  return (
    <Card
      sx={{
        display: "flex",
        width: "85%",
        minHeight: 300,
        boxShadow: 15,
        borderRadius: 5,
        overflow: "hidden",
        mt: 5,
        mb: 5,
        backgroundColor: "#2a2a2a",
        color: "#fff",
      }}
    >
      <Box sx={{ flex: "0 0 40%", position: "relative" }}>
        <CardMedia
          component="img"
          src="/images/ContactMe.JPEG"
          alt="Contact"
          sx={{ height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ mb: 3, width: "100%" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#fff",
              fontFamily: "'Playfair Display', serif",
              mb: 5,
            }}
          >
            Let&apos;s Get In Touch 👋
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            School Email: imohsin@unc.edu
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Personal Email: ibrahimmohsin37970@gmail.com
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Phone: +1 (317) 614-5209
          </Typography>
          <Divider
            sx={{
              mx: "auto",
              width: "80%",
              borderColor: "grey.400",
              mb: 2,
            }}
          />
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontFamily: "'Playfair Display', serif",
              mb: 1,
            }}
          >
            Contact Me
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            maxWidth: 500,
            width: "100%",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Name"
            variant="outlined"
            required
            fullWidth
            sx={{
              backgroundColor: "#333",
              "& .MuiInputLabel-root": {color: "#fff"},
              "& .MuiInputBase-input": { color: "#fff" },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "#666" },
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: "#aaa" },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#ccc" },
            }}
          />
          <TextField
            label="Subject"
            variant="outlined"
            required
            fullWidth
            sx={{
              backgroundColor: "#333",
              "& .MuiInputLabel-root": {color: "#fff"},
              "& .MuiInputBase-input": { color: "#fff" },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: "#666" },
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: "#aaa" },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#ccc" },
            }}
          />
          <TextField
            label="Message"
            variant="outlined"
            required
            fullWidth
            multiline
            rows={4}
            sx={{
              backgroundColor: "#333",
              "& .MuiInputLabel-root": {color: "#fff"},
              "& .MuiInputBase-input": { color: "#fff" },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: "#666" },
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: "#aaa" },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#ccc" },
            }}
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              backgroundColor: "#444",
              color: "#fff",
              boxShadow: 4,
              "&:hover": { backgroundColor: "#1c1c1c", boxShadow: 10 },
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

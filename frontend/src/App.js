import React, { useEffect, useState, useCallback } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [bgColor, setBgColor] = useState("#f0f4ff");

  // Utility to get random pastel color
  const getRandomColor = () => {
    const colors = ["#f0f4ff", "#fff0f6", "#f0fff0", "#fffaf0", "#f0f0ff"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // fetchMessage function wrapped in useCallback
  const fetchMessage = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/messages"); // Backend URL
      const data = await res.json();
      setMessage(data.message);
      setBgColor(getRandomColor()); // Change card color
    } catch {
      setMessage("⚠️ Error connecting to backend!");
    } finally {
      setLoading(false);
    }
  }, []); 

  // Call fetchMessage on mount
  useEffect(() => {
    fetchMessage(); 
  }, [fetchMessage]);

  return (
    <Container
      maxWidth="sm"
      sx={{ marginTop: "4rem", textAlign: "center", fontFamily: "'Roboto', sans-serif" }}
    >
      <Typography variant="h3" gutterBottom color="primary" sx={{ fontWeight: 700 }}>
        🎉 Random Messages
      </Typography>

      <Card
        elevation={8}
        sx={{
          marginTop: "2rem",
          padding: "2rem",
          borderRadius: 3,
          backgroundColor: bgColor,
          transition: "all 0.5s ease",
        }}
      >
        <CardContent>
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress color="primary" />
            </Box>
          ) : (
            <Typography variant="h5" sx={{ fontSize: "1.8rem" }}>
              {message}
            </Typography>
          )}
        </CardContent>
      </Card>

      <Button
        variant="contained"
        color="primary"
        startIcon={<RefreshIcon />}
        sx={{
          marginTop: "2rem",
          borderRadius: 2,
          paddingX: 3,
          paddingY: 1.5,
          fontSize: "1rem",
        }}
        onClick={fetchMessage}
      >
        Refresh Message
      </Button>
    </Container>
  );
}

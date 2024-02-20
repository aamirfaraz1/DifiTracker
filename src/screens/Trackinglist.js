import { ExpandMore } from "@mui/icons-material";
import { Paper, Box, Typography, Skeleton, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";

function Trackinglist() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        // Loader or skeleton
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          {/* Big skeleton */}
          <Skeleton
            variant="rounded"
            animation="wave"
            width={500}
            height={15}
          />
          {/* Loading text */}
          <Typography variant="subtitle1" sx={{ marginTop: "15px" }}>
            Fetching details
          </Typography>
        </Box>
      ) : (
        // Content after loading
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div>
            <Paper
              elevation={8}
              square={false}
              sx={{
                width: "1000px",
                height: "20px",
                padding: 3,
                borderRadius: "5px",
                marginTop: "8px",
                position:"relative"
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "12px" }}
              >
                Cluster Architecture
              </Typography>
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "5px",
                  transform: "translateY(-50%)",
                }}
                color="black" // Setting the color to black
              >
                <ExpandMore />
              </IconButton>
            </Paper>
          </div>
          <div>
            <Paper
              elevation={8}
              square={false}
              sx={{
                width: "1000px",
                height: "20px",
                padding: 3,
                borderRadius: "5px",
                marginTop: "8px",
                position:"relative"
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "12px" }}
              >
                Workloads & Scheduling
              </Typography>
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "5px",
                  transform: "translateY(-50%)",
                }}
                color="black" // Setting the color to black
              >
                <ExpandMore />
              </IconButton>
            </Paper>
          </div>
          <div>
            <Paper
              elevation={8}
              square={false}
              sx={{
                width: "1000px",
                height: "20px",
                padding: 3,
                borderRadius: "5px",
                marginTop: "8px",
                position:"relative"
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "12px" }}
              >
                Services & Networking
              </Typography>
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "5px",
                  transform: "translateY(-50%)",
                }}
                color="black" // Setting the color to black
              >
                <ExpandMore />
              </IconButton>
            </Paper>
          </div>
          <div>
            <Paper
              elevation={8}
              square={false}
              sx={{
                width: "1000px",
                height: "20px",
                padding: 3,
                borderRadius: "5px",
                marginTop: "8px",
                position:"relative"
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "12px" }}
              >
                Storage
              </Typography>
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "5px",
                  transform: "translateY(-50%)",
                }}
                color="black" // Setting the color to black
              >
                <ExpandMore />
              </IconButton>
            </Paper>
          </div>
          <div>
            <Paper
              elevation={8}
              square={false}
              sx={{
                width: "1000px",
                height: "20px",
                padding: 3,
                borderRadius: "5px",
                marginTop: "8px",
                position: "relative",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "12px" }}
              >
                Troubleshooting
              </Typography>
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "5px",
                  transform: "translateY(-50%)",
                }}
                color="black" // Setting the color to black
              >
                <ExpandMore />
              </IconButton>
            </Paper>
          </div>
        </Box>
      )}
    </>
  );
}

export default Trackinglist;

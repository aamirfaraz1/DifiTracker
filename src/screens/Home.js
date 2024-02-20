import React from "react";
import { Paper, Box, AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "black" }}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: "initial", fontWeight: "bold" }}>
              DiFi Tracker
            </Typography>
            <Button color="inherit" sx={{textTransform: "none"}}>Team Stats</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <Link to="/trackinglist" style={{ textDecoration: "none" }}>
          
            <Paper elevation={8} square={false} sx={{ width: "100%", height: "100px", padding: 3, borderRadius: "15%" }}>

              <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center", fontSize: "18px" }}>
                CKA <br /> Certification
              </Typography>

            </Paper>
          
          </Link>
        </div>
      </Box>

    </>
  );
}

export default Home;

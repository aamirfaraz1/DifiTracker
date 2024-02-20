import React from "react";
import { Paper, Box, AppBar,Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: "black"}}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily:"initial", fontWeight:"bold" }}>
            DiFi Tracker
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

   <Link to="/trackinglist" underline="none">
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginRight:"70%"
      }}
    >
      <Paper elevation={8} square={false} sx={{ width: "30%", padding: 3, height:"15%", borderRadius:"20%" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center", fontSize: "18px" }}>
            CKA <br /> Certification
          </Typography>
      </Paper>
    </Box>
    </Link>
    
    </>
  );
}


export default Home;

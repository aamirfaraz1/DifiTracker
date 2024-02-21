import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Paper, Box, Typography, Skeleton, IconButton, AppBar, Toolbar, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

function Trackinglist() {
  const [isLoading, setIsLoading] = useState(true);
  let [isExpanded1, setIsExpanded1] = useState(false);
  let [isExpanded2, setIsExpanded2] = useState(false);
  let [isExpanded3, setIsExpanded3] = useState(false);
  let [isExpanded4, setIsExpanded4] = useState(false);
  let [isExpanded5, setIsExpanded5] = useState(false);

  const [openForm, setOpenForm] = React.useState(false);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleClose = () => {
    setOpenForm(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleExpandClick1 = () => {
    setIsExpanded1(!isExpanded1);
    setIsExpanded2(false);
    setIsExpanded3(false);
    setIsExpanded4(false);
    setIsExpanded5(false);
  };

  const handleExpandClick2 = () => {
    setIsExpanded2(!isExpanded2);
    setIsExpanded1(false);
    setIsExpanded3(false);
    setIsExpanded4(false);
    setIsExpanded5(false);
  };

  const handleExpandClick3 = () => {
    setIsExpanded3(!isExpanded3);
    setIsExpanded1(false);
    setIsExpanded2(false);
    setIsExpanded4(false);
    setIsExpanded5(false);
  };

  const handleExpandClick4 = () => {
    setIsExpanded4(!isExpanded4);
    setIsExpanded1(false);
    setIsExpanded2(false);
    setIsExpanded3(false);
    setIsExpanded5(false);
  };

  const handleExpandClick5 = () => {
    setIsExpanded5(!isExpanded5);
    setIsExpanded1(false);
    setIsExpanded2(false);
    setIsExpanded3(false);
    setIsExpanded4(false);
  };

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
            position:"relative"
          }}
        >
          <Button variant="contained" onClick={handleOpenForm} sx={{ textTransform: "none", position: "absolute", top: "20px", right: "17px", color:"white", backgroundColor:"black", "&:hover": {backgroundColor:"black"}}}>Add Task</Button>
          <Dialog
  open={openForm}
  onClose={handleClose}
  PaperProps={{
    component: 'form',
    onSubmit: (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const formJson = Object.fromEntries(formData.entries());
      const taskName = formJson.taskName;
      const assigneeName = formJson.assigneeName;
      console.log(taskName, assigneeName);
      handleClose();
      window.location.reload();
    },
  }}
>
  <DialogTitle>Add Task</DialogTitle>
  <DialogContent>
    <TextField
      autoFocus
      required
      margin="dense"
      id="taskName"
      name="taskName"
      label="Task Name"
      fullWidth
      variant="standard"
    />
    <TextField
      required
      margin="dense"
      id="assigneeName"
      name="assigneeName"
      label="Assignees"
      fullWidth
      variant="standard"
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button type="submit">Create</Button>
  </DialogActions>
</Dialog>

          <div>
            <Paper
              elevation={8}
              square={false}
              sx={{
                width: "1000px",
                padding: 3,
                borderRadius: "5px",
                marginTop: "8px",
                position:"relative",
                transition: "height 0.5s ease-in-out", // Smooth transition for height change
                overflow: "hidden",
                height: isExpanded1 ? "auto" : "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "12px" }}
              >
                Cluster Architecture
              </Typography>
              <IconButton
              onClick={handleExpandClick1}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "5px",
                  transform: "translateY(-50%)",
                }}
                color="black" // Setting the color to black
              >
                {isExpanded1 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
              {isExpanded1 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" sx={{fontSize:"14px"}}>Assignees: Amal, Husna</Typography>
              <br />
              <Typography variant="body1" sx={{fontSize:"14px"}}>Task Progress: 50%</Typography>
              <br />
              <Typography variant="body1" sx={{fontSize:"14px"}}>Task Status: Incomplete</Typography>
              <br />
            </Box>
          )}
            </Paper>
          </div>
          <div>
            <Paper
              elevation={8}
              square={false}
              sx={{
                width: "1000px",
                padding: 3,
                borderRadius: "5px",
                marginTop: "8px",
                position:"relative",
                transition: "height 0.5s ease-in-out", // Smooth transition for height change
                overflow: "hidden",
                height: isExpanded2 ? "auto" : "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "12px" }}
              >
                Workloads & Scheduling
              </Typography>
              <IconButton
              onClick={handleExpandClick2}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "5px",
                  transform: "translateY(-50%)",
                }}
                color="black" // Setting the color to black
              >
                {isExpanded2 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
              {isExpanded2 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" sx={{fontSize:"14px"}}>Assignees: Amal, Husna, Arya</Typography>
              <br />
              <Typography variant="body1" sx={{fontSize:"14px"}}>Task Progress: 100%</Typography>
              <br />
              <Typography variant="body1" sx={{fontSize:"14px"}}>Task Status: Complete</Typography>
              <br />
            </Box>
          )}
            </Paper>
          </div>
          <div>
            <Paper
              elevation={8}
              square={false}
              sx={{
                width: "1000px",
                padding: 3,
                borderRadius: "5px",
                marginTop: "8px",
                position:"relative",
                transition: "height 0.5s ease-in-out", // Smooth transition for height change
                overflow: "hidden",
                height: isExpanded3 ? "auto" : "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "12px" }}
              >
                Services & Networking
              </Typography>
              <IconButton
              onClick={handleExpandClick3}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "5px",
                  transform: "translateY(-50%)",
                }}
                color="black" // Setting the color to black
              >
                {isExpanded3 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
              {isExpanded3 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" sx={{fontSize:"14px"}}>Assignees: Amal, Arya, Husna, Vishnu</Typography>
              <br />
              <Typography variant="body1" sx={{fontSize:"14px"}}>Task Progress: 100%</Typography>
              <br />
              <Typography variant="body1" sx={{fontSize:"14px"}}>Task Status: Complete</Typography>
              <br />
            </Box>
          )}
            </Paper>
          </div>
          <div>
            <Paper
              elevation={8}
              square={false}
              sx={{
                width: "1000px",
                padding: 3,
                borderRadius: "5px",
                marginTop: "8px",
                position:"relative",
                transition: "height 0.5s ease-in-out", // Smooth transition for height change
                overflow: "hidden",
                height: isExpanded4 ? "auto" : "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "12px" }}
              >
                Storage
              </Typography>
              <IconButton
                onClick={handleExpandClick4}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "5px",
                  transform: "translateY(-50%)",
                }}
                color="black" // Setting the color to black
              >
               {isExpanded4 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
              {isExpanded4 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" sx={{fontSize:"14px"}}>Assignees: Amal, Arya, Husna, Vishnu</Typography>
              <br />
              <Typography variant="body1" sx={{fontSize:"14px"}}>Task Progress: 100%</Typography>
              <br />
              <Typography variant="body1" sx={{fontSize:"14px"}}>Task Status: Complete</Typography>
              <br />
            </Box>
          )}
            </Paper>
          </div>
          <div>
            <Paper
              elevation={8}
              square={false}
              sx={{
                width: "1000px",
                padding: 3,
                borderRadius: "5px",
                marginTop: "8px",
                position: "relative",
                transition: "height 0.5s ease-in-out", // Smooth transition for height change
                overflow: "hidden",
                height: isExpanded5 ? "auto" : "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "12px" }}
              >
                Troubleshooting
              </Typography>
              <IconButton
                onClick={handleExpandClick5}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "5px",
                  transform: "translateY(-50%)",
                }}
                color="black" // Setting the color to black
              >
                {isExpanded5 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
              {isExpanded5 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" sx={{fontSize:"14px"}}>Assignees: Amal, Arya, Husna, Vishnu</Typography>
              <br />
              <Typography variant="body1" sx={{fontSize:"14px"}}>Task Progress: 25%</Typography>
              <br />
              <Typography variant="body1" sx={{fontSize:"14px"}}>Task Status: Incomplete</Typography>
              <br />
            </Box>
          )}
            </Paper>
          </div>
        </Box>
      )}
    </>
  );
}

export default Trackinglist;

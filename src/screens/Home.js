import React from "react";
import { Paper, Box, AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

function Home() {

  const [openForm, setOpenForm] = React.useState(false);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleClose = () => {
    setOpenForm(false);
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          position: "relative"
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
      const projectName = formJson.projectName;
      console.log(projectName);
      handleClose();
      window.location.reload();
    },
  }}
>
  <DialogTitle>Add Project</DialogTitle>
  <DialogContent>
    <TextField
      autoFocus
      required
      margin="dense"
      id="projectName"
      name="projectName"
      label="Project Name"
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

import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    marginLeft: "10px",
    marginRight: "10px",
    maxHeight: "36px",
    whiteSpace: "nowrap",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit" variant="outlined" className={classes.btn}>
              List of notes
            </Button>
          </Link>
          <Link to="/create" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit" variant="outlined" className={classes.btn}>
              Create a note
            </Button>
          </Link>
          <Link to="/edit" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit" variant="outlined" className={classes.btn}>
              Edit a note
            </Button>
          </Link>
          <Link to="/read" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit" variant="outlined" className={classes.btn}>
              Read a note
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

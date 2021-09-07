import React from "react";

import AppBar from "@material-ui/core/AppBar";

import { Button } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "5rem",
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar style={{ color: "white" }}>
          <div className="Links" style={{ color: "white", marginLeft: "5rem" }}>
            <Button className={classes.menuButton}>
              <Link to="/characters">Characters</Link>
            </Button>
            <Button className={classes.menuButton}>
              <Link to="/episodes">Episodes</Link>
            </Button>
            <Button className={classes.menuButton}>
              <Link to="/locations">Locations</Link>
            </Button>
            <Button className={classes.menuButton}>
              <Link to="/watchlist">WatchList</Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

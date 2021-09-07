import "./App.css";

import Characters from "./components/characters/Characters";
import Episodes from "./components/episodes/Episodes";
import SelectForm from "./components/Select";
import AppBar from "@material-ui/core/AppBar";
import WatchList from "./components/watchlist/WatchList";
import { Button } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Locations from "./components/locations/Locations";
import { makeStyles } from "@material-ui/core";
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
function App() {
  const classes = useStyles();
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Router>
        <div className="App">
          <AppBar className={classes.root}>
            <Toolbar style={{ color: "white" }}>
              <div
                className="Links"
                style={{ color: "white", marginLeft: "5rem" }}
              >
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

          <Switch>
            <Route exact path="/">
              <Redirect to="/characters" />
            </Route>
            <Route exact path="/characters">
              <Characters />
            </Route>
            <Route exact path="/episodes">
              <Episodes />
            </Route>
            <Route exact path="/locations">
              <Locations />
            </Route>
            <Route exact path="/watchlist">
              <WatchList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

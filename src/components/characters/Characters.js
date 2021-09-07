import React, { useEffect, useState } from "react";
import Character from "./Character";
import Pagination from "@material-ui/lab/Pagination";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { GridItem } from "@material-ui/core/Grid";
import SelectForm from "../Select";
export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [charId, setCharId] = useState([]);
  const [character, setCharacter] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [open, setOpen] = useState(false);
  const [species, setSpecies] = React.useState("");
  const [statuslife, setStatusLife] = React.useState("");
  const [gender, setGender] = useState("");
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  const handleChangeSpecies = (event) => {
    setSpecies(event.target.value);
  };
  const handleChangeStatuLife = (event) => {
    setStatusLife(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleOpen = (id) => () => {
    setOpen(true);
    setCharId(id);
  };
  function handleClose() {
    setOpen(false);
  }

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      });
  }, [page]);

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?species=${species}&status=${statuslife}&gender=${gender}&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredCharacters(data.results);
        setInfo(data.info);
      });
  }, [statuslife, species, gender, page]);
  console.log(filteredCharacters);

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  console.log(species, statuslife);
  return (
    <div
      style={{
        display: "flex",
        marginTop: "4rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <SelectForm
          param={"species"}
          st={species}
          handleChange={handleChangeSpecies}
          items={["human", "alien", "humanoid"]}
        />
        <SelectForm
          param={"status"}
          st={statuslife}
          handleChange={handleChangeStatuLife}
          items={["alive", "dead", "unknown"]}
        />
        <SelectForm
          param={"gender"}
          st={gender}
          handleChange={handleChangeGender}
          items={["male", "female", "unknown"]}
        />
      </div>

      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        container
      >
        {filteredCharacters.map((character) => {
          return (
            <Grid item sm={4} xs={6} lg={2}>
              <Character
                handleOpen={handleOpen}
                character={character}
                key={character.id}
              />
            </Grid>
          );
        })}
      </Grid>
      <Pagination
        count={info.pages}
        color="secondary"
        page={page}
        onChange={(e) => handleChange(parseInt(e.target.textContent))}
      />
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <h1>{charId.name}</h1>
          <h2>Species: {charId.species}</h2>
          <h3>Gender: {charId.gender}</h3>
          <h3>Status: {charId.status}</h3>
        </div>
      </Modal>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TextField } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/?name=${value}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.results);
        setInfo(data.info);
      });
  }, [page, value]);

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  const classes = useStyles();

  return (
    <div
      style={{
        marginTop: "4rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Name"
      />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Air Date</TableCell>
              <TableCell align="right">Episode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {episodes.map((e) => (
              <TableRow key={e.name}>
                <TableCell component="th" scope="row">
                  {e.name}
                </TableCell>
                <TableCell align="right">{e.air_date}</TableCell>
                <TableCell align="right">{e.episode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={info.pages}
        color="secondary"
        page={page}
        onChange={(e) => handleChange(parseInt(e.target.textContent))}
      />
    </div>
  );
}

export default Episodes;

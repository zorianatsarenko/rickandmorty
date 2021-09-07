import React, { useState, useEffect } from "react";
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
import SelectForm from "../Select";
function Locations() {
  const [info, setInfo] = useState([]);
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [dimension, setDimension] = useState("");

  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const handleChangeDimension = (event) => {
    setDimension(event.target.value);
  };
  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/location/?name=${value}&type=${type}&dimension=${dimension}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLocations(data.results);
        setInfo(data.info);
      });
  }, [page, value, type, dimension]);

  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

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
      <div style={{ display: "flex" }}>
        <TextField
          label="Dimension"
          value={dimension}
          onChange={(e) => setDimension(e.target.value)}
        />

        <TextField
          style={{ marginLeft: "3rem" }}
          label="Name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          <SelectForm
            param={"type"}
            st={type}
            handleChange={handleChangeType}
            items={[
              "planet",
              "cluster",
              "space station",
              "microverse",
              "dream",
              "spacecraft",
              "mount",
              "woods	",
            ]}
          />
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Dimensions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locations.map((e) => (
              <TableRow key={e.name}>
                <TableCell component="th" scope="row">
                  {e.name}
                </TableCell>
                <TableCell align="right">{e.type}</TableCell>
                <TableCell align="right">{e.dimension}</TableCell>
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
      ></Pagination>
    </div>
  );
}

export default Locations;

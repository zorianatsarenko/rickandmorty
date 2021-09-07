import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
function SelectForm({handleChange, species, param, st, items, statuslife}) {
    const classes = useStyles();
   
  
    
    return (
        <div>
                  <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{param}</InputLabel>
        <Select
        
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={param}
         
          onChange={handleChange}
        >
            {items.map((i) =>  <MenuItem value={i}>{i}</MenuItem>)}
         
      
        
        </Select>
      </FormControl>
        </div>
    )
}

export default SelectForm;

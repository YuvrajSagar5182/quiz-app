import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DropDown = (props) => {
  const [item, setItem] = React.useState("");
  const { selectQty } = props;

  const handleChange = (event) => {
    setItem(event.target.value);
    // console.log(event.target.value);
    props.setQty(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{selectQty}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={item}
          label={selectQty}
          onChange={handleChange}>
          <MenuItem value={props.firstOptionValue}>
            {props.firstOption}
          </MenuItem>
          <MenuItem value={props.secondOptionValue}>
            {props.secondOption}
          </MenuItem>
          <MenuItem value={props.thirdOptionValue}>
            {props.thirdOption}
          </MenuItem>
          <MenuItem value={props.fourthOptionValue}>
            {props.fourthOption}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDown;

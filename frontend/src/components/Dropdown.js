import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120,backgroundColor:'#8A99A840' }} className="">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Filter"
          onChange={handleChange}
        >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
          <MenuItem value={10}>Posts</MenuItem>
          <MenuItem value={20}>Projects</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          National University of Singapore
        </Typography>
        <Tabs value={value} onChange={handleChange} textColor="inherit">
          <Tab label="Home" />
          <Tab label="Admissions" component={Link} to="/admissions" />
          <Tab label="Fees" />
          <Tab label="Societies and Clubs" />
          <Tab label="Accommodations" component={Link} to="/accommodations" />
          <Tab label="Placements" />
          <Tab label="Reviews" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

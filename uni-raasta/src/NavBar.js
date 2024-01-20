import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tabs, Tab, Avatar } from '@mui/material';

const NavBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <img
          alt="NUS Logo"
          src={'/pictures/nus/nus.png'}
          style={{ height: '50px', width: '100px' }}
        />
        <Tabs value={value} onChange={handleChange} textColor="inherit">
          <Tab label="Admissions" component={Link} to="/admissions" />
          <Tab label="Fees" component={Link} to="/fees" />
          <Tab label="Societies and Clubs" component={Link} to="/societies" />
          <Tab label="Accommodations" component={Link} to="/accommodations" />
          <Tab label="Placements" component={Link} to="/placements" />
          <Tab label="FAQ" component={Link} to="/faq" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

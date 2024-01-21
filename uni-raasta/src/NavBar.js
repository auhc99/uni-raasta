import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tabs, Tab, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
  const [value, setValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    // Check if the search query includes any of the tab names
    const tabNames = ['admissions', 'fees', 'societies', 'accommodations', 'placements', 'faq'];

    for (const tabName of tabNames) {
      if (lowerCaseQuery.includes(tabName)) {
        // If a match is found, navigate to the corresponding tab
        navigate(`/${tabName}`);
        return; // Stop searching after the first match
      }
      navigate('/admissions')
  }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <img alt="NUS Logo" src={'/pictures/nus/nus.png'} style={{ height: '50px', width: '100px' }} />
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

        {/* Search bar */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <InputBase
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ background: 'white', marginRight: '8px', borderRadius: '4px', padding: '4px', width: '300px' }}
          />
          <IconButton onClick={handleSearch} color="inherit">
            <SearchIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

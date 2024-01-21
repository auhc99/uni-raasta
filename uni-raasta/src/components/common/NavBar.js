import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Tabs,
  Tab,
  InputBase,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
  const [value, setValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleKeyDown = event => {
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
      navigate('/admissions');
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <img
          alt="NUS Logo"
          src={'/pictures/nus/nus.png'}
          style={{ height: '50px', width: '100px', marginRight: 'auto' }}
        />
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          <Tabs value={value} onChange={handleChange} textColor="inherit">
            <Tab label="Admissions" component={Link} to="/admissions" />
            <Tab label="Fees" component={Link} to="/fees" />
            <Tab label="Societies and Clubs" component={Link} to="/societies" />
            <Tab label="Accommodations" component={Link} to="/accommodations" />
            <Tab label="Placements" component={Link} to="/placements" />
            <Tab label="FAQ" component={Link} to="/faq" />
          </Tabs>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
          <InputBase
            placeholder="Search..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ background: 'white', borderRadius: '4px', padding: '4px' }}
          />
          <IconButton onClick={handleSearch} color="inherit">
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

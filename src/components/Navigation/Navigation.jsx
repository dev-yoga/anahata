import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Switch, Menu, MenuItem, FormControlLabel } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './Navigation.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navigation({ toggleMode }) {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const toggleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function navigate(to) {
    history.push(to);
  }

  return (
    <AppBar color="primary">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleMenu}>
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
          <MenuItem onClick={() => navigate('/')}>Home</MenuItem>
          <MenuItem onClick={() => navigate('/signin')}>Sign In</MenuItem>
          <MenuItem onClick={() => navigate('/signout')}>Sign Out</MenuItem>
        </Menu>
        <Typography variant="h6" className={classes.title}>
          Flow
        </Typography>
        <FormControlLabel
          control={(<Switch onChange={toggleMode} inputProps={{ 'aria-label': 'secondary checkbox' }}/>)} label="Dark Mode">
        </FormControlLabel>
      </Toolbar>
    </AppBar>
  );
}

Navigation.propTypes = {
  toggleMode: PropTypes.func.isRequired
};

export default Navigation;

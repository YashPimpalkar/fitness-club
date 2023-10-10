import * as React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu, Avatar, Button, Tooltip, MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo.png'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';



function ResponsiveAppBar() {

  const user=JSON.parse(localStorage.getItem('user'));
  const navigate =useNavigate();
  const handleLogout =async ()=>{
      try {
          await signOut(auth);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          navigate("login");
      } catch (error) {
          console.error(error)
      }
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpenNavMenu}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <a href="#exercises">Exercises</a>
          </MenuItem>
          <MenuItem>
            <Link to="/pricing">Pricing</Link>
          </MenuItem>
          <MenuItem>
            {user && user.email}
          </MenuItem>
          <MenuItem>
          <Avatar 
            src={user.photoURL} alt="profile" />
          </MenuItem>
          <MenuItem>
            <button onClick={handleLogout} className="logout-btn">LogOut</button>
          </MenuItem>
        </Menu>

        {/* This is your logo from the Stack component */}
        <Link to="/">
          <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 0 0px 0px' }} />
        </Link>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
           Fitness-Club
        </Typography>

        {/* Here you can continue with other parts of the AppBar, like user icons, etc. */}
        <Avatar  src={user.photoURL} alt="profile"  />

      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;

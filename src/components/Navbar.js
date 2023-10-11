import * as React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu, Avatar, Button, Tooltip, MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

function ResponsiveAppBar() {

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = async () => {
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
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">

      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpenNavMenu}  >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
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
          {/* ... other menu items ... */}
        
          <MenuItem >
            
              <Box
                component={Link}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  '&:hover': {
                    color: 'red',
                  }
                }}
              >
                Home
              </Box>
          </MenuItem>
          <MenuItem>
            <Box
              component="a"
              href="#exercises"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                '&:hover': {
                  color: 'red',
                }
              }}
            >
              Exercises
            </Box>
          </MenuItem>
          <MenuItem>
            <Box
              component={Link}
              to="/pricing"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                '&:hover': {
                  color: 'red',
                }
              }}
            >
              Pricing
            </Box>
          
        </MenuItem>
       
      </Menu>

      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 0 0px 0px' }} />
      </Link>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Fitness-Club
      </Typography>

      <Tooltip title="User Account">
        <IconButton onClick={handleOpenUserMenu} color="inherit">
          <Avatar src={user.photoURL} alt="profile" />
        </IconButton>
      </Tooltip>

      <Menu
        id="menu-user"
        anchorEl={anchorElUser}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem>
          {user && user.email}
        </MenuItem>
        <MenuItem>
          <Box
            component={Button}
            onClick={handleLogout}
            className="logout-btn"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': {
                color: 'red',
              }
            }}
          >
            Logout
          </Box>
        </MenuItem>
      </Menu>
    </Toolbar>
    </AppBar >
  );
}

export default ResponsiveAppBar;

/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Link from 'next/link';
import { Avatar } from '@mui/material';
import { Image } from 'mui-image';
import { useRouter } from 'next/router';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { signOut } from '../../utils/data/api/auth';
import { useAuth } from '../../utils/context/authContext';
import { useCity } from '../../utils/context/cityContext';
import SearchBar from './SearchBar';
import { useRestaurant } from '../../utils/context/restaurantContext';

export default function MenuAppBar() {
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user } = useAuth();
  const router = useRouter();
  const { city, setCity } = useCity();
  const { restaurants } = useRestaurant();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signMeOut = () => {
    signOut();
    router.push('/');
  };

  const cityHandleChange = (e) => {
    setCity(e.target.value);
    router.push('/');
  };

  const searchHandleChange = (e, v) => {
    if (v) {
      router.push(`/restaurants/${v.id}`);
    }
  };

  return (
    <div className="nav-container">
      <Box sx={{ display: 'flex' }}>
        <AppBar position="static">
          <Toolbar className="navbar">
            <Link href="/" passHref>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 5 }}
              >
                <Image src="/images/navlogo.png" style={{ height: 50, width: 50 }} />
              </IconButton>
            </Link>
            <FormControl style={{ width: 250 }}>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                label="city"
                onChange={cityHandleChange}
              >
                <MenuItem value="Nashville">Nashville</MenuItem>
                <MenuItem value="New York">New York</MenuItem>
                <MenuItem value="Los Angeles">Los Angeles</MenuItem>
              </Select>
            </FormControl>
            <SearchBar restaurants={restaurants} handleChange={searchHandleChange} />
            {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar alt={user.firstName} src={user.profileImageUrl} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem className="signOut-btn" onClick={signMeOut}>Sign Out</MenuItem>
                <MenuItem
                  className="my-account-btn"
                  onClick={() => {
                    setAnchorEl(null);
                    router.push(`/user/${user.id}`);
                  }}
                >My Account
                </MenuItem>
                {
                  user.adminRestaurant ? (
                    <MenuItem
                      className="restaurant-account-btn"
                      onClick={() => {
                        setAnchorEl(null);
                        router.push(`/restaurants/account/${user.id}`);
                      }}
                    >Restaurant Account
                    </MenuItem>
                  ) : <div />
                }
              </Menu>
            </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>

  );
}

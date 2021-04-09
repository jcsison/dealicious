import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Typography
} from '@material-ui/core';

export const NavBar = () => {
  const classes = useStyles();
  const router = useRouter();

  const [menuElement, setMenuElement] = React.useState<null | HTMLElement>(
    null
  );

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuElement(event.currentTarget);
  };

  const handleClose = () => {
    setMenuElement(null);
  };

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <IconButton onClick={handleMenuClick} edge="start">
            <MenuIcon />
          </IconButton>
          <Menu
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            anchorEl={menuElement}
            open={Boolean(menuElement)}
            onClose={handleClose}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem onClick={() => router.push('/dashboard')}>
              Dashboard
            </MenuItem>
            <MenuItem onClick={() => router.push('/favorites')}>
              Favorites
            </MenuItem>
            <MenuItem onClick={() => router.push('/settings')}>
              Settings
            </MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
          <Typography variant="h6">NavBar</Typography>
        </Box>
        {/*router.pathname === '/favorites' ? (
          <Button onClick={() => router.push('/dashboard')} variant="contained">
            Go To Dashboard
          </Button>
        ) : (
          <Button onClick={() => router.push('/favorites')} variant="contained">
            Go To Favorites
          </Button>
        )*/}
      </Toolbar>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  main: {},
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 7
  }
}));

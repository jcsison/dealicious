import MenuIcon from '@material-ui/icons/Menu';
import React, { MouseEventHandler } from 'react';
import { useRouter } from 'next/router';
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Typography
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUserAction } from '../../redux/data/data-actions';
import { setSuccessAction } from '../../redux/display/display-actions';
import { RootState } from '../../redux/store';

export const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const [drawerState, setDrawerState] = React.useState(false);

  const [userMenuAnchor, setUserMenuAnchor] = React.useState(null);

  const currentUser = useSelector(
    (state: RootState) => state.DATA_REDUCER.currentUser?.first_name
  );

  const handleUserMenuClick = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(() => null);
  };

  console.log(userMenuAnchor);

  const handleLogout = () => {
    dispatch(setCurrentUserAction(null));
    dispatch(setSuccessAction('userSuccess', false));
    router.push('/login');
  };

  const toggleDrawer = (open: boolean) => {
    setDrawerState(open);
  };

  return (
    <>
      <Menu
        id="simple-menu"
        anchorEl={userMenuAnchor}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        keepMounted
        open={Boolean(userMenuAnchor)}
        onClose={handleUserMenuClose}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={() => router.push('/settings')}>Settings</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      <Toolbar className={classes.toolbar}>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <IconButton onClick={() => toggleDrawer(true)} edge="start">
              <MenuIcon />
            </IconButton>
          </Box>
          <Box pr={2.5}>
            <Box
              onClick={handleUserMenuClick}
              display="flex"
              alignItems="center"
            >
              <Box pr={1.5}>
                <Avatar></Avatar>
              </Box>
              <Typography variant="h6">Hello, {currentUser}</Typography>
            </Box>
          </Box>
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
      <Drawer
        anchor="left"
        open={drawerState}
        onClose={() => toggleDrawer(false)}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={() => toggleDrawer(false)}
        >
          <List>
            <ListItem
              button
              key="Dashboard"
              onClick={() => router.push('/dashboard')}
            >
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem
              button
              key="Favorites"
              onClick={() => router.push('/favorite')}
            >
              <ListItemText primary="Favorites" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  main: {},
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 7
  },
  list: {
    width: 250
  }
}));

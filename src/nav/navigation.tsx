import React, {useState} from "react";
import {AppBar, IconButton, SwipeableDrawer, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {Drawer} from "./drawer";
import {ReduxButton} from "../redux/components/button";
import {useStyles} from "../theme";


export const Navigation = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (_open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab')
    ) {
      return;
    }
    setOpen(_open);
  };

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(!open)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Ranker
          </Typography>
          <ReduxButton/>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)} open={open}>
        <Drawer toggle={toggleDrawer}/>
      </SwipeableDrawer>
    </div>
  );
};

export default Navigation;
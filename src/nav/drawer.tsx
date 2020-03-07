import React from 'react';
import {Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import GamesIcon from '@material-ui/icons/Games';
import LabelIcon from '@material-ui/icons/Label';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {AdminComponent, ProtectedComponent, WitnessComponent} from "../redux/components/component";
import {useStyles} from "../theme";


export const Drawer = (props: {toggle: Function}) => {
  const classes = useStyles();
  return (
    <div role='presentation' onClick={props.toggle(false)} onKeyDown={props.toggle(false)} className={classes.list}>
      <List>
        <ListItem button component='a' href='/'>
          <ListItemIcon><HomeIcon/></ListItemIcon>
          <ListItemText primary='Home'/>
        </ListItem>
        <ListItem button component='a' href='/games'>
          <ListItemIcon><GamesIcon/></ListItemIcon>
          <ListItemText primary='Games'/>
        </ListItem>
        <ListItem button component='a' href='/seasons'>
          <ListItemIcon><LabelIcon/></ListItemIcon>
          <ListItemText primary='Seasons'/>
        </ListItem>
        <ListItem button component='a' href='/matches'>
          <ListItemIcon><PlayArrowIcon/></ListItemIcon>
          <ListItemText primary='Matches'/>
        </ListItem>
        <ListItem button component='a' href='/users'>
          <ListItemIcon><AccountCircleIcon/></ListItemIcon>
          <ListItemText primary='Users'/>
        </ListItem>
        <Divider/>
        <ProtectedComponent>
          <ListItem button component='a' href='/challenges'>
            <ListItemIcon><WhatshotIcon/></ListItemIcon>
            <ListItemText primary='Challenges'/>
          </ListItem>
        </ProtectedComponent>
        <WitnessComponent>
          <ListItem button component='a' href='/witness'>
            <ListItemIcon><VisibilityIcon/></ListItemIcon>
            <ListItemText primary='Witness'/>
          </ListItem>
        </WitnessComponent>
        <AdminComponent>
          <ListItem button component='a' href='/admin'>
            <ListItemIcon><SupervisorAccountIcon/></ListItemIcon>
            <ListItemText primary='Admin'/>
          </ListItem>
        </AdminComponent>
      </List>
    </div>
  );
};
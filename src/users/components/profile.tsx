import React from "react";
import {Avatar, Grid, Hidden, Typography} from "@material-ui/core";
import {User as UserType} from "../../types";
import {useStyles} from "../../theme";
import {Link} from "react-router-dom";


export function Profile(props: UserType) {
  const classes = useStyles();
  return (
    <Grid container justify='center' alignItems='center'>
      <Hidden smDown>
        <Grid item container justify='center' xs={6} md={1}>
          <Link to={`/users/${props.username}`} style={{color: 'black', textDecoration: 'none'}}>
            <Avatar className={classes.avatar} src={props.profile_img} style={{alignSelf: 'center'}}/>
          </Link>
        </Grid>
      </Hidden>
      <Grid item container direction='column' justify='center' xs={6} md={4} className={classes.container}>
        <Link to={`/users/${props.username}`} style={{color: 'black', textDecoration: 'none',}}>
          <Typography variant='h5' align='center'>{props.username}</Typography>
          <Typography variant='subtitle2' color='textSecondary' align='center' noWrap>{props.first_name} {props.last_name}</Typography>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Profile;
import React from "react";
import {User} from "../../../types";
import {Avatar, Grid, Hidden, Typography} from "@material-ui/core";
import {useStyles} from "../../../theme";

export function Profile(props: User): React.ReactElement {
  const classes = useStyles();
  return (
    <Grid container justify='center' alignItems='center'>
      <Hidden smDown>
        <Grid item container justify='center' xs={6} md={2}>
          <Avatar className={classes.avatar} src={props.profile_img} style={{alignSelf: 'center'}}/>
        </Grid>
      </Hidden>
      <Grid item container direction='column' justify='center' xs={6} md={4} className={classes.container}>
        <Typography variant='h5' align='center'>{props.username}</Typography>
        <Typography variant='subtitle2' color='textSecondary' align='center' noWrap>{props.first_name} {props.last_name}</Typography>
      </Grid>
    </Grid>
  );
}

export default Profile;
import React from "react";
import {Avatar, Grid, Hidden, Typography} from "@material-ui/core";
import {useStyles} from "../../../theme";
import {User} from "../../../types";

export function Challenger(props: User): React.ReactElement {
  const classes = useStyles();
  return (
    <Grid container justify='center'>
      <Grid item container xs={12} md={5} direction='column'>
        <Typography variant='h5' align='center'>
          {props.username}
        </Typography>
        <Typography variant='subtitle2' color='textSecondary' align='center' noWrap>
          {props.first_name} {props.last_name}
        </Typography>
      </Grid>
      <Hidden smDown>
        <Grid item container md={1}>
          <Avatar className={classes.avatar} src={props.profile_img} style={{alignSelf: 'center'}}/>
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default Challenger;
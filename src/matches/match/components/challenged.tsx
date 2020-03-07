import React from "react";
import {User} from "../../../types";
import {Avatar, Grid, Hidden, Typography} from "@material-ui/core";
import {useStyles} from "../../../theme";

export function Challenged(props: User): React.ReactElement {
  const classes = useStyles();
  return (
    <Grid container justify='center' direction='row-reverse'>
      <Grid item container xs={12} md={5} direction='column'>
        <Typography variant='h5' align='center'>
          {props.username}
        </Typography>
        <Typography variant='subtitle2' color='textSecondary' align='center'>
          {props.first_name} {props.last_name}
        </Typography>
      </Grid>
      <Hidden smDown>
        <Grid item container md={2}>
          <Avatar className={classes.avatar} src={props.profile_img} style={{alignSelf: 'center'}}/>
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default Challenged;
import {User} from "../../../types";
import React from "react";
import {Avatar, Grid, Hidden, Icon, IconButton, Typography} from "@material-ui/core";
import {useStyles} from "../../../theme";

export function Profile(props: User): React.ReactElement {
  const classes = useStyles();
  return (
    <Grid container justify='center' alignItems='center' className={classes.container}>
      <Hidden smDown>
        <Grid item container direction='row-reverse' xs={6} md={2}>
          <Avatar className={classes.large_avatar} alt={`${props.first_name} ${props.last_name}`} src={props.profile_img}/>
        </Grid>
      </Hidden>
      <Grid item container direction='column' alignItems='center' xs={6} md={4} className={classes.container}>
        <Grid item>
          <Typography variant="h3" align='center' gutterBottom>
            <b>
              {props.username}
            </b>
          </Typography>
        </Grid>
        <Hidden mdDown>
          <Grid item>
            <Typography variant="h4" color='textSecondary' align='center' noWrap>
              {props.first_name} {props.last_name}
            </Typography>
          </Grid>
        </Hidden>
        { (props.twitch_id || props.twitter_id) &&
          <Grid item container direction="row" justify='center' spacing={3}>
            {props.twitch_id && <Grid item>
              <IconButton href={`https://twitch.tv/${props.twitch_id}`}>
                <Icon><img alt="twitch" src={`${process.env.PUBLIC_URL}/img/twitch.svg`}/></Icon>
              </IconButton>
            </Grid>}
            {props.twitter_id && <Grid item>
              <IconButton href={`https://twitter.com/${props.twitter_id}`}>
                <Icon><img alt="twitter" src={`${process.env.PUBLIC_URL}/img/twitter.svg`}/></Icon>
              </IconButton>
            </Grid>}
          </Grid>
        }
      </Grid>
    </Grid>
  );
}

export default Profile;
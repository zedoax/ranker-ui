import React, {ChangeEvent} from 'react';
import {Grid, Hidden, MenuItem, TextField, Typography} from "@material-ui/core";
import {useStyles} from "../../theme";
import {Season} from "../../types";

export function Selector(props: {seasons: Season[], season: number, onSeasonChange: Function}): React.ReactElement {
  const classes = useStyles();

  // Selector change handler
  // Triggers update for selected season's target resource
  const handleSeasonChange = (event: ChangeEvent<{value:unknown}>) => props.onSeasonChange(event.target.value as number);

  return (
    <Grid container justify='center' alignItems='center' className={classes.container}>
      <Hidden mdDown>
        <Grid item md={4} lg={3}>
          <Grid item>
            <Typography align='center' variant='h4' className={classes.container}>
              Matches
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
      <Grid item xs={12} md={4} lg={3}>
        <TextField
          label="Season"
          value={props.season}
          variant="outlined"
          onChange={handleSeasonChange}
          select
          required
          fullWidth
        >
          {props.seasons.map(season => (
            <MenuItem key={season.id} value={season.id}>
              {season.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
}
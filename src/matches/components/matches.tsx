import React, {useEffect, useState} from 'react';
import Match from '../match';
import {Match as _Match, Season} from "../../types";
import {Divider, Grid, Paper} from "@material-ui/core";
import {Header} from "./header";
import {Selector} from "./selector";
import {useStyles} from "../../theme";
import {get} from "../../utils/fetch";


export function Matches(props: {seasons: Season[], season: number, onSeasonChange: Function}) {
  const classes = useStyles();

  // Matches list state
  const [matches, setMatches] = useState<_Match[] | undefined>(undefined);

  // Matches list population hook
  useEffect(() => {
    get(
      props.season ? `${process.env.REACT_APP_RANKER_URI}/seasons/${props.season}/matches`
        : `${process.env.REACT_APP_RANKER_URI}/matches`,
      (response: Response) => response.json(),
      (matches: _Match[]) => setMatches(matches)
    );
  }, [props.season]);

  if (!matches) {
    return <div/>;
  }

  return (
    <Grid container direction='column' spacing={2}>
      <Grid item>
        <div className={classes.container}>
          <Selector seasons={props.seasons} season={props.season} onSeasonChange={props.onSeasonChange}/>
        </div>
      </Grid>
      <Grid item>
        <Paper>
          <Header/>
          {matches.map((match) => (
            <div key={match.id}>
              <Divider component='div'/>
              <Match {...match}/>
            </div>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
}
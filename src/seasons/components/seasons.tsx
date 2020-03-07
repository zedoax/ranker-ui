import React from "react";
import {Grid} from "@material-ui/core";
import {Season as _Season} from "../../types";
import {Season} from "./season";

export function Seasons(props: {seasons: _Season[]}): React.ReactElement {
  return (
    <Grid container spacing={3}>
      {props.seasons.map((season: _Season) => (
        <Grid item xs={12} md={4} key={season.id}>
          <Season {...season}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default Seasons;
import React from "react";
import {Grid} from "@material-ui/core";
import {Season as _Season} from "../../../types";
import {Header} from "./header";
import Scores from "../../../scores";

export function Season(props: _Season): React.ReactElement {
  return (
    <Grid container direction='column' spacing={2}>
      <Grid item>
        <Header {...props}/>
      </Grid>
      <Grid item>
        {props.scores && <Scores scores={props.scores}/>}
      </Grid>
    </Grid>
  );
}

export default Season;
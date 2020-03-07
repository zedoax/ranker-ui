import {Score as _Score} from "../../types";
import React from "react";
import {Divider, Paper} from "@material-ui/core";
import {Header} from './header';
import Score from '../score';

export function Scores(props: {scores: _Score[]}): React.ReactElement {
  return (
    <Paper>
      <Header/>
      {props.scores.map((score: _Score, index: number) => (
        <div key={score.id}>
          <Divider component='div'/>
          <Score rank={index + 1} {...score}/>
        </div>
      ))}
    </Paper>
  );
}
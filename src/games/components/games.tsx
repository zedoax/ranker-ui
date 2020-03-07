import React from "react";
import {Game as _Game} from "../../types";
import {Grid} from "@material-ui/core";
import GameCard from "../game";

export function Games(props: {games: _Game[]}) {
  return (
    <Grid container spacing={3}>
      {props.games.map((game) => (
        <Grid item xs={12} md={4} key={game.id}>
          <GameCard {...game}/>
        </Grid>
      ))}
    </Grid>
  );
}
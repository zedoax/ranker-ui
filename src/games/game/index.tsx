import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {Game as _Game} from "../../types";
import {GameCard} from "../components/game";
import {Game} from "./components/game";
import {NewGame} from "./components/new-game";
import {get} from "../../utils/fetch";

export function GameById() {
  // Params from url via hook
  const {id} = useParams();

  // Game state
  const [game, setGame] = useState<_Game | undefined>(undefined);

  // Game retrieval hook
  useEffect(() => {
    get(
      `${process.env.REACT_APP_RANKER_URI}/games/${id}`,
      (response: Response) => response.json(),
      (game: _Game) => setGame(game)
    )
  }, [id]);

  if (!game) {
    return <div/>;
  }

  return <Game {...game}/>;
}

export {Game, NewGame};
export default GameCard;
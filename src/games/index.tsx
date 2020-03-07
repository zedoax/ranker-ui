import {Games} from './components/games';
import React, {useEffect, useState} from "react";
import {Game} from "../types";
import {get} from "../utils/fetch";

export function AllGames() {
  // Game list state
  const [games, setGames] = useState<Game[] | undefined>(undefined);

  // Game list population hook
  useEffect(() => {
    get(
      `${process.env.REACT_APP_RANKER_URI}/games`,
      (data: Response) => data.json(),
      (games: Game[]) => setGames(games)
    )
  }, []);

  if (!games) {
    return <div/>;
  }

  return <Games games={games}/>;
}

export default Games;
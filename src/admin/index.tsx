import React, {useEffect, useState} from 'react';
import {Game, User} from "../types";
import {get} from "../utils/fetch";
import Panel from "./panel";

export const AdminPanel = () => {
  // Panel population state
  const [games, setGames] = useState<Game[]|undefined>(undefined);
  const [users, setUsers] = useState<User[]|undefined>(undefined);

  // Population hook
  useEffect(() => {
    get(
      `${process.env.REACT_APP_RANKER_URI}/games`,
      (data: Response) => data.json(),
      (games: Game[]) => setGames(games)
    );
    get(
      `${process.env.REACT_APP_RANKER_URI}/users`,
      (data: Response) => data.json(),
      (users: User[]) => setUsers(users)
    );
  }, []);

  if (!games || !users) {
    return <div/>;
  }

  return <Panel games={games} users={users}/>;
};

export default AdminPanel;
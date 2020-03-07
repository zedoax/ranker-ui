import React, {useEffect, useState} from "react";
import {Season} from "../types";
import Seasons from "./components/seasons";
import {get} from "../utils/fetch";


export function AllSeasons() {
  const [seasons, setSeasons] = useState<Season[] | undefined>(undefined);
  useEffect(() => {
    get(
      `${process.env.REACT_APP_RANKER_URI}/seasons`,
      (data: Response) => data.json(),
      (_seasons: Season[]) => setSeasons(_seasons)
    );
  }, []);

  if (!seasons) {
    return <div/>;
  }

  return <Seasons seasons={seasons}/>;
}

type UserSeasonsProps = {
  username: string
}

export function UserSeasons({username}: UserSeasonsProps) {
  const [seasons, setSeasons] = useState<Season[] | undefined>(undefined);
  useEffect(() => {
    get(
      `${process.env.REACT_APP_RANKER_URI}/users/${username}/seasons`,
      (data: any) => data.json(),
      (seasons: Season[]) => setSeasons(seasons)
    );
  }, [username]);

  if (!seasons) {
    return <div/>;
  }

  return <Seasons seasons={seasons}/>;
}
import React, {useEffect, useState} from "react";
import {Season} from "../types";
import {Matches} from "./components/matches";
import {get} from "../utils/fetch";

export function SeasonMatches() {
  // Seasons and selected season state
  const [seasons, setSeasons] = useState<Season[] | undefined >(undefined);
  const [season, setSeason] = useState<number>(0);

  // Seasons population hook
  useEffect(() => {
    get(`${process.env.REACT_APP_RANKER_URI}/seasons`,
      (data: any) => data.json(),
      (seasons: any) => setSeasons(seasons)
    );
  }, []);

  if (!seasons) {
    return <div/>;
  }

  return <Matches seasons={seasons} season={season} onSeasonChange={setSeason}/>;
}

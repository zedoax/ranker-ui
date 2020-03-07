import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {Season as _Season} from "../../types";
import {Season} from './components/season';
import NewSeason from "./components/new-season";
import {get} from "../../utils/fetch";

export function SeasonById() {
  const {id} = useParams();
  const [season, setSeason] = useState<_Season | undefined>(undefined);
  useEffect(() => {
    get(`${process.env.REACT_APP_RANKER_URI}/seasons/${id}`,
      (data: Response) => data.json(), (_season: _Season) => setSeason(_season))
  }, [id]);

  if (!season) {
    return <div/>;
  }

  return <Season {...season}/>;
}

export {NewSeason};
export default Season;
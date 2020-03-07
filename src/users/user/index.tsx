import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {User} from './components/user';
import {User as _User} from "../../types";
import {get} from "../../utils/fetch";


export function UserById() {
  // Hooks and instance variables
  const {username} = useParams();

  // User info state
  const [user, setUser] = useState<_User | undefined>(undefined);

  // User info population hook
  useEffect(() => {
    get(`${process.env.REACT_APP_RANKER_URI}/users/${username}`,
      (response: Response) => response.json(),
      (data: _User) => setUser(data))
  }, [username]);

  if (!user) {
    return <div/>;
  }

  return <User {...user}/>;
}
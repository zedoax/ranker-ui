import React, {useEffect, useState} from "react";
import {User} from "../types";
import {Users} from "./components/users";
import {get} from "../utils/fetch";

export function AllUsers(): React.ReactElement {

  // Users list state
  const [users, setUsers] = useState<User[] | undefined>(undefined);

  // Users list population hook
  useEffect(() => {
    get(`${process.env.REACT_APP_RANKER_URI}/users`,
      (response: Response) => response.json(),
      (users: User[]) => setUsers(users))
  }, []);

  if (!users) {
    return <div/>;
  }

  return <Users users={users}/>;
}
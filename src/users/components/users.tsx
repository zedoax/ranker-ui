import React from "react";
import {Divider, Paper} from "@material-ui/core";
import {User as _User} from "../../types";
import User from "./user";
import {Header} from "./header";

export function Users(props: {users: _User[]}): React.ReactElement {
  return (
    <Paper>
      <Header/>
      {props.users.map((user) => (
        <div key={user.username}>
          <Divider component={'div'}/>
          <User {...user}/>
        </div>
      ))}
    </Paper>
  );
}
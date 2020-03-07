import React from "react";
import {Link} from "react-router-dom";
import {TableCell, TableRow} from "@material-ui/core";
import {Season as _Season} from "../../../types";

export function Score(props: _Season): React.ReactElement {
  return (
    <TableRow hover>
      <TableCell align='center'>
        <Link to={`/seasons/${props.id}`} style={{color: 'black', textDecoration: 'none'}}>{props.name}</Link>
      </TableCell>
      <TableCell align='center'>
        <Link to={`/seasons/${props.id}`} style={{color: 'black', textDecoration: 'none'}}>{props.start}</Link>
      </TableCell>
      <TableCell align='center'>
        <Link to={`/seasons/${props.id}`} style={{color: 'black', textDecoration: 'none'}}>{props.end}</Link>
      </TableCell>
    </TableRow>
  );
}

export default Score;
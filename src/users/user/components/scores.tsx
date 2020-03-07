import React from "react";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {Score as _Score} from "../../../types";
import Score from "./score";

export function Scores(props: { scores: _Score[] }): React.ReactElement {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align='center'><b>Period</b></TableCell>
          <TableCell align='center'><b>Start</b></TableCell>
          <TableCell align='center'><b>End</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { props.scores.map((score) => (<Score {...score.season} key={score.id}/>))}
      </TableBody>
    </Table>
  );
}

export default Scores;
import {Season as _Season} from "../../../types";
import React from "react";
import {Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {Score as SeasonRow} from "../../../users/user/components/score";

type SeasonsProps = {
  seasons: _Season[]
}

export function Seasons({ seasons }: SeasonsProps): React.ReactElement {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'><b>Season</b></TableCell>
            <TableCell align='center'><b>Start</b></TableCell>
            <TableCell align='center'><b>End</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { seasons.map((season) => (<SeasonRow {...season}/>))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Seasons;
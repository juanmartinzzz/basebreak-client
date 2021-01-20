import { Card, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import Table from "../Global/Table/Table";

const Alerts = ({ storeAndActions }) => (
  <Card>
    <Table title="Alerts" expand={false}>
      <TableRow>
        <TableCell>test</TableCell>
      </TableRow>
    </Table>
  </Card>
);

export default Alerts;

import React, { FunctionComponent } from "react";
import { IPerson } from "../Interfaces/IPerson";

type PersonsProps = {
  persons: IPerson[];
};

const Persons: FunctionComponent<PersonsProps> = ({ persons }) => {
  const style = { width: "100%" };
  const rows = persons.map((it) => (
    <tr>
      <td>{it.name}</td>
      <td>{it.age}</td>
    </tr>
  ));
  return (
    <div>
      <table style={style}>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {rows}
      </table>
    </div>
  );
};

export default Persons;

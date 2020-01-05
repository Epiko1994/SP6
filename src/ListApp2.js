import React, {useState} from "react";

const TableRow = (props) => {
  return (
    <tr>
      <td> {props.name} </td>
      <td> {props.age} </td>
    </tr>
  );
}

function MemberTable({members}) {
  const tableItems = members.map(member => (
    <TableRow key={member.id} name={member.name} age={member.age} />
  ));
  return (
    <table align="center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody> {tableItems} </tbody>
    </table>
  );
}

function Members(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members} />
    </div>
  );
}

export default function App() {
  const initialMembers = [{id: 1, name: "Peter", age: 18},
                          {id: 2, name: "Jan", age: 35},
                          {id: 3, name: "Janne", age: 25},
                          {id: 4, name: "Martin", age: 22}];
  const [members, setMembers] = useState(initialMembers)

  return (<Members members={members} />);
}
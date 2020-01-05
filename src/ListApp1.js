import React, {useState} from 'react';

function NumberList({numbers}) {
  console.log("Number: ", numbers)
  const listItems = numbers.map(n => <li key={n.toString()}>{n}</li>);
  return listItems;
}

function List(props) {
  console.log(props.numbers)
  return (
    <div>
      <h1> Numbers passed via props</h1>
      <ul>
        <NumberList numbers={props.numbers} />
      </ul>
    </div>
  );
}

export default function App() {
  const [numbers] = useState([1, 2, 3, 4]);
  return <List numbers={numbers} />;
}
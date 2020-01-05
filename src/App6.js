import React, {useState} from "react";

const NameForm =  () => {
  const [name, setName] = useState("");
  function handleChange(event) {}

  function handleSubmit(event) {
    window.alert("Name: " + name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={(event)=>setName(event.target.value)} value={name}/>
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </form>
      {name}
    </div>
  );
};

export default function Form() {
  return (
    <div>
      <NameForm />
    </div>
  );
}
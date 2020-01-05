import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(Time());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Time());
      console.log("running interval")
    },1000)
    return()=>{clearInterval(interval)}
  },[]);

  return (
    <div>
      <h1>The Time is: {time}</h1>
    </div>
  )
}

const Time = () => {
  return new Date().toLocaleTimeString();
}

export default App;
import React, {useState, useEffect} from 'react';

function App() {
  const [chuckNorris, setChucknorris] = useState("");
  const [dadJoke, setDadJoke] = useState("");

  const [chuckSelector, setChuckSelector] = useState(false);

  useEffect(() => {
    const fetchChuckNorris = () => {
      fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => setChucknorris(data.value))
      .catch(err => console.log(err));
    }
    fetchChuckNorris();
  }, [chuckSelector]);

  useEffect(() => {
    const timer = setInterval(() => {
      fetch("https://icanhazdadjoke.com/slack", {
        headers: {
          Accept: "application/json"
        }
      })
      .then(res => res.json())
      .then(data => setDadJoke(data.attachments[0].text))
      .catch(err => console.log(err));
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h1>Hi there</h1>
      <button onClick={() => setChuckSelector(!chuckSelector)}>
        Get a Chuck Norris Joke
      </button>
      <p>Chuck Norris Joke: {chuckNorris}</p>
      <p> Dad Joke: {dadJoke} </p>
    </div>
  )
}

export default App;
import React, { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [joke, setJoke] = useState({ setup: '', punchline: '' });
  const [punchline, setPunchline] = useState('');

  function getJokes() {
    getJoke().then((newJoke) => {
      setJoke(newJoke);
      setPunchline('');
    });
  }

  function delivery() {
    setPunchline('Punchline');
  }

  return (
    <>
      <h1>{joke.setup}</h1>
      <button type="button" onClick={punchline ? getJokes : delivery}>
        {punchline ? 'get a joke' : 'get delivery'}
      </button>
      {punchline && <h1 id="punchline">{joke.delivery}</h1>}
    </>
  );
}

export default Home;

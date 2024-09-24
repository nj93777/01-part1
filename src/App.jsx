import React, { useState, useEffect } from 'react';
import Hello from './components/Hello';
import HelloWorldWithLogic from './components/HelloWorldWithLogic';
import Friend from './components/Friend';

const App = () => {
  // Tilan määrittely ystäville
  const [friends, setFriends] = useState([
    { name: 'Leevi', age: 1 },
    { name: 'Venla', age: 1 },
  ]);

  // Tilan määrittely laskurille
  const [counter, setCounter] = useState(0);

  // Laskurin päivittäminen joka sekunti
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1); // Kasvatetaan laskuria yhdellä
    }, 1000);

    // Puhdistetaan intervalli, kun komponentti tuhoutuu tai efekti suoritetaan uudelleen
    return () => clearInterval(interval);
  }, []); // Tyhjä riippuvuuslista tarkoittaa, että efekti suoritetaan vain kerran

  // Tapahtumankäsittelijä, joka kasvattaa ystävän ikää
  const increaseAge = (index) => {
    setFriends(prevFriends => {
      const updatedFriends = [...prevFriends];
      updatedFriends[index].age += 1;
      return updatedFriends;
    });
  };

  // Tapahtumankäsittelijä, joka nollaa ystävän iän
  const resetAge = (index) => {
    setFriends(prevFriends => {
      const updatedFriends = [...prevFriends];
      updatedFriends[index].age = 0;
      return updatedFriends;
    });
  };

  return (
    <div>
      <h1>Greetings</h1>

      {/* Näytetään laskuri */}
      <p>Counter: {counter}</p>

      {/* Hello-komponentin käyttö */}
      <Hello />

      {/* HelloWorldWithLogic-komponentin käyttö */}
      <HelloWorldWithLogic />

      {/* Friend-komponenttien käyttö, jossa tapahtumankäsittelijät */}
      {friends.map((friend, index) => (
        <div key={friend.name}>
          <Friend name={friend.name} age={friend.age} />
          <button onClick={() => increaseAge(index)}>Increase {friend.name}'s age</button>
          <button onClick={() => resetAge(index)}>Reset {friend.name}'s age</button>
        </div>
      ))}
    </div>
  );
};

export default App;

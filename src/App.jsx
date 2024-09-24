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

  // Laskurin päivittäminen joka sekunti (laskuri on erillinen iän päivityksestä)
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1); // Kasvatetaan laskuria yhdellä
    }, 1000);

    // Puhdistetaan intervalli, kun komponentti tuhoutuu tai efekti suoritetaan uudelleen
    return () => clearInterval(interval);
  }, []); // Tyhjä riippuvuuslista tarkoittaa, että efekti suoritetaan vain kerran

  // Tapahtumankäsittelijä, joka kasvattaa ystävän ikää manuaalisesti
  const increaseAgeManually = (index) => {
    setFriends(prevFriends => {
      const updatedFriends = [...prevFriends];
      updatedFriends[index].age += 1; // Kasvatetaan ystävän ikää yhdellä
      return updatedFriends;
    });
  };

  // Tapahtumankäsittelijä, joka nollaa ystävän iän
  const resetAge = (index) => {
    setFriends(prevFriends => {
      const updatedFriends = [...prevFriends];
      updatedFriends[index].age = 0; // Nollataan ystävän ikä
      return updatedFriends;
    });
  };

  return (
    <div>
      <h1>Greetings</h1>

      {/* Näytetään laskuri */}
      <p>Counter: {counter}</p>

      {/* Hello-komponentin käyttö Leeville */}
      <Hello name={friends[0].name} age={friends[0].age} />

      {/* Hello-komponentin käyttö Venlalle */}
      <Hello name={friends[1].name} age={friends[1].age} />

      {/* HelloWorldWithLogic-komponentin käyttö */}
      <HelloWorldWithLogic />

      {/* Friend-komponenttien käyttö, jossa tapahtumankäsittelijät */}
      {friends.map((friend, index) => (
        <div key={friend.name}>
          <Friend name={friend.name} age={friend.age} />
          <button onClick={() => increaseAgeManually(index)}>Increase {friend.name}'s age</button>
          <button onClick={() => resetAge(index)}>Reset {friend.name}'s age</button>
        </div>
      ))}
    </div>
  );
};

export default App;

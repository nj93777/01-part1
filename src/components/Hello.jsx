import React from 'react';

const Hello = ({ name, age }) => {
  // Apufunktio syntymävuoden laskemiseksi
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  };

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  );
};

export default Hello;

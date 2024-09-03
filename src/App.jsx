import React from 'react';


const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};


const HelloWorldWithLogic = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  console.log(now, a + b);

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
};


const App = () => {
  const friends = [
    { name: 'Leevi', age: 4 },
    { name: 'Venla', age: 10 },
  ];

  return (
    <div>
      <h1>Greetings</h1>
      
    
      <Hello />

   
      <HelloWorldWithLogic />


      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  );
};

export default App;

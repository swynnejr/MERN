// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Dojo!</h1>
//       <h3>Things I need to do:</h3>
//       <ul>
//         <li>Learn React</li>
//         <li>Climb Mt Everest</li>
//         <li>Run a marathon</li>
//         <li>Feed the dogs</li>
//       </ul>
//     </div>
//   );
// }

// export default App;

  
import React from "react";
import PeopleComponent from "./components/SomeClassComponent.jsx";


class Person {
  constructor(firstName, lastName, age, hairColor) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.hairColor = hairColor;
  }
}

var jane = new Person("Jane", "Doe", 45, "Black");
var john = new Person("John", "Smith", 88, "Brown");
var millard = new Person("Millard", "Fillmore", 50, "Brown");
var marla = new Person("Marla", "Smith", 62, "Brown");

function App() {
  return (
      <div className="App">
          <PeopleComponent person={jane} />
          <PeopleComponent person={john} />
          <PeopleComponent person={millard} />
          <PeopleComponent person={marla} />
      </div>
  );
}

export default App;
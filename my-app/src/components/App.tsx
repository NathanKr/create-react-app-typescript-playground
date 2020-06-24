import React from 'react';
import './App.css';
import Persons from './Persons';
import { IPerson } from '../Interfaces/IPerson';

function App() {
  const persons : IPerson[] = [
    {name : "Nathan",age : 33},
    {name : "Sarit",age : 23},
  ];

  return (
    <div className="App">
      <Persons persons={persons}/>
    </div>
  );
}

export default App;

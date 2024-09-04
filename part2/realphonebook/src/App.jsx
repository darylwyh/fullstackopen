import { useState, useEffect } from 'react'
import axios from 'axios'
import personsService from './services/persons'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    console.log('effect')
    personsService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = persons.find(person => person.name === newName); 
    // if (persons.some(person => person.name === newName))
    const newPerson = { name: newName, number: newNumber };

    // Check if the name already exists in the phonebook
    if (existingPerson) {
      // alert(`${newName} is already added to the phonebook`); // JS template string
      if (window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)) {
        // Use PUT method to update the person's number
        personsService
          .update(existingPerson.id, newPerson)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : updatedPerson));
            setNewName('');
            setNewNumber('');
          })
          .catch(error => {
            alert(`The information of ${newName} has already been removed from the server.`);
            setPersons(persons.filter(person => person.id !== existingPerson.id)); // Remove from UI
          });
      }
    } else {
      personsService
        .create(newPerson)
        .then(returnedPersons => {
          setPersons(persons.concat(returnedPersons))
          setNewName('')
          setNewNumber('') 
        })
      // axios
      //   .post('http://localhost:3001/persons', newPerson)
      //   .then(response => {
      //     setPersons(persons.concat(response.data))
      //     setNewName('')
      //     setNewNumber('') 
      //   })
      //setPersons(persons.concat(newPerson));
      //setNewName(''); // Clear name input field
      //setNewNumber(''); // Clear number input field
    }
  };

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personsService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch(error => {
          alert(`The person '${name}' was already deleted from the server`);
          setPersons(persons.filter(person => person.id !== id)); // Remove from UI
        });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  // Filter persons based on searchName
  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchName={searchName} handleSearchChange={handleSearchChange} />

      <h3>Add a new</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons personsToShow={personsToShow} handleDelete={deletePerson}/>
    </div>
  );
}

export default App
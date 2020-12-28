import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from "./Filter";
import AddNew from "./AddNew";
import Numbers from "./Numbers";
import personsService from "./services/persons";
import Notification from "./Notification";

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newPerson, setNewPerson ] = useState({name: '', number: ''});
  const [ filterBy, setFilterBy ] = useState('');
  const [ notification, setNotification ] = useState(null);

  useEffect(() => {
      personsService.getPersons()
          .then(res => setPersons(res));
  }, []);

  const handlePerson = (event) => setNewPerson({...newPerson, name: event.target.value});
  const handlePhone = (event) => setNewPerson({...newPerson, number: event.target.value});

  const filteredPersons = persons.filter(person => person.name.toUpperCase().includes(filterBy.toUpperCase()));

  const addPerson = (event) => {
      event.preventDefault();
      const indexInPhonebook = persons.findIndex(person => person.name.toUpperCase() === newPerson.name.toUpperCase());
      const personObject = {
          name: newPerson.name,
          number: newPerson.number
      };
      if (indexInPhonebook === -1) {
          personsService.createPerson(personObject)
              .then(res => {
                  setPersons(persons.concat(res));
                  setNewPerson({name: '', number: ''});
                  setNotification({type: 'success', message: `Added ${personObject.name}`});
                  setTimeout(() => {
                      setNotification(null);
                  }, 5000);
              })
              .catch(error => {
                  setNotification({type: 'error', message: error.response.data.error});
                  setTimeout(() => {
                      setNotification(null);
                  }, 5000);
              })
      } else {
          let replaceNumber = window.confirm(`${newPerson.name} is already added to notebook, replace old number with new one?`);
          if(replaceNumber) {
              personsService.updatePerson(persons[indexInPhonebook].id, personObject)
                  .then(res => {
                      personsService.getPersons()
                          .then(res => setPersons(res));
                      setNewPerson({name: '', number: ''});
                  })
                  .catch(error => {
                      setNotification({type: 'error', message: `${personObject.name}'s data has already been removed from the server`});
                      setTimeout(() => {
                          setNotification(null);
                      }, 5000);
                  });
          } else {
              setNewPerson({name: '', number: ''});
          }
      }
  };

  const deletePerson = (person) => {
      let confirmDelete = window.confirm(`delete ${person.name}?`);
      if(confirmDelete) {
          personsService.deletePerson(person.id)
              .then(res => {
                  personsService.getPersons()
                      .then(res => setPersons(res));
              });
      }
  };

  const filterPersons = (event) => {
    setFilterBy(event.target.value);
  };


  return (
      <div>
          <Filter filterBy={filterBy} filterPersons={filterPersons}/>

          <h2>Phonebook</h2>

          <Notification notification={notification} />

          <AddNew addPerson={addPerson} newPerson={newPerson} handlePerson={handlePerson} handlePhone={handlePhone}/>

          <Numbers filteredPersons={filteredPersons} deletePerson={deletePerson} />
      </div>
  )
};

export default App

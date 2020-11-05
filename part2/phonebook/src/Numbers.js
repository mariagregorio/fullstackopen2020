import React from 'react';
import Person from "./Person";

const Numbers = ({filteredPersons, deletePerson}) => {
    return (
        <>
            <h2>Numbers</h2>
            {filteredPersons.length > 0
                ? filteredPersons.map(person => <Person key={person.name} person={person} deletePerson={deletePerson} />)
                : <p>No persons found</p>}
        </>
    )
};

export default Numbers

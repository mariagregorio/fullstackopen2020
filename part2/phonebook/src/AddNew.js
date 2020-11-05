import React from 'react';

const AddNew = ({addPerson, newPerson, handlePerson, handlePhone}) => {
    return (
        <>
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    <div>
                        <label>name </label>
                        <input type="text" value={newPerson.name} onChange={handlePerson}/>
                    </div>
                    <div>
                        <label>phone </label>
                        <input type="text" value={newPerson.number} onChange={handlePhone}/>
                    </div>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
};

export default AddNew

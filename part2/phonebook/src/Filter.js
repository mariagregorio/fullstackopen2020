import React from 'react';

const Filter = ({filterBy, filterPersons}) => {
    return (
        <form>
            <div>
                <label>filter shown with </label>
                <input type="text" value={filterBy} onChange={filterPersons}/>
            </div>
        </form>
    )
};

export default Filter

import axios from 'axios';

const baseUrl = '/api/persons';

const getPersons = () => {
    const request = axios.get(baseUrl);
    return request.then(res => res.data);
};

const createPerson = (personObject) => {
    const request = axios.post(baseUrl, personObject);
    return request.then(res => res.data);
};

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(res => res.data);
};

const updatePerson = (id, personObject) => {
    const request = axios.put(`${baseUrl}/${id}`, personObject);
    return request.then(res => res.data);
};

const personsService = {getPersons, createPerson, deletePerson, updatePerson};

export default personsService

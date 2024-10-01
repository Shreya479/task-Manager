import axios from 'axios';

export const fetchTasks = () =>{
    return axios.get('https://jsonpalceholder.typiocode.com/todos?_limit=5');
};
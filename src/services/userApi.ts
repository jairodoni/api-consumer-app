import axios from 'axios';

export const userApi = axios.create({
  baseURL: 'https://reqres.in',
});

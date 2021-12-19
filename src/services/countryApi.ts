import axios from 'axios';

export const countryApi = axios.create({
  baseURL: 'http://www.amock.io/api/fcmaia',
});

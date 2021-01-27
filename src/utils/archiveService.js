import tokenService from './tokenService';
import axios from 'axios'

const BASE_URL = '/api';

export function addToArchive(obj){
  return axios.post(`${BASE_URL}/reddit/archived`, obj, {
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }).then(data => {
    console.log(data);
    return data
  }, (err) => {
    console.log(err);
  })
}

export function removeFromArchive(id){
  return fetch(`${BASE_URL}/reddit/archive/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }).then(res => res.json());
}
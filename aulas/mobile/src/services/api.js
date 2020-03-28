import axios from 'axios';

/** baseUrl - deve receber o IP do celular, localhost somente quando estiver executando no emulador 
 * 3333 - porta utilizada no node
*/
const api = axios.create({
   baseURL: 'http://192.168.0.19:3333' 
});

export default api;
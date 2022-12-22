import axios from 'axios';

const API = axios.create({
  baseURL: 'https://localhost:7271/',
});

// ==> token author
// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }
//   return req;
// });

export const createCamp = (newCampaign) => API.post('/api/camp', newCampaign);
export const editCamp = (camp, id) => API.put(`/api/camp/${id}`, camp);
export const getCamp = () => API.get('/api/camp');

export const getAuction = () => API.get('/api/auctionAll'); 
export const createAuction = (auc) => API.post('/api/auction', auc);
export const getAuctionById = (id) => API.get(`/api/auction?id=${id}`);
export const doneAuction = (id) => API.put(`/api/auction?id=${id}`);
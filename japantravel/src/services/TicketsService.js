import axios from 'axios';

const TICKETS_API_BASE_URL = "http://localhost:8080/api/tickets";

class TicketsService {

 getTickets(){
return axios.get(TICKETS_API_BASE_URL);
}

 createTickets(tickets){
return axios.post(TICKETS_API_BASE_URL, tickets);
}

 getTicketsById(ticketsId){
return axios.get(TICKETS_API_BASE_URL + '/' + ticketsId);
}

 updateTickets(tickets, ticketsId){
return axios.put(TICKETS_API_BASE_URL + '/' + ticketsId, tickets);
}

 deleteTickets(ticketsId){
return axios.delete(TICKETS_API_BASE_URL + '/' + ticketsId);
}
}

export default new TicketsService()
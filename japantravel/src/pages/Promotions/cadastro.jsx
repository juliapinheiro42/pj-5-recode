import React, { Component } from 'react'
import TicketsService from '../../services/TicketsService';
import './style.css';
import Header from '../../components/Header';
import { Card } from 'react-bootstrap';
import tokyo from '../../assets/japao.svg';
class CadastroComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tickets: []
        }
        this.addTickets = this.addTickets.bind(this);
        this.editTickets = this.editTickets.bind(this);
        this.deleteTickets = this.deleteTickets.bind(this);
    }

    deleteTickets(id){
        TicketsService.deleteTickets(id).then( res => {
            this.setState({tickets: this.state.tickets.filter(tickets => tickets.id !== id)});
        });
    }
    editTickets(id){
        this.props.history.push(`/add-tickets/${id}`);
    }

    componentDidMount(){
        TicketsService.getTickets().then((res) => {
            this.setState({ tickets: res.data});
        });
    }

    addTickets(){
        this.props.history.push('/add-tickets/_add');
    }

    render() {
        return (
            <div className='card-ticket'>
                <Header/>
                <div className='ticket-btn'>
                <h2 className="text-center mt-3">Tickets</h2>
                <button onClick={this.addTickets} className='btn'> Add tickets</button>
                </div>
                <div className='d-flex'>
                { this.state.tickets.map(
                                        tickets => 
                <Card style={{ width: '18rem' }} key = {tickets.id} className='m-5'>
                <Card.Img variant="top" src={tokyo} />
            
                <Card.Body >
              
                <Card.Title className='text-center' >{ tickets.name}</Card.Title>
                <Card.Text className='text-center'>
                 {tickets.price}
                 <br/>
                 {tickets.status}
                </Card.Text>
               <div className='d-flex'>
                <button className='btn ' onClick={ () => this.editTickets(tickets.id)}>Update </button>
                <button className='btn' onClick={ () => this.deleteTickets(tickets.id)} >Delete </button>
                
                </div>
                </Card.Body>
              
                </Card>
                 )}
                 </div>
            </div>
            
        )
    }


 
  
    
}

export default CadastroComponent;
import React, { Component } from 'react'
import TicketsService from '../../services/TicketsService';
import './style.css';


class CreateTicketsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            price: '',
            status: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.saveOrUpdateTickets = this.saveOrUpdateTickets.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            TicketsService.getTicketsById(this.state.id).then( (res) =>{
                let tickets = res.data;
                this.setState({name: tickets.name,
                    lastName: tickets.price,
                    emailId : tickets.status
                });
            });
        }        
    }
    saveOrUpdateTickets = (e) => {
        e.preventDefault();
        let tickets = {name: this.state.name, price: this.state.price, status: this.state.status};
        console.log('tickets => ' + JSON.stringify(tickets));

        // step 5
        if(this.state.id === '_add'){
            TicketsService.createTickets(tickets).then(res =>{
                this.props.history.push('/cadastro');
            });
        }else{
            TicketsService.updateTickets(tickets, this.state.id).then( res => {
                this.props.history.push('/cadastro');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    changeStatusHandler= (event) => {
        this.setState({status: event.target.value});
    }

    cancel(){
        this.props.history.push('/cadastro');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="center">Add Tickets</h3>
        }else{
            return <h3 className="text-center">Update Tickets</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>
                                        <div className = "group">
                                            <label> Status: </label>
                                            <input placeholder="Status" name="status" className="control" 
                                                value={this.state.status} onChange={this.changeStatusHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateTickets}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} >Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateTicketsComponent
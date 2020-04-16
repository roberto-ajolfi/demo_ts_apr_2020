import React, { Component } from 'react'
import TicketDataService from '../services/dataService'

class TicketListState {
    constructor(
        public error: any,
        public tickets: any,
        public loading: boolean
    ) {}
}
export default class TicketList extends Component<any, TicketListState> {
    dataService: TicketDataService = new TicketDataService();

    constructor(props: any) {
        super(props);
        
        this.state = { error: null, tickets: [], loading: true };
    }

    render() {
        const { loading, error, tickets } = this.state;

        if(error) {
            return <div>ERRORE!!!! => {error}</div>;
        }

        if(loading) {
            return <div>Loading ...</div>;
        }

        const listOfTickets = tickets.map(
            (ticket: any) => <li>{ticket.id} - {ticket.title}</li>
        );

        return (
            <div>
                <h1>Ticket List</h1>
                <ul>{listOfTickets}</ul>
            </div>
        )
    }

    componentDidMount() {
        this.dataService
            .getTicketList()
            .then(
                (data:any) => {
                    this.setState(
                        { loading: false, tickets: data }
                    );
                },
                (err: any) => {
                    this.setState(
                        { loading: false, error: err }
                    );
                }
            );
    }
}

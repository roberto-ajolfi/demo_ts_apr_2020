import React from 'react';
import User from '../models/User';

interface SecondComponentProps {
    user: User;
}

class SecondComponentState {
    constructor(
        public user: User,
        public userDetailsShowing: boolean = false,
        public userDetailsToggleLabel: string = ''
    ) {}
}

export default class SecondComponent 
        extends React.Component<SecondComponentProps, SecondComponentState> {
    constructor(props: SecondComponentProps) {
        super(props);

        // inizializzazione dello stato
        this.state = new SecondComponentState(
            this.props.user,
            false,
            'Show'
        );  
        
        //this.toggleUserDetails = this.toggleUserDetails.bind(this);
    }

    toggleUserDetails = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const label = this.state.userDetailsToggleLabel === 'Show' ? 'Hide' : 'Show';

        this.setState(
            {
                userDetailsShowing: !this.state.userDetailsShowing,
                userDetailsToggleLabel: label
            }
        );
    }

    render() {
        const box = this.state.userDetailsShowing &&
            <div className='box'>
                <h3>User# {this.state.user.id}</h3>
                <hr/>
                <h3>{this.state.user.userName}</h3>
                <h3>{this.state.user.firstName}</h3>
                <h3>{this.state.user.lastName}</h3>
            </div>;

        return(
            <div>
                <h1>
                    User Details&nbsp;
                    <a href='#' onClick={this.toggleUserDetails}>{this.state.userDetailsToggleLabel}</a>
                </h1>
                {box} 
            </div>
        );
    }
}